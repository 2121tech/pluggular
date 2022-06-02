import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faSort, faSortDown, faSortUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { TButtonFill, TRole } from '../button/button.component';
import { TSelectOption } from '../select/select.component';

export type TField = {
  label: string;
  key: string;
  sortable?: boolean;
};

export type TTableButton = {
  text: string;
  fill: TButtonFill;
  action: (data: Record<string, unknown>) => void;
  role?: TRole;
  icon?: IconDefinition;
};

export type TSortEvent = {
  sortField: string;
  sortMethod: 'ascending' | 'descending';
};

export type TSortOption = {
  label: string;
  value: string;
};

@Component({
  selector: 'plg-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class PluggularTableComponent {
  @Input() data: Record<string, unknown>[] = [];
  @Input() buttons: TTableButton[] = [];
  @Input() fields: TField[] = [];
  @Input() noDataMsg = 'No Data';
  @Input() showPageLimit = true;
  @Input() pages = 1;
  @Input() sortOptions?: TSortOption[] = [];
  @Input() headerContainerStyle?: string;
  @Input() headerItemStyle?: string;
  @Input() dataItemStyle?: string;
  @Output() hasSortOptionChanged = new EventEmitter<string>();
  @Output() hasPageChanged = new EventEmitter<number>();
  @Output() hasPageLimitChanged = new EventEmitter<string>();
  @Output() hasTableSorted = new EventEmitter<TSortEvent>();
  pageLimit = '10';
  pageLimitOptions: TSelectOption[] = [
    {
      label: '10',
      value: '10',
    },
    {
      label: '20',
      value: '20',
    },
    {
      label: '50',
      value: '50',
    },
  ];

  sortIcon = faSort;
  sortUpIcon = faSortUp;
  sortDownIcon = faSortDown;

  activeSortField = '';
  isAscending = false;

  onPageClick(event: number): void {
    this.hasPageChanged.emit(event);
  }

  onPageLimitChange(): void {
    this.hasPageLimitChanged.emit(this.pageLimit);
  }

  onHeaderSortClick(event: TField): void {
    if (event.sortable) {
      if (event.label !== this.activeSortField) {
        this.activeSortField = event.label;
        this.isAscending = true;
      } else {
        this.isAscending = !this.isAscending;
      }

      const sortEvent: TSortEvent = {
        sortField: this.activeSortField,
        sortMethod: this.isAscending ? 'ascending' : 'descending',
      };

      this.hasTableSorted.emit(sortEvent);
    }
  }

  onSortOptionChange(event: Event): void  {
    const element = event.currentTarget as HTMLSelectElement;
    this.hasSortOptionChanged.emit(element.value);
  }
}

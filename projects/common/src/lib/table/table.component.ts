import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { faSort, faSortDown, faSortUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TActionOption } from '../action-selector/action-selector.component';

import { TButtonFill, TRole } from '../button/button.component';
import { TSelectOption } from '../select/select.component';
import { PluggularTablePaginationComponent } from '../table-pagination/table-pagination.component';

export type TField = {
  label: string;
  key: string;
  sortable?: boolean;
};

export type TTableButton = {
  text: string;
  fill?: TButtonFill;
  action?: (data: Record<string, unknown>) => void;
  role?: TRole;
  icon?: IconDefinition;
  buttonStyle?: string;
  isActionSelector?: boolean;
  actionOptions?: TActionOption[][];
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
  styleUrls: ['./table.component.css'],
})
export class PluggularTableComponent implements OnInit {
  @Input() data: Record<string, unknown>[] = [];
  @Input() buttons: TTableButton[] = [];
  @Input() fields: TField[] = [];
  @Input() noDataMsg = 'No Data';
  @Input() showPageLimit = true;
  @Input() pages = 1;
  @Input() sortOptions?: TSortOption[] = [];
  @Input() tableContainerStyle = '';
  @Input() headerContainerStyle = '';
  @Input() headerItemStyle = '';
  @Input() dataItemStyle = '';
  @Input() isInfinitePagination = false;
  @Input() isLastPage = false;
  @Input() actionHeaderText = 'Actions';
  @Input() showPagination = true;
  @Input() tableRowStyle = '';
  @Input() page = 0;
  @Output() hasSortOptionChanged = new EventEmitter<string>();
  @Output() hasPageChanged = new EventEmitter<number>();
  @Output() hasPageLimitChanged = new EventEmitter<string>();
  @Output() hasTableSorted = new EventEmitter<TSortEvent>();
  @Output() hasRowClicked = new EventEmitter();
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
  rowStyle = {};

  @ContentChild(TemplateRef, { static: true }) actionsTemplate?: TemplateRef<{ data: Record<string, unknown> }>;

  @ViewChild('tablePagination') tablePagination?: PluggularTablePaginationComponent;

  ngOnInit(): void {
    this.rowStyle = this.constructGridCol();
  }

  private constructGridCol(): Record<string, string> {
    const colCount =
      (this.buttons && this.buttons.length > 0) || this.actionsTemplate ? this.fields.length + 1 : this.fields.length;
    const obj = {
      'grid-template-columns': `repeat(${colCount}, 1fr)`,
    };

    return obj;
  }
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

  onSortOptionChange(event: Event): void {
    const element = event.currentTarget as HTMLSelectElement;
    this.hasSortOptionChanged.emit(element.value);
  }

  onRowClick(item: unknown): void {
    this.hasRowClicked.emit(item);
  }

  setCurrentPage(currentPage: number) {
    this.tablePagination?.setCurrentPage(currentPage);
  }
}

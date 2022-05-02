import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { TButtonFill, TRole } from '../button/button.component';
import { TSelectOption } from '../select/select.component';

export type TField = {
  label: string;
  key: string;
};

export type TTableButton = {
  text: string;
  fill: TButtonFill;
  action: (data: Record<string, unknown>) => void;
  role?: TRole;
  icon?: IconDefinition;
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
  @Input() pages = 1;
  @Output() hasPageChanged = new EventEmitter<number>();
  @Output() hasPageLimitChanged = new EventEmitter<string>();
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

  onPageClick(event: number): void {
    this.hasPageChanged.emit(event);
  }

  onHasPageLimitChange(): void {
    this.hasPageLimitChanged.emit(this.pageLimit);
  }
}

import { Component, Input } from '@angular/core';
import { TButtonFill, TRole } from '../button/button.component';

export type TField = {
  label: string;
  key: string;
};

export interface IData extends Record<string, unknown> {
  first_name: string;
  last_name: string;
  email: string;
}

export type TTableButton = {
  text: string;
  fill: TButtonFill;
  action: (data: Record<string, unknown>) => void;
  role?: TRole;
};

@Component({
  selector: 'pluggular-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class PluggularTableComponent {
  @Input() data: Record<string, unknown>[] = [];
  @Input() buttons: TTableButton[] = [];
  @Input() fields: TField[] = [];
}

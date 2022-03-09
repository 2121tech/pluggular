import { Component, Input } from '@angular/core';
import { TButtonFill, TRole } from '../button/button.component';

export type TField = {
  label: string;
  key: string;
};

export interface IData extends Record<string, string | number | boolean> {
  first_name: string;
  last_name: string;
  email: string;
}

export type TTableButton = {
  text: string;
  fill: TButtonFill;
  action: (data: any) => void;
  role?: TRole;
};

@Component({
  selector: 'pluggular-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class PluggularTableComponent {
  @Input() data: any = [];
  @Input() buttons: TTableButton[] = [];
  @Input() fields: TField[] = [];
}

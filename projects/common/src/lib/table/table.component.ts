import { Component, Input, OnInit } from '@angular/core';
import { ButtonType, RoleType } from '../button/button.component';

export type FieldType = {
  label: string;
  key: string;
};

export interface Data extends Record<string, any> {
  first_name: string;
  last_name: string;
  email: string;
}

export type TableButtonType = {
  text: string;
  type: ButtonType;
  action: (data: any) => void;
  role?: RoleType;
};

@Component({
  selector: 'pluggular-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class PluggularTableComponent implements OnInit {
  @Input() data: any = [];
  @Input() buttons: TableButtonType[] = [];
  @Input() fields: FieldType[] = [];
  constructor() {}

  ngOnInit(): void {}
}

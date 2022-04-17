import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TButtonFill, TRole } from '../button/button.component';

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
}

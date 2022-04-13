import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TSelectOption } from '../select/select.component';

export type TFilterField = {
  type: string;
  name: string;
  options?: TSelectOption[];
  label?: string;
  placeholder?: string;
};

export type TFilterColumn = {
  label: string;
  fields: TFilterField[];
};

export type TFilterFields = {
  row: TFilterColumn[];
};

export type TTableFilterBody = Record<string, string | number>;

@Component({
  selector: 'plg-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css'],
})
export class PluggularTableFilterComponent {
  @Output() hasSubmitted = new EventEmitter<Record<string, string | number>>();
  @Input() fields?: TFilterFields[] = undefined;
  @Input() formGroup!: FormGroup;

  onSubmit(): void {
    this.hasSubmitted.emit(this.formGroup.value);
  }
}

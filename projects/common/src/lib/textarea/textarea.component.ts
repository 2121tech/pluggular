import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { TInputType } from '../input/input.component';

@Component({
  selector: 'plg-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class PluggularTextAreaComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type: TInputType = 'text';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() rows: string | number | undefined;
  @Input() maxLength = 524288;
  @Input() minLength = 0;

  errorMessages = new Map<string, string>();

  @Output() hasBlurred: EventEmitter<boolean> = new EventEmitter();

  onChange: (value: string) => void = (): void => {
    return;
  };

  onTouch: () => void = (): void => {
    return;
  };

  value = '';

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  public get invalid(): boolean | null {
    return this.control ? this.control.invalid : false;
  }

  public get showError(): boolean | null {
    if (!this.control) {
      return false;
    }

    const { dirty, touched } = this.control;

    return this.invalid ? dirty || touched : false;
  }

  public get errors(): string[] {
    if (!this.control) {
      return [];
    }

    const { errors } = this.control;

    return Object.keys(errors || {}).map((key) => <string>errors?.[key] || key);
  }

  setValue(): void {
    this.writeValue(this.value);
    this.onTouch();
  }

  writeValue(obj: string): void {
    this.onChange(obj);
    this.value = obj;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  blur(): void {
    this.hasBlurred?.emit(true);
  }
}

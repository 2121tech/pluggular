import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

export type TInputType = 'text' | 'number';

@Component({
  selector: 'pluggular-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type: TInputType = 'text';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() maxLength = 0;
  @Input() minLength = 0;

  errorMessages = new Map();

  onChange = (value: string): void => {
    console.log(value);
  };

  onTouch = (): void => {
    console.log('On Touch');
  };

  @Output() byBlur: EventEmitter<boolean> = new EventEmitter();

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

  public get errors(): Array<string> {
    if (!this.control) {
      return [];
    }

    const { errors } = this.control;

    return Object.keys(errors || {}).map((key) =>
      this.errorMessages.has(key) ? this.errorMessages.get(key)() : <string>errors?.[key] || key,
    );
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
    this.byBlur?.emit(true);
  }
}

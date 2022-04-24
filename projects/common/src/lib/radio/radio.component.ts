import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

export type TRadioItem = {
  label: string;
  value: TRadioValue;
};

export type TRadioValue = string | number | boolean;
@Component({
  selector: 'plg-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
})
export class PluggularRadioComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() items: TRadioItem[] | null | undefined = [];
  @Input() required = true;
  @Input() disabled = false;

  @Input() set value(val: TRadioValue) {
    this.writeValue(val);
  }

  get value(): TRadioValue {
    return this._value;
  }

  private _value: TRadioValue = '';

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  onChange: (value: TRadioValue) => void = (): void => {
    return;
  };

  onTouch: () => void = (): void => {
    return;
  };

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(value: TRadioValue): void {
    this._value = value;
    this.onChange(value);
  }

  setValue(value: TRadioValue): void {
    if (!this.disabled) {
      this.writeValue(value);
    }
  }
}

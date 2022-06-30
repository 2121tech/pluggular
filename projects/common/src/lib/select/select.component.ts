import { Component, ElementRef, Input, OnInit, Optional, Renderer2, Self } from '@angular/core';
import { NgControl, SelectControlValueAccessor } from '@angular/forms';
import { TRoundness } from '../input/input.component';

export type TSelectOption = {
  label: string;
  value: string;
};

@Component({
  selector: 'plg-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class PluggularSelectComponent extends SelectControlValueAccessor implements OnInit {
  @Input() label? = '';
  @Input() options: TSelectOption[] | null | undefined = [];
  @Input() required = false;
  @Input() disabled = false;
  @Input() placeholder: string | undefined | null = '';
  @Input() roundness: TRoundness = 'small';
  @Input() labelStyle = '';
  @Input() containerStyle = '';
  @Input() inputStyle = '';
  @Input() optionItemStyle = '';

  roundedClass = '';
  value = '';

  onChange: (value: string) => void = (): void => {
    return;
  };

  onTouch: () => void = (): void => {
    return;
  };

  constructor(_renderer: Renderer2, _elementRef: ElementRef, @Self() @Optional() public control: NgControl) {
    super(_renderer, _elementRef);
    this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    this.roundedClass = this.constructRoundness(this.roundness);
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

  public get errors(): string[] {
    if (!this.control) {
      return [];
    }

    const { errors } = this.control;

    return Object.keys(errors || {}).map((key) => <string>errors?.[key] || key);
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

  private constructRoundness(roundness: TRoundness): string {
    let roundedClass = '';
    switch (roundness) {
      case 'small':
        roundedClass = 'rounded';
        break;
      case 'medium':
        roundedClass = 'rounded-md';
        break;
      case 'large':
        roundedClass = 'rounded-lg';
        break;
      case 'full':
        roundedClass = 'rounded-3xl';
        break;
      default:
        break;
    }

    return roundedClass;
  }
}

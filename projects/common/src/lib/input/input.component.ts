import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export type TInputType = 'text' | 'number' | 'password' | 'file';
export type TRoundness = 'small' | 'medium' | 'large' | undefined | null;

@Component({
  selector: 'plg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class PluggularInputComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | undefined = '';
  @Input() type: TInputType = 'text';
  @Input() required = false;
  @Input() placeholder: string | undefined | null = '';
  @Input() disabled = false;
  @Input() maxLength = 524288;
  @Input() minLength = 0;
  @Input() labelStyle = 'text-gray-500';
  @Input() roundness: TRoundness = 'small';

  errorMessages = new Map<string, string>();
  roundedClass = '';

  onChange: (value: string) => void = (): void => {
    return;
  };

  onTouch: () => void = (): void => {
    return;
  };

  @Output() hasBlurred: EventEmitter<boolean> = new EventEmitter();

  value = '';

  isVisible = false;

  icon = faEye;

  _type = 'text';

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    this._type = this.type;
    this.roundedClass = this.constructRoundness(this.roundness);
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

  onEyeClick(): void {
    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      this._type = 'text';
      this.icon = faEyeSlash;
    } else {
      this._type = 'password';
      this.icon = faEye;
    }
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
      default:
        break;
    }

    return roundedClass;
  }
}

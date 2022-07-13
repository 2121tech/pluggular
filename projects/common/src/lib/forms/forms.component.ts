import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TRoundness } from '../input/input.component';
import { TRadioItem } from '../radio/radio.component';
import { TSelectOption } from '../select/select.component';

export type TFormField = {
  type: string;
  name: string;
  options?: TSelectOption[];
  radioOptions?: TRadioItem[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  containerStyle?: string;
};

export type TFormColumn = {
  label: string;
  fields: TFormField[];
};

export type TFormFields = {
  row: TFormColumn[];
};

export type TFormBody = Record<string, string | number>;

export type TInputStyle = {
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
};

export type TSelectInputStyle = {
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  optionItemStyle?: string;
};

export type TTextAreaStyle = {
  labelStyle?: string;
  inputStyle?: string;
};

export type TButtonStyle = {
  buttonStyle?: string;
  buttonIconStyle?: string;
};

@Component({
  selector: 'plg-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class PluggularFormsComponent {
  @Output() hasSubmitted = new EventEmitter<TFormBody>();
  @Input() fields?: TFormField[] = [];
  @Input() formGroup!: FormGroup;
  @Input() submitText? = 'Submit';
  @Input() labelStyle? = '';
  @Input() inputRoundness?: TRoundness;
  @Input() showSubmitButton: boolean | null | undefined = true;
  @Input() inputCustomStyle?: TInputStyle;
  @Input() selectInputCustomStyle?: TSelectInputStyle;
  @Input() textAreaCustomStyle?: TTextAreaStyle;
  @Input() buttonCustomStyle?: TButtonStyle;
  @Input() rowCustomStyle? = '';

  onSubmit(): void {
    this.hasSubmitted.emit(this.formGroup.value);
  }
}

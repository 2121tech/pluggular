import { Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PluggularInputComponent } from '../input/input.component';

@Component({
  selector: 'plg-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class PluggularDatePickerComponent extends PluggularInputComponent {
  constructor(@Self() @Optional() public control: NgControl) {
    super(control);
  }
}

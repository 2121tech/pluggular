import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PluggularInputComponent } from '../input/input.component';

@Component({
  selector: 'plg-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class PluggularDatePickerComponent extends PluggularInputComponent implements OnInit {
  constructor(@Self() @Optional() public control: NgControl) {
    super(control);
  }

  ngOnInit(): void {
    this.roundedClass = this.constructRoundness(this.roundness);
  }
}

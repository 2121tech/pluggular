import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PluggularButtonComponent, PluggularTableComponent, InputComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [PluggularButtonComponent, PluggularTableComponent],
})
export class PluggularCommonModule {}

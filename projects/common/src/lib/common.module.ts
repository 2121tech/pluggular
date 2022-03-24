import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PluggularInputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluggularTextAreaComponent } from './textarea/textarea.component';
@NgModule({
  declarations: [
    PluggularButtonComponent,
    PluggularTableComponent,
    PluggularInputComponent,
    PluggularTextAreaComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  exports: [PluggularButtonComponent, PluggularTableComponent, PluggularInputComponent, PluggularTextAreaComponent],
})
export class PluggularCommonModule {}

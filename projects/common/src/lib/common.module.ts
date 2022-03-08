import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [PluggularButtonComponent, PluggularTableComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [PluggularButtonComponent, PluggularTableComponent],
})
export class PluggularCommonModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';

@NgModule({
  declarations: [PluggularButtonComponent, PluggularTableComponent],
  imports: [CommonModule],
  exports: [PluggularButtonComponent, PluggularTableComponent],
})
export class PluggularCommonModule {}

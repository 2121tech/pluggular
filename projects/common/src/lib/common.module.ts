import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';



@NgModule({
  declarations: [
    PluggularButtonComponent,
    PluggularTableComponent
  ],
  imports: [
  ],
  exports: [
    PluggularButtonComponent,
    PluggularTableComponent
  ]
})
export class PluggularCommonModule { }

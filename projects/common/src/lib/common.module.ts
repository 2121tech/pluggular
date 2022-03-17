import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PluggularInputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluggularHeadernavComponent } from './headernav/headernav.component';
import { PluggularHeaderNavItemComponent } from './header-nav-item/header-nav-item.component';

@NgModule({
  declarations: [
    PluggularButtonComponent,
    PluggularTableComponent,
    PluggularInputComponent,
    PluggularHeadernavComponent,
    PluggularHeaderNavItemComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  exports: [
    PluggularButtonComponent,
    PluggularTableComponent,
    PluggularInputComponent,
    PluggularHeadernavComponent,
    PluggularHeaderNavItemComponent,
  ],
})
export class PluggularCommonModule {}

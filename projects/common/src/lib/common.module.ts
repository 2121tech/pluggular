import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PluggularInputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluggularHeadernavComponent } from './headernav/headernav.component';
import { PluggularHeaderNavItemComponent } from './header-nav-item/header-nav-item.component';
import { PluggularSidenavComponent } from './sidenav/sidenav.component';
import { PluggularSidenavDropdownComponent } from './sidenav-dropdown/sidenav-dropdown.component';
import { RouterModule } from '@angular/router';
import { PluggularSidenavItemComponent } from './sidenav-item/sidenav-item.component';

@NgModule({
  declarations: [
    PluggularButtonComponent,
    PluggularTableComponent,
    PluggularInputComponent,
    PluggularHeadernavComponent,
    PluggularHeaderNavItemComponent,
    PluggularSidenavComponent,
    PluggularSidenavDropdownComponent,
    PluggularSidenavItemComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    PluggularButtonComponent,
    PluggularTableComponent,
    PluggularInputComponent,
    PluggularHeadernavComponent,
    PluggularHeaderNavItemComponent,
    PluggularSidenavComponent,
    PluggularSidenavDropdownComponent,
    PluggularSidenavItemComponent,
  ],
})
export class PluggularCommonModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PluggularButtonComponent } from './button/button.component';

import { PluggularTableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PluggularInputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluggularTextAreaComponent } from './textarea/textarea.component';
import { PluggularHeaderNavComponent } from './headernav/headernav.component';
import { PluggularHeaderNavItemComponent } from './header-nav-item/header-nav-item.component';
import { PluggularSideNavComponent } from './sidenav/sidenav.component';
import { PluggularSideNavDropdownComponent } from './sidenav-dropdown/sidenav-dropdown.component';
import { RouterModule } from '@angular/router';
import { PluggularSideNavItemComponent } from './sidenav-item/sidenav-item.component';
import { PluggularDatePickerComponent } from './datepicker/datepicker.component';
import { PluggularSelectComponent } from './select/select.component';
import { PluggularTableFilterComponent } from './table-filter/table-filter.component';
import { PluggularTabsComponent } from './tabs/tabs.component';
import { PluggularFormsComponent } from './forms/forms.component';
import { PluggularRadioComponent } from './radio/radio.component';
import { PluggularTablePaginationComponent } from './table-pagination/table-pagination.component';

@NgModule({
  declarations: [
    PluggularButtonComponent,
    PluggularTableComponent,
    PluggularInputComponent,
    PluggularHeaderNavComponent,
    PluggularHeaderNavItemComponent,
    PluggularTextAreaComponent,
    PluggularSideNavComponent,
    PluggularSideNavDropdownComponent,
    PluggularSideNavItemComponent,
    PluggularDatePickerComponent,
    PluggularSelectComponent,
    PluggularTableFilterComponent,
    PluggularTabsComponent,
    PluggularFormsComponent,
    PluggularRadioComponent,
    PluggularTablePaginationComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    PluggularButtonComponent,
    PluggularTableComponent,
    PluggularInputComponent,
    PluggularHeaderNavComponent,
    PluggularHeaderNavItemComponent,
    PluggularTextAreaComponent,
    PluggularSideNavComponent,
    PluggularSideNavDropdownComponent,
    PluggularSideNavItemComponent,
    PluggularDatePickerComponent,
    PluggularSelectComponent,
    PluggularTableFilterComponent,
    PluggularTabsComponent,
    PluggularFormsComponent,
    PluggularRadioComponent,
    PluggularTablePaginationComponent,
  ],
})
export class PluggularCommonModule {}

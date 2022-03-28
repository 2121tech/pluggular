import { Component, Input } from '@angular/core';
import { faCircleDot, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type TDropdownItem = {
  label: string;
  link: string;
  items?: TDropdownItem[];
};

@Component({
  selector: 'pluggular-sidenav-dropdown',
  templateUrl: './sidenav-dropdown.component.html',
  styleUrls: ['./sidenav-dropdown.component.css'],
})
export class PluggularSideNavDropdownComponent {
  @Input() show = false;
  @Input() label = '';
  @Input() items: TDropdownItem[] = [];
  @Input() isChild = false;
  @Input() icon: IconDefinition = faCircleDot;
}

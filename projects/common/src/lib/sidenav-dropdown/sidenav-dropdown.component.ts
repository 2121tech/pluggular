import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type TDropdownItem = {
  label: string;
  link: string;
  items?: TDropdownItem[];
};

@Component({
  selector: 'pluggular-sidenav-dropdown',
  templateUrl: './sidenav-dropdown.component.html',
  styleUrls: ['./sidenav-dropdown.component.css'],
})
export class PluggularSidenavDropdownComponent {
  @Input() show = false;
  @Input() label = '';
  @Input() items: TDropdownItem[] = [];
  @Input() isChild = false;
  @Input() icon?: IconProp;
}

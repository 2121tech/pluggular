import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'pluggular-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css'],
})
export class PluggularSidenavItemComponent {
  @Input() label = '';
  @Input() icon?: IconProp;
  @Input() link = '#';
}

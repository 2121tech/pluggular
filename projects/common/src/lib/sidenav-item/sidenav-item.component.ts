import { Component, Input } from '@angular/core';
import { faCircleDot, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plg-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css'],
})
export class PluggularSideNavItemComponent {
  @Input() label = '';
  @Input() icon: IconDefinition | null | undefined = faCircleDot;
  @Input() link = '#';
  @Input() itemStyle = '';
  @Input() activeItemStyle = '';
}

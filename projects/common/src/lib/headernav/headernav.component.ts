import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export type TAlignment = 'left' | 'center' | 'right';

@Component({
  selector: 'plg-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css'],
})
export class PluggularHeaderNavComponent implements OnInit {
  menuIcon = faBars;
  alignClass = '';
  @Input() alignItems: TAlignment = 'right';
  @Input() navStyle = '';
  @Output() menuClicked = new EventEmitter<boolean>();
  showSideNav = false;

  ngOnInit(): void {
    this.alignClass = this.constructItemsAlignmentClass(this.alignItems);
  }

  private constructItemsAlignmentClass(alignment: TAlignment): string {
    let alignClass = '';
    switch (alignment) {
      case 'left':
        alignClass = 'justify-start';
        break;
      case 'center':
        alignClass = 'justify-center';
        break;
      case 'right':
        alignClass = 'justify-end';
        break;
      default:
        break;
    }

    return alignClass;
  }

  handleMenuClick(): void {
    this.showSideNav = !this.showSideNav;
    this.menuClicked.emit(this.showSideNav);
  }
}

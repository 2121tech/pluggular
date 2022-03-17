import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export type TAlignment = 'left' | 'center' | 'right';

export enum EAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

@Component({
  selector: 'pluggular-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.css'],
})
export class PluggularHeadernavComponent implements OnInit {
  menuIcon = faBars;
  alignClass = '';
  @Input() alignItems: TAlignment = EAlignment.RIGHT;
  @Output() menuClicked = new EventEmitter<boolean>();
  showSideNav = false;

  ngOnInit(): void {
    this.alignClass = this.constructItemsAlignmentClass(this.alignItems);
  }

  constructItemsAlignmentClass(alignment: TAlignment): string {
    let alignClass = '';
    switch (alignment) {
      case EAlignment.LEFT:
        alignClass = 'justify-start';
        break;
      case EAlignment.CENTER:
        alignClass = 'justify-center';
        break;
      case EAlignment.RIGHT:
        alignClass = 'justify-end';
        break;
      default:
        break;
    }

    return alignClass;
  }

  handleMenuClick(): void {
    this.menuClicked.emit(!this.showSideNav);
  }
}

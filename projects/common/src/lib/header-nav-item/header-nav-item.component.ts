import { Component, Input, OnInit } from '@angular/core';
import { EAlignment, TAlignment } from '../headernav/headernav.component';

@Component({
  selector: 'pluggular-header-nav-item',
  templateUrl: './header-nav-item.component.html',
  styleUrls: ['./header-nav-item.component.css'],
})
export class PluggularHeaderNavItemComponent implements OnInit {
  showContent = false;
  currentTarget!: EventTarget | null;
  alignClass = '';

  @Input() alignContent: TAlignment = EAlignment.RIGHT;

  clickEventListener: (event: Event) => void = () => {
    return;
  };

  ngOnInit(): void {
    this.clickEventListener = (event: Event): void => {
      const element = this.currentTarget as HTMLElement;
      if (element && !element.contains(event.target as HTMLElement)) {
        this.showContent = false;
        document.removeEventListener('click', this.clickEventListener);
      }
    };
    document.addEventListener('click', this.clickEventListener);

    this.alignClass = this.constructContentAlignmentClass(this.alignContent);
  }

  constructContentAlignmentClass(alignment: TAlignment): string {
    let alignClass = '';
    switch (alignment) {
      case EAlignment.LEFT:
        alignClass = 'left-0';
        break;
      case EAlignment.CENTER:
        alignClass = 'left-0 right-0';
        break;
      case EAlignment.RIGHT:
        alignClass = 'right-0';
        break;
      default:
        break;
    }

    return alignClass;
  }

  handleBlur(event: Event): void {
    this.currentTarget = event.currentTarget;
  }

  handleClick(): void {
    this.showContent = !this.showContent;
    if (this.showContent) {
      document.addEventListener('click', this.clickEventListener);
    }
  }
}

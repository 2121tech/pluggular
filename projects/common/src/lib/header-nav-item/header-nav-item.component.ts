import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { TAlignment } from '../headernav/headernav.component';

@Component({
  selector: 'pluggular-header-nav-item',
  templateUrl: './header-nav-item.component.html',
  styleUrls: ['./header-nav-item.component.css'],
})
export class PluggularHeaderNavItemComponent implements OnInit, OnDestroy {
  showContent = false;
  currentTarget!: EventTarget | null;
  alignClass = '';
  isExpanded = false;

  @Input() alignContent: TAlignment = 'right';

  clickEventListener: Subscription | undefined;

  ngOnInit(): void {
    this.createClickEventListener();
    this.alignClass = this.constructContentAlignmentClass(this.alignContent);
  }

  private createClickEventListener(): void {
    const onClick$ = fromEvent(document, 'click');
    this.clickEventListener = onClick$.subscribe((event) => {
      const element = this.currentTarget as HTMLElement;
      if (element && !element.contains(event.target as HTMLElement)) {
        this.showContent = false;
        this.clickEventListener?.unsubscribe();
      }
    });
  }

  private constructContentAlignmentClass(alignment: TAlignment): string {
    let alignClass = '';
    switch (alignment) {
      case 'left':
        alignClass = 'left-0';
        break;
      case 'center':
        alignClass = 'left-0 right-0';
        break;
      case 'right':
        alignClass = 'right-0';
        break;
      default:
        break;
    }

    return alignClass;
  }

  handleBlur(event: Event): void {
    this.isExpanded = false;
    this.currentTarget = event.currentTarget;
  }

  handleClick(): void {
    if (!this.isExpanded) {
      this.isExpanded = true;
      this.showContent = true;
    }
    this.createClickEventListener();
  }

  handleLabelClick(): void {
    if (this.isExpanded) {
      this.clickEventListener?.unsubscribe();
    }
    this.showContent = !this.showContent;
  }

  ngOnDestroy(): void {
    this.clickEventListener?.unsubscribe();
  }
}

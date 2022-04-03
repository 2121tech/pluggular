import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ISideNavItem {
  label: string;
  link: string;
  icon?: IconDefinition | null;
  items?: ISideNavItem[];
  isSelected?: boolean | undefined;
}

export interface ISideNavGroup {
  label: string;
  items: ISideNavItem[];
}

@Component({
  selector: 'plg-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class PluggularSideNavComponent {
  @Input() show = false;
  @Input() brandClass = '';
  @Input() closeIconClass = '';
  @Input() showCloseIcon = false;
  @Input() items: ISideNavGroup[] = [];
  @Output() hasClosed: EventEmitter<boolean> = new EventEmitter();

  handleClose(): void {
    this.show = !this.show;

    this.hasClosed.emit(this.show);
  }

  onDropDownSelected(groupIndex: number, itemIndex: number): void {
    // un select all dropdowns from unselected group

    this.items.forEach((item, index) => {
      if (index !== groupIndex) {
        item.items.forEach((element) => {
          element.isSelected = false;
          if (element.items) {
            element.items.forEach((subItem) => {
              subItem.isSelected = false;
            });
          }
        });
      }
    });

    // select dropdown item from selected group

    const hasAlreadySelected = this.items[groupIndex].items.find(
      (item, index) => index !== itemIndex && item.isSelected === true,
    );

    this.items[groupIndex].items.forEach((item, index) => {
      if (hasAlreadySelected) {
        item.isSelected = false;
      }
      if (index === itemIndex) {
        item.isSelected = item.isSelected ? false : true;
      } else {
        item.isSelected = false;
        item.items?.forEach((element) => {
          element.isSelected = false;
        });
      }
    });
  }
}

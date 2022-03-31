import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { faCircleDot, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type TDropdownItem = {
  label: string;
  link: string;
  items?: TDropdownItem[];
  isSelected?: boolean;
};

@Component({
  selector: 'pluggular-sidenav-dropdown',
  templateUrl: './sidenav-dropdown.component.html',
  styleUrls: ['./sidenav-dropdown.component.css'],
})
export class PluggularSideNavDropdownComponent implements OnChanges {
  @Input() show = false;
  @Input() label = '';
  @Input() items: TDropdownItem[] = [];
  @Input() isChild = false;
  @Input() icon: IconDefinition | null | undefined = faCircleDot;
  @Input() isSelected: boolean | undefined = false;
  @Output() hasSelected = new EventEmitter<boolean>();

  onClick(): void {
    this.show = !this.show;
    this.hasSelected.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.isSelected?.currentValue) {
      this.show = false;
    }
  }
}

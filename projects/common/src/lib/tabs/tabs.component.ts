import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type TTab = {
  label: string;
  tab: string;
  isActive?: boolean;
};

@Component({
  selector: 'plg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class PluggularTabsComponent implements OnInit {
  @Input() tabs: TTab[] = [];
  @Output() hasClicked = new EventEmitter<TTab>();

  ngOnInit(): void {
    this.setFirstIndexActive();
  }

  setFirstIndexActive(): void {
    if (this.tabs && this.tabs.length > 0) {
      this.tabs[0].isActive = true;
    }
  }

  handleTabClick(tabIndex: number): void {
    let activeTab;
    this.tabs.forEach((item, index) => {
      if (tabIndex === index) {
        item.isActive = true;
        activeTab = item;
      } else {
        item.isActive = false;
      }
    });

    this.hasClicked.emit(activeTab);
  }
}

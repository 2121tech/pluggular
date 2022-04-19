import { Component, Input, OnInit } from '@angular/core';

export type TTab = {
  label: string;
  link: string;
};

@Component({
  selector: 'plg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class PluggularTabsComponent implements OnInit {
  @Input() tabs: TTab[] = [];
  constructor() {}

  ngOnInit(): void {}
}

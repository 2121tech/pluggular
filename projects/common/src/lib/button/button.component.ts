import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pluggular-button',
  template: `<p [ngClass]="class">Button works!!!!</p>`,
  styles: [],
})
export class PluggularButtonComponent implements OnInit {
  @Input() class: string = '';
  constructor() {}

  ngOnInit(): void {}
}

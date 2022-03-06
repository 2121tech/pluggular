import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'pluggular-button',
  template: `
    <a>
      hyperlink works!
  </a>
  `,
  styles: [
  ]
})
export class PluggularButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

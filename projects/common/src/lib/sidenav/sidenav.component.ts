import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pluggular-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class PluggularSideNavComponent {
  @Input() show = false;
  @Input() brandClass = '';
  @Input() closeIconClass = '';
  @Output() hasClosed: EventEmitter<boolean> = new EventEmitter();

  handleClose(): void {
    this.show = !this.show;
    this.hasClosed.emit(this.show);
  }
}

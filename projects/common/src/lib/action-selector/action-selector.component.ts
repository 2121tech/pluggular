import { Component, Input, ViewEncapsulation } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export type TActionOption = {
  label: string;
  onClick?: (data: Record<string, unknown> | undefined) => void;
};

@Component({
  selector: 'plg-action-selector',
  templateUrl: './action-selector.component.html',
  styleUrls: ['./action-selector.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PluggularActionSelectorComponent {
  showOptions = false;
  @Input() options?: TActionOption[][] = [];
  @Input() context?: Record<string, unknown>;

  downIcon = faChevronDown;

  onButtonClick(): void {
    this.showOptions = !this.showOptions;
  }
}

import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plg-action-selector',
  templateUrl: './action-selector.component.html',
  styleUrls: ['./action-selector.component.css'],
})
export class PluggularActionSelectorComponent {
  downIcon = faChevronDown;
}

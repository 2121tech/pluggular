import { Component, Input, OnInit } from '@angular/core';
import { faPowerOff, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plg-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.css'],
})
export class PluggularCounterCardComponent implements OnInit {
  @Input() icon: IconDefinition = faPowerOff;
  @Input() title = '';
  @Input() subText = '';
  @Input() description: string | null | undefined = '';
  @Input() color = '';
  @Input() link = '';

  bgClass = '';

  ngOnInit(): void {
    this.bgClass = this.constructIconColor(this.color);
  }

  private constructIconColor(color: string): string {
    return `bg-${color}-400`;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faPenSquare, faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type TButtonType = 'button' | 'submit' | undefined;

export type TButtonFill = 'primary' | 'success' | 'warning' | 'danger' | 'default' | undefined;

export type TRole = 'edit' | 'delete' | 'view' | '' | undefined;
export type TButtonSize = 'small' | 'default' | 'large' | undefined;
export type TButtonExpand = 'full' | 'block' | undefined;
export type TButtonRoundness = 'small' | 'medium' | 'large' | 'none' | undefined;

export enum EButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum ERole {
  EDIT = 'edit',
  DELETE = 'delete',
  VIEW = 'view',
}

export enum EButtonSize {
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'large',
}

export enum EButtonExpand {
  FULL = 'full',
  BLOCK = 'block',
}

export enum EButtonRoundness {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  NONE = 'none',
}

export enum EButtonFill {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  DEFAULT = 'default',
}

@Component({
  selector: 'plg-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class PluggularButtonComponent implements OnInit {
  @Input() type: TButtonType = EButtonType.BUTTON;
  @Input() fill: TButtonFill = undefined;
  @Input() role: TRole = '';
  @Input() size: TButtonSize = 'default';
  @Input() expand: TButtonExpand = 'block';
  @Input() roundness: TButtonRoundness = 'small';
  @Input() class = '';
  @Input() href = '';
  @Input() disabled = false;
  @Input() icon: IconDefinition | undefined = undefined;
  @Input() buttonStyle = '';
  @Input() buttonIconStyle = '';
  @Output() hasClicked = new EventEmitter<string>();

  bgClass = '';
  sizeClass = '';
  expandClass = '';
  roundnessClass = '';
  disabledClass = '';

  buttonIcon?: IconDefinition | undefined = undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.bgClass = this.constructColor(this.fill);

    if (this.role) {
      this.buttonIcon = this.constructIcon(this.role);
    } else {
      this.buttonIcon = this.icon;
    }

    this.sizeClass = this.constructSize(this.size);
    this.expandClass = this.constructExpand(this.expand);
    this.roundnessClass = this.constructRoundness(this.roundness);
    this.disabledClass = this.constructDisabledClass(this.disabled);
  }

  constructColor(fill: TButtonFill): string {
    let color = '';
    switch (fill) {
      case EButtonFill.PRIMARY:
        color = 'blue';
        break;

      case EButtonFill.SUCCESS:
        color = 'green';
        break;

      case EButtonFill.WARNING:
        color = 'yellow';
        break;

      case EButtonFill.DANGER:
        color = 'red';
        break;

      case EButtonFill.DEFAULT:
        color = 'gray';
        break;
      default:
        break;
    }

    return `bg-${color}-500 hover:bg-${color}-600`;
  }

  constructIcon(role: TRole): IconDefinition | undefined {
    let icon;
    switch (role) {
      case 'edit':
        icon = faPenSquare;
        break;
      case 'delete':
        icon = faTrashAlt;
        break;
      case 'view':
        icon = faEye;
        break;
      default:
        break;
    }

    return icon;
  }

  constructSize(size: TButtonSize): string {
    let sizeClass = '';
    switch (size) {
      case EButtonSize.SMALL:
        sizeClass = 'px-6 py-2 text-xs';
        break;
      case EButtonSize.DEFAULT:
        sizeClass = 'px-8 py-3 text-md';
        break;
      case EButtonSize.LARGE:
        sizeClass = 'px-10 py-4 text-lg';
        break;
      default:
        break;
    }
    return sizeClass;
  }

  constructExpand(expand: TButtonExpand): string {
    let expandClass = '';

    switch (expand) {
      case EButtonExpand.FULL:
        expandClass = 'w-full';
        break;

      case EButtonExpand.BLOCK:
        expandClass = 'w-auto';
        break;
      default:
        break;
    }

    return expandClass;
  }

  constructRoundness(roundness: TButtonRoundness): string {
    let roundnessClass = '';

    switch (roundness) {
      case EButtonRoundness.SMALL:
        roundnessClass = 'rounded-sm';
        break;
      case EButtonRoundness.MEDIUM:
        roundnessClass = 'rounded-md';
        break;
      case EButtonRoundness.LARGE:
        roundnessClass = 'rounded-full';
        break;
      case EButtonRoundness.NONE:
        roundnessClass = 'rounded-none';
        break;
      default:
        break;
    }

    return roundnessClass;
  }

  constructDisabledClass(disabled: boolean): string {
    return disabled ? '!bg-gray-400' : '';
  }

  onClickEvent(event: Event): void {
    event.stopPropagation();
    this.hasClicked.emit();
  }

  navigate(): void {
    if (!this.href) {
      return;
    }
    this.router.navigate([this.href]);
  }
}

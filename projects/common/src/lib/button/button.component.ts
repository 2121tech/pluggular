import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faEye,
  faPenSquare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | undefined;
export type RoleType = 'edit' | 'delete' | 'view' | '' | undefined;
export type ButtonSizeType = 'small' | 'default' | 'large' | undefined;
export type ButtonExpandType = 'full' | 'block' | undefined;
export type ButtonRoundnessType =
  | 'small'
  | 'medium'
  | 'large'
  | 'none'
  | undefined;

export enum ButtonTypeEnum {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

export enum RoleEnum {
  EDIT = 'edit',
  DELETE = 'delete',
  VIEW = 'view',
}

export enum ButtonSizeEnum {
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'large',
}

export enum ButtonExpandEnum {
  FULL = 'full',
  BLOCK = 'block',
}

export enum ButtonRoundnessEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  NONE = 'none',
}

@Component({
  selector: 'pluggular-button',
  templateUrl: './button.component.html',
  styles: [],
})
export class PluggularButtonComponent implements OnInit {
  @Input() type: ButtonType = 'primary';
  @Input() role: RoleType = '';
  @Input() size: ButtonSizeType = 'default';
  @Input() expand: ButtonExpandType = 'block';
  @Input() roundness: ButtonRoundnessType = 'small';
  @Input() class: string = '';
  @Output() onClick = new EventEmitter<string>();

  bgClass: string = '';
  sizeClass: string = '';
  expandClass: string = '';
  roundnessClass: string = '';
  icon: any;

  constructor() {}

  ngOnInit(): void {
    this.bgClass = this.constructColor(this.type);
    this.icon = this.constructIcon(this.role);
    this.sizeClass = this.constructSize(this.size);
    this.expandClass = this.constructExpand(this.expand);
    this.roundnessClass = this.constructRoundness(this.roundness);
  }

  constructColor(type: ButtonType): string {
    let color = '';
    switch (type) {
      case ButtonTypeEnum.PRIMARY:
        color = 'blue';
        break;

      case ButtonTypeEnum.SUCCESS:
        color = 'green';
        break;

      case ButtonTypeEnum.WARNING:
        color = 'yellow';
        break;

      case ButtonTypeEnum.DANGER:
        color = 'red';
        break;

      default:
        break;
    }

    return `bg-${color}-500 hover:bg-${color}-600`;
  }

  constructIcon(role: RoleType) {
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

  constructSize(size: ButtonSizeType): string {
    let sizeClass = '';
    switch (size) {
      case ButtonSizeEnum.SMALL:
        sizeClass = 'px-6 py-2 text-xs';
        break;
      case ButtonSizeEnum.DEFAULT:
        sizeClass = 'px-8 py-3 text-sm';
        break;
      case ButtonSizeEnum.LARGE:
        sizeClass = 'px-10 py-4 text-lg';
        break;
      default:
        break;
    }
    return sizeClass;
  }

  constructExpand(expand: ButtonExpandType): string {
    let expandClass = '';

    switch (expand) {
      case ButtonExpandEnum.FULL:
        expandClass = 'w-full';
        break;

      case ButtonExpandEnum.BLOCK:
        expandClass = 'w-auto';
        break;
      default:
        break;
    }

    return expandClass;
  }

  constructRoundness(roundness: ButtonRoundnessType): string {
    let roundnessClass = '';

    switch (roundness) {
      case ButtonRoundnessEnum.SMALL:
        roundnessClass = 'rounded-sm';
        break;
      case ButtonRoundnessEnum.MEDIUM:
        roundnessClass = 'rounded-md';
        break;
      case ButtonRoundnessEnum.LARGE:
        roundnessClass = 'rounded-full';
        break;
      case ButtonRoundnessEnum.NONE:
        roundnessClass = 'rounded-none';
        break;
      default:
        break;
    }

    return roundnessClass;
  }

  onClickEvent() {
    this.onClick.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faEye,
  faPenSquare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

export type TButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | undefined;
  
export type TRoleType = 'edit' | 'delete' | 'view' | '' | undefined;
export type TButtonSizeType = 'small' | 'default' | 'large' | undefined;
export type TButtonExpandType = 'full' | 'block' | undefined;
export type TButtonRoundnessType =
  | 'small'
  | 'medium'
  | 'large'
  | 'none'
  | undefined;

export enum EButtonTypeEnum {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

export enum ERoleEnum {
  EDIT = 'edit',
  DELETE = 'delete',
  VIEW = 'view',
}

export enum EButtonSizeEnum {
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'large',
}

export enum EButtonExpandEnum {
  FULL = 'full',
  BLOCK = 'block',
}

export enum EButtonRoundnessEnum {
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
  @Input() type: TButtonType = 'primary';
  @Input() role: TRoleType = '';
  @Input() size: TButtonSizeType = 'default';
  @Input() expand: TButtonExpandType = 'block';
  @Input() roundness: TButtonRoundnessType = 'small';
  @Input() class: string = '';
  @Input() href: string = '';
  @Output() onClick = new EventEmitter<string>();

  bgClass: string = '';
  sizeClass: string = '';
  expandClass: string = '';
  roundnessClass: string = '';
  icon: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.bgClass = this.constructColor(this.type);
    this.icon = this.constructIcon(this.role);
    this.sizeClass = this.constructSize(this.size);
    this.expandClass = this.constructExpand(this.expand);
    this.roundnessClass = this.constructRoundness(this.roundness);
  }

  constructColor(type: TButtonType): string {
    let color = '';
    switch (type) {
      case EButtonTypeEnum.PRIMARY:
        color = 'blue';
        break;

      case EButtonTypeEnum.SUCCESS:
        color = 'green';
        break;

      case EButtonTypeEnum.WARNING:
        color = 'yellow';
        break;

      case EButtonTypeEnum.DANGER:
        color = 'red';
        break;

      default:
        break;
    }

    return `bg-${color}-500 hover:bg-${color}-600`;
  }

  constructIcon(role: TRoleType) {
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

  constructSize(size: TButtonSizeType): string {
    let sizeClass = '';
    switch (size) {
      case EButtonSizeEnum.SMALL:
        sizeClass = 'px-6 py-2 text-xs';
        break;
      case EButtonSizeEnum.DEFAULT:
        sizeClass = 'px-8 py-3 text-sm';
        break;
      case EButtonSizeEnum.LARGE:
        sizeClass = 'px-10 py-4 text-lg';
        break;
      default:
        break;
    }
    return sizeClass;
  }

  constructExpand(expand: TButtonExpandType): string {
    let expandClass = '';

    switch (expand) {
      case EButtonExpandEnum.FULL:
        expandClass = 'w-full';
        break;

      case EButtonExpandEnum.BLOCK:
        expandClass = 'w-auto';
        break;
      default:
        break;
    }

    return expandClass;
  }

  constructRoundness(roundness: TButtonRoundnessType): string {
    let roundnessClass = '';

    switch (roundness) {
      case EButtonRoundnessEnum.SMALL:
        roundnessClass = 'rounded-sm';
        break;
      case EButtonRoundnessEnum.MEDIUM:
        roundnessClass = 'rounded-md';
        break;
      case EButtonRoundnessEnum.LARGE:
        roundnessClass = 'rounded-full';
        break;
      case EButtonRoundnessEnum.NONE:
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

  navigate() {
    if (!this.href) {
      return;
    }
    this.router.navigate([this.href]);
  }
}

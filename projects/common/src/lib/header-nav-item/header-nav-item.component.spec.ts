import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularHeaderNavItemComponent } from './header-nav-item.component';

describe('HeaderNavItemComponent', () => {
  let component: PluggularHeaderNavItemComponent;
  let fixture: ComponentFixture<PluggularHeaderNavItemComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularHeaderNavItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularHeaderNavItemComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleClick when navItem component is clicked', () => {
    spyOn(component, 'handleClick');

    const navItem = de.nativeElement.querySelector('#navItem');

    navItem.click();

    expect(component.handleClick).toHaveBeenCalled();
  });

  it('should call handleBlur when navItem loses focus', () => {
    spyOn(component, 'handleBlur');

    const navItem = de.nativeElement.querySelector('#navItem');

    navItem.click();
    navItem.dispatchEvent(new Event('blur'));

    expect(component.handleBlur).toHaveBeenCalled();
  });

  it('alignClass should have a value of left-0', () => {
    component.alignContent = 'left';
    component.ngOnInit();
    expect(component.alignClass).toEqual('left-0');
  });

  it('clickEventListener should be defined after component initilization', () => {
    component.clickEventListener = undefined;
    component.ngOnInit();
    expect(component.clickEventListener).toBeDefined();
  });
});

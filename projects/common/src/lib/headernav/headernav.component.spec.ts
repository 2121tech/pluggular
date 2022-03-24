import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularHeaderNavComponent } from './headernav.component';

describe('PluggularHeaderNavComponent', () => {
  let component: PluggularHeaderNavComponent;
  let fixture: ComponentFixture<PluggularHeaderNavComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularHeaderNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularHeaderNavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('alignClass should have a value of justify-start', () => {
    component.alignItems = 'left';
    component.ngOnInit();
    expect(component.alignClass).toEqual('justify-start');
  });

  it('should call handleMenuClick when menu button in headernav is clicked', () => {
    spyOn(component, 'handleMenuClick');

    const menu = de.nativeElement.querySelector('#menu');

    menu.click();

    expect(component.handleMenuClick).toHaveBeenCalled();
  });
});

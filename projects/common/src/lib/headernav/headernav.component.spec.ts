import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularHeadernavComponent } from './headernav.component';

describe('PluggularHeadernavComponent', () => {
  let component: PluggularHeadernavComponent;
  let fixture: ComponentFixture<PluggularHeadernavComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularHeadernavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularHeadernavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call constructItemsAlignmentClass', () => {
    spyOn(component, 'constructItemsAlignmentClass').and.callThrough();

    component.constructItemsAlignmentClass('left');

    expect(component.constructItemsAlignmentClass).toHaveBeenCalled();
  });

  it('should call handleMenuClick when menu button in headernav is clicked', () => {
    spyOn(component, 'handleMenuClick');

    const menu = de.nativeElement.querySelector('#menu');

    menu.click();

    expect(component.handleMenuClick).toHaveBeenCalled();
  });
});

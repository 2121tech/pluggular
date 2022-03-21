import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularSidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: PluggularSidenavComponent;
  let fixture: ComponentFixture<PluggularSidenavComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularSidenavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularSidenavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleClose when close button is clicked', () => {
    spyOn(component, 'handleClose');

    const closeButton = de.nativeElement.querySelector('button');

    closeButton.click();

    expect(component.handleClose).toHaveBeenCalled();
  });
});

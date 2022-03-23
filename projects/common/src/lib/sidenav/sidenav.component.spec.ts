import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularSideNavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: PluggularSideNavComponent;
  let fixture: ComponentFixture<PluggularSideNavComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularSideNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularSideNavComponent);
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

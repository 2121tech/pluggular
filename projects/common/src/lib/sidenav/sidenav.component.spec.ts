import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
    component.showCloseIcon = true;
    fixture.detectChanges();
    const closeButton = de.nativeElement.querySelector('button');

    closeButton.click();

    expect(component.handleClose).toHaveBeenCalled();
  });

  it('it should display close icon if showCloseIcon is set to true', () => {
    component.showCloseIcon = true;
    fixture.detectChanges();

    const closeIcon = de.query(By.css('#closeIcon'));

    expect(closeIcon).toBeTruthy();
  });
});

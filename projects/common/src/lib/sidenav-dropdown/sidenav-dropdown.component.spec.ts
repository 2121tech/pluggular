import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularSideNavDropdownComponent } from './sidenav-dropdown.component';

describe('SidenavDropdownComponent', () => {
  let component: PluggularSideNavDropdownComponent;
  let fixture: ComponentFixture<PluggularSideNavDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularSideNavDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularSideNavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

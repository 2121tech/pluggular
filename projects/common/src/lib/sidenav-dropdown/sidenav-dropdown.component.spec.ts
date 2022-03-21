import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularSidenavDropdownComponent } from './sidenav-dropdown.component';

describe('SidenavDropdownComponent', () => {
  let component: PluggularSidenavDropdownComponent;
  let fixture: ComponentFixture<PluggularSidenavDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularSidenavDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularSidenavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

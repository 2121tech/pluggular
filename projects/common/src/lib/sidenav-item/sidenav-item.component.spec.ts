import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularSideNavItemComponent } from './sidenav-item.component';

describe('SidenavItemComponent', () => {
  let component: PluggularSideNavItemComponent;
  let fixture: ComponentFixture<PluggularSideNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularSideNavItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularSideNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularTabsComponent } from './tabs.component';

describe('PluggularTabsComponent', () => {
  let component: PluggularTabsComponent;
  let fixture: ComponentFixture<PluggularTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

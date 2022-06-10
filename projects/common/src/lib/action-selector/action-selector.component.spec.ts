import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularActionSelectorComponent } from './action-selector.component';

describe('PluggularActionSelectorComponent', () => {
  let component: PluggularActionSelectorComponent;
  let fixture: ComponentFixture<PluggularActionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularActionSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularActionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularDatePickerComponent } from './datepicker.component';

describe('DatePickerComponent', () => {
  let component: PluggularDatePickerComponent;
  let fixture: ComponentFixture<PluggularDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularDatePickerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

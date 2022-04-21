import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PluggularFormsComponent } from './forms.component';

describe('PluggularFormsComponent', () => {
  let component: PluggularFormsComponent;
  let fixture: ComponentFixture<PluggularFormsComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularFormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularFormsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit() when form is submitted', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    const fakeEvent = { preventDefault: (): void => {} };
    de.query(By.css('form')).triggerEventHandler('submit', fakeEvent);

    expect(component.onSubmit).toHaveBeenCalled();
  });
});

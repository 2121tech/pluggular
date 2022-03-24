import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';

import { PluggularTextareaComponent } from './textarea.component';

@Component({
  selector: 'pluggular-tested',
  template: `<form [formGroup]="form">
    <pluggular-textarea formControlName="firstName"></pluggular-textarea>
  </form> `,
})
class TestedComponent {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
  });
}

describe('PluggularTextareaComponent', () => {
  MockInstance.scope();

  beforeEach(() => {
    return MockBuilder(TestedComponent).mock(PluggularTextareaComponent).keep(ReactiveFormsModule);
  });

  it('sends the correct value to the mock form component', () => {
    const writeValue = jasmine.createSpy('writeValue');

    MockInstance(PluggularTextareaComponent, 'writeValue', writeValue);

    const fixture = MockRender(TestedComponent);
    const component = fixture.point.componentInstance;

    expect(writeValue).toHaveBeenCalledWith('');

    const mockControlEl = ngMocks.find(PluggularTextareaComponent);
    ngMocks.change(mockControlEl, 'foo');

    expect(component.form.get('firstName')?.value).toBe('foo');

    component.form.get('firstName')?.setValue('bar');

    expect(writeValue).toHaveBeenCalledWith('bar');
  });

  it('error should be defined if form is submitted without fulfilling form control validation', () => {
    const fixture = MockRender(TestedComponent);
    const component = fixture.point.componentInstance;

    const mockControlEl = ngMocks.find(PluggularTextareaComponent);

    ngMocks.touch(mockControlEl);

    expect(component.form.get('firstName')?.errors).toBeTruthy();
  });
});

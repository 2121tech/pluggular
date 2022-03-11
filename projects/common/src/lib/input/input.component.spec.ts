import { PluggularInputComponent } from './input.component';

import { ngMocks, MockInstance, MockBuilder, MockRender } from 'ng-mocks';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'pluggular-tested',
  template: `<form [formGroup]="form">
    <pluggular-input formControlName="firstName"></pluggular-input>
  </form> `,
})
class TestedComponent {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
  });
}

describe('PluggularInputComponent', () => {
  MockInstance.scope();

  beforeEach(() => {
    return MockBuilder(TestedComponent).mock(PluggularInputComponent).keep(ReactiveFormsModule);
  });

  it('sends the correct value to the mock form component', () => {
    const writeValue = jasmine.createSpy('writeValue');

    MockInstance(PluggularInputComponent, 'writeValue', writeValue);

    const fixture = MockRender(TestedComponent);
    const component = fixture.point.componentInstance;

    expect(writeValue).toHaveBeenCalledWith('');

    const mockControlEl = ngMocks.find(PluggularInputComponent);
    ngMocks.change(mockControlEl, 'foo');

    expect(component.form.get('firstName')?.value).toBe('foo');

    component.form.get('firstName')?.setValue('bar');

    expect(writeValue).toHaveBeenCalledWith('bar');
  });

  it('error should be defined if form is submitted without fulfilling form control validation', () => {
    const fixture = MockRender(TestedComponent);
    const component = fixture.point.componentInstance;

    const mockControlEl = ngMocks.find(PluggularInputComponent);

    ngMocks.touch(mockControlEl);

    expect(component.form.get('firstName')?.errors).toBeTruthy();
  });
});

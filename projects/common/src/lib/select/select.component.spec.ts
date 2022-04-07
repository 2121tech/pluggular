import { PluggularSelectComponent, TSelectOption } from './select.component';
import { ngMocks, MockInstance, MockBuilder, MockRender } from 'ng-mocks';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'plg-tested',
  template: `<form [formGroup]="form">
    <plg-select formControlName="fruits"></plg-select>
  </form> `,
})
class TestedComponent {
  form = new FormGroup({
    fruits: new FormControl('', [Validators.required]),
  });

  items: TSelectOption[] = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
  ];
}

describe('PluggularSelectComponent', () => {
  MockInstance.scope();

  beforeEach(() => {
    return MockBuilder(TestedComponent).mock(PluggularSelectComponent).keep(ReactiveFormsModule);
  });

  it('sends the correct value to the mock form component', () => {
    const writeValue = jasmine.createSpy('writeValue');

    MockInstance(PluggularSelectComponent, 'writeValue', writeValue);

    const fixture = MockRender(TestedComponent);
    const component = fixture.point.componentInstance;

    expect(writeValue).toHaveBeenCalledWith('');

    const mockControlEl = ngMocks.find(PluggularSelectComponent);
    ngMocks.change(mockControlEl, 'apple');

    expect(component.form.get('fruits')?.value).toBe('apple');

    component.form.get('fruits')?.setValue('orange');

    expect(writeValue).toHaveBeenCalledWith('orange');
  });

  it('error should be defined if form is submitted without fulfilling form control validation', () => {
    const fixture = MockRender(TestedComponent);
    const component = fixture.point.componentInstance;

    const mockControlEl = ngMocks.find(PluggularSelectComponent);

    ngMocks.touch(mockControlEl);

    expect(component.form.get('fruits')?.errors).toBeTruthy();
  });
});

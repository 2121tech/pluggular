import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';

import { PluggularRadioComponent, TRadioItem } from './radio.component';

@Component({
  selector: 'plg-tested',
  template: `<form [formGroup]="form">
    <plg-radio formControlName="selectedFruit" [items]="items"></plg-radio>
  </form> `,
})
class TestedComponent {
  items: TRadioItem[] = [
    {
      label: 'Apple',
      value: 'apple ',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
    {
      label: 'Banana',
      value: 'Banana ',
    },
  ];

  form = new FormGroup({
    selectedFruit: new FormControl(''),
  });
}

describe('PluggularRadioComponent', () => {
  MockInstance.scope();

  beforeEach(() => {
    return MockBuilder(TestedComponent).mock(PluggularRadioComponent).keep(ReactiveFormsModule);
  });

  it('sends the correct value to the mock form component', () => {
    const writeValue = jasmine.createSpy('writeValue');

    MockInstance(PluggularRadioComponent, 'writeValue', writeValue);

    const fixture = MockRender(TestedComponent);
    const component = fixture.point.componentInstance;

    expect(writeValue).toHaveBeenCalledWith('');

    const mockControlEl = ngMocks.find(PluggularRadioComponent);
    ngMocks.change(mockControlEl, 'apple');

    expect(component.form.get('selectedFruit')?.value).toBe('apple');

    component.form.get('selectedFruit')?.setValue('orange');

    expect(writeValue).toHaveBeenCalledWith('orange');
  });
});

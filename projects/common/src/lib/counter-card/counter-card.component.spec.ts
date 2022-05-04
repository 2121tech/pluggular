import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularCounterCardComponent } from './counter-card.component';

describe('PluggularCounterCardComponent', () => {
  let component: PluggularCounterCardComponent;
  let fixture: ComponentFixture<PluggularCounterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularCounterCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularCounterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have proper bgClass base on user input', () => {
    component.color = 'red';

    component.ngOnInit();

    expect(component.bgClass).toEqual('bg-red-400');
  });
});

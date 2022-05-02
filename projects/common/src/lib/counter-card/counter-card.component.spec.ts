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
});

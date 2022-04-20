import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularFormsComponent } from './forms.component';

describe('PluggularFormsComponent', () => {
  let component: PluggularFormsComponent;
  let fixture: ComponentFixture<PluggularFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularFormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularTextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: PluggularTextareaComponent;
  let fixture: ComponentFixture<PluggularTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularTextareaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

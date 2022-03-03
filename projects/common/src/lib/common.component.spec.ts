import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularCommonComponent } from './common.component';

describe('PluggularCommonComponent', () => {
  let component: PluggularCommonComponent;
  let fixture: ComponentFixture<PluggularCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluggularCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

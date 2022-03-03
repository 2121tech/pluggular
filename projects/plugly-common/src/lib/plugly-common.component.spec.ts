import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluglyCommonComponent } from './plugly-common.component';

describe('PluglyCommonComponent', () => {
  let component: PluglyCommonComponent;
  let fixture: ComponentFixture<PluglyCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluglyCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluglyCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

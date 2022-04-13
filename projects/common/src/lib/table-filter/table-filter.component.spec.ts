import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggularTableFilterComponent } from './table-filter.component';

describe('PluggularTableFilterComponent', () => {
  let component: PluggularTableFilterComponent;
  let fixture: ComponentFixture<PluggularTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularTableFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

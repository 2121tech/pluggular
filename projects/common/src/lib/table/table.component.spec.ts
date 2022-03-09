import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PluggularTableComponent } from './table.component';

describe('PluggularTableComponent', () => {
  let component: PluggularTableComponent;
  let fixture: ComponentFixture<PluggularTableComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularTableComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display No Data Available when data has no length', () => {
    const noDataAvailable = de.query(By.css('#noDataAvailable'));

    expect(noDataAvailable).toBeTruthy();
  });

  it('should not display No Data Available when data has value', () => {
    component.data = [{ name: 'lorem' }, { name: 'lorem' }];

    fixture.detectChanges();

    const noDataAvailable = de.query(By.css('#noDataAvailable'));

    expect(noDataAvailable).toBeFalsy();
  });
});

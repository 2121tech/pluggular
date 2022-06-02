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

  it('should display the passed noDataMsg props when data is empty', () => {
    const message = 'NO DATA AVAILABLE';
    component.noDataMsg = message;

    fixture.detectChanges();

    const noDataMsg = de.query(By.css('#noDataMsg')).nativeElement;

    expect(noDataMsg.innerHTML.trim()).toEqual(message);
  });

  it('should set specific table header as active sorting field and set proper sorting method when specific table header is clicked', () => {
    component.fields = [
      { label: 'Apple', key: 'apple', sortable: true },
      { label: 'Orange', key: 'orange', sortable: true },
      { label: 'Lemon', key: 'lemon', sortable: true },
    ];
    spyOn(component, 'onHeaderSortClick').and.callThrough();

    fixture.detectChanges();

    const firstHeader = fixture.debugElement.queryAll(By.css('th'))[0].nativeElement;

    firstHeader.click();

    expect(component.activeSortField).toEqual('Apple');
    expect(component.isAscending).toEqual(true);

    firstHeader.click();

    expect(component.isAscending).toEqual(false);
  });

  it('should call onSortOptionChange when sort selection changed', () => {
    spyOn(component, 'onSortOptionChange').and.callThrough();
    component.sortOptions = [
      {
        label: 'Ascending',
        value: '1',
      },
      {
        label: 'Descending',
        value: '0',
      },
    ];

    fixture.detectChanges();
    const select: HTMLSelectElement = de.query(By.css('#sortSelector')).nativeElement;
    select.value = select.options[1].value;

    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.onSortOptionChange).toHaveBeenCalled();
  });
});

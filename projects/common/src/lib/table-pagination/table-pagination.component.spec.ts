import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PluggularTablePaginationComponent } from './table-pagination.component';

describe('PluggularTablePaginationComponent', () => {
  let component: PluggularTablePaginationComponent;
  let fixture: ComponentFixture<PluggularTablePaginationComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularTablePaginationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularTablePaginationComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call onNextSetClick if nextSetBtn is clicked', () => {
    spyOn(component, 'onNextSetClick').and.callThrough();

    fixture.detectChanges();

    const nextSetBtn = de.query(By.css('#nextSetBtn')).nativeElement;

    nextSetBtn.click();

    expect(component.onNextSetClick).toHaveBeenCalled();
  });

  it('Should call onNextPageClick if nextPageBtn is clicked', () => {
    spyOn(component, 'onNextPageClick').and.callThrough();

    fixture.detectChanges();

    const nextPageBtn = de.query(By.css('#nextPageBtn')).nativeElement;

    nextPageBtn.click();

    expect(component.onNextPageClick).toHaveBeenCalled();
  });

  it('Should call onPrevSetClick if prevSetBtn is clicked', () => {
    spyOn(component, 'onPrevSetClick').and.callThrough();

    fixture.detectChanges();

    const prevSetBtn = de.query(By.css('#prevSetBtn')).nativeElement;

    prevSetBtn.click();

    expect(component.onPrevSetClick).toHaveBeenCalled();
  });

  it('Should call onPrevPageClick if prevPageBtn is clicked', () => {
    spyOn(component, 'onPrevPageClick').and.callThrough();

    fixture.detectChanges();

    const prevPageBtn = de.query(By.css('#prevPageBtn')).nativeElement;

    prevPageBtn.click();

    expect(component.onPrevPageClick).toHaveBeenCalled();
  });

  it('ellipsisBtn should not be visible if page sets are not more than one', () => {
    expect(de.query(By.css('#ellipsisBtn'))).toBeNull();
  });

  it('ellipsisBtn should be visible if page sets are more than one', () => {
    component.numbersSet = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ];
    fixture.detectChanges();
    expect(de.query(By.css('#ellipsisBtn'))).toBeTruthy();
  });

  it('should generate proper number sets', () => {
    component.pages = 10;

    const expectedOutput = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ];

    fixture.detectChanges();
    component.ngOnInit();
    expect(component.numbersSet).toEqual(expectedOutput);
  });

  it('should call onPageClick', () => {
    component.pages = 10;
    spyOn(component, 'onPageClick');
    fixture.detectChanges();

    const firstPage = fixture.debugElement.queryAll(By.css('.pages'))[0].nativeElement;

    firstPage.click();

    expect(component.onPageClick).toHaveBeenCalled();
    expect(component.currentPage).toEqual(0);
  });
});

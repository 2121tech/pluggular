import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PluggularButtonComponent } from './button.component';

describe('PluggularButtonComponent', () => {
  let component: PluggularButtonComponent;
  let fixture: ComponentFixture<PluggularButtonComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call constructClass function', () => {
    spyOn(component, 'constructColor').and.callThrough();

    component.constructColor('primary');

    expect(component.constructColor).toHaveBeenCalled();
  });

  it('should call constructIcon function', () => {
    spyOn(component, 'constructIcon').and.callThrough();

    component.constructIcon('view');

    expect(component.constructIcon).toHaveBeenCalled();
  });

  it('should call constructSize function', () => {
    spyOn(component, 'constructSize').and.callThrough();

    component.constructSize('default');

    expect(component.constructSize).toHaveBeenCalled();
  });

  it('should call constructExpand function', () => {
    spyOn(component, 'constructExpand').and.callThrough();

    component.constructExpand('block');

    expect(component.constructExpand).toHaveBeenCalled();
  });

  it('should call constructRoundness function', () => {
    spyOn(component, 'constructRoundness').and.callThrough();

    component.constructRoundness('small');

    expect(component.constructRoundness).toHaveBeenCalled();
  });

  it('should call onClickEvent function', () => {
    spyOn(component, 'onClickEvent').and.callThrough();

    component.onClickEvent();

    expect(component.onClickEvent).toHaveBeenCalled();
  });

  it('should call onClickEvent when button is clicked', () => {
    spyOn(component, 'onClickEvent');

    let button = de.nativeElement.querySelector('button');

    button.click();

    expect(component.onClickEvent).toHaveBeenCalled();
  });
});

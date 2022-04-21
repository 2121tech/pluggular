import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PluggularTabsComponent } from './tabs.component';

describe('PluggularTabsComponent', () => {
  let component: PluggularTabsComponent;
  let fixture: ComponentFixture<PluggularTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluggularTabsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluggularTabsComponent);
    component = fixture.componentInstance;
    component.tabs = [
      {
        label: 'Total Compost Made',
        tab: 'total_compost',
      },
      {
        label: 'Soilmate Members',
        tab: 'soilmate_members',
      },
      {
        label: 'GHG Avoidance',
        tab: 'ghg_avoidance',
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the first tab as active', () => {
    spyOn(component, 'setFirstIndexActive').and.callThrough();
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.setFirstIndexActive).toHaveBeenCalled();
    expect(component.tabs[0].isActive).toBeTruthy();
  });

  it('Should call HandleTabClick when button is clicked', () => {
    spyOn(component, 'handleTabClick').and.callThrough();

    fixture.detectChanges();

    const firstTab = fixture.debugElement.queryAll(By.css('li'))[0].nativeElement;

    firstTab.click();

    expect(component.handleTabClick).toHaveBeenCalled();
    expect(component.tabs[0].isActive).toBeTruthy();
  });
});

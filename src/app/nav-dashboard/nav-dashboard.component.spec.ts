import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDashboardComponent } from './nav-dashboard.component';

describe('NavDashboardComponent', () => {
  let component: NavDashboardComponent;
  let fixture: ComponentFixture<NavDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDashboardComponent]
    });
    fixture = TestBed.createComponent(NavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

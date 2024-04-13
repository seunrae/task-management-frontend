import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprojectListComponent } from './userproject-list.component';

describe('UserprojectListComponent', () => {
  let component: UserprojectListComponent;
  let fixture: ComponentFixture<UserprojectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprojectListComponent]
    });
    fixture = TestBed.createComponent(UserprojectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

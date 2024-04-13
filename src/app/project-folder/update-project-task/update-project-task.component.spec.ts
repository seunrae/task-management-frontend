import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectTaskComponent } from './update-project-task.component';

describe('UpdateProjectTaskComponent', () => {
  let component: UpdateProjectTaskComponent;
  let fixture: ComponentFixture<UpdateProjectTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProjectTaskComponent]
    });
    fixture = TestBed.createComponent(UpdateProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

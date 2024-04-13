import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectTaskComponent } from './create-project-task.component';

describe('CreateProjectTaskComponent', () => {
  let component: CreateProjectTaskComponent;
  let fixture: ComponentFixture<CreateProjectTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProjectTaskComponent]
    });
    fixture = TestBed.createComponent(CreateProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

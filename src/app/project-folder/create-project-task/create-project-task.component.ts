import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task-folder/task';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-project-task',
  templateUrl: './create-project-task.component.html',
  styleUrls: ['./create-project-task.component.css']
})
export class CreateProjectTaskComponent implements OnInit{
  task: Task = new Task();
  project: Project;
  id: number;
  userId: number;

  constructor(private router: Router, private route: ActivatedRoute, private projectservice: ProjectServiceService,
    private localstorage: LocalStorageService, private toast: NgToastService) {
  }

  ngOnInit(): void {
    this.userId = Number(this.localstorage.get('id'));
    this.id = this.route.snapshot.params['id'];
    this.projectservice.getProjectById(this.id).subscribe(data => {
      this.project = data;
    })
  }
  
  createProjectTask(){
    this.projectservice.createProjectTask(this.id, this.task).subscribe(data => {
      console.log(data);
      this.task.taskname = '';
      this.task.deadline = null;
      this.task.priority = '';
      this.task.status = '';
      this.toast.success({detail: "Success", summary: "Task added to project", duration: 3000});
    },
    error => {this.toast.error({detail: "Error", summary: "Please fill out the empty fields"})});
  }

  onSubmit(){
    this.createProjectTask();
  }
}

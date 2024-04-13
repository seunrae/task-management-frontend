import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Task } from 'src/app/task-folder/task';
import { ProjectServiceService } from '../project-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task-folder/task.service';

@Component({
  selector: 'app-update-project-task',
  templateUrl: './update-project-task.component.html',
  styleUrls: ['./update-project-task.component.css']
})
export class UpdateProjectTaskComponent implements OnInit{
  project: Project;
  task: Task;
  taskId: number;
  projectId: number;
  isOpen: false;
  constructor(private projectservice: ProjectServiceService, private taskservice: TaskService, private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['projectId'];
    this.taskId = this.route.snapshot.params['taskId'];
    this.taskservice.getTaskById(this.taskId).subscribe(data => {
      console.log(data);
      this.task = data;
    });
    this.projectservice.getProjectById(this.projectId).subscribe(data => {
      this.project = data;
    })
  }
  updateProjectTask(){
    this.projectservice.updateProjectTask(this.projectId, this.taskId, this.task).subscribe(data => {
      console.log(data);
    },
    error => alert(error));
  }

  onSubmit(){
    this.updateProjectTask();
  }



}

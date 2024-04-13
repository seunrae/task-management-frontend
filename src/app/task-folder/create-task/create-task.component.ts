import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user-folder/user/user-request';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { windowToggle } from 'rxjs';
import { UserServiceService } from '../../user-folder/user-service.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = new Task;
  user: User = new User;
  id: number;

  constructor(private taskservice: TaskService, private route: ActivatedRoute, private router: Router, private userservice: UserServiceService,
    private toaster: NgToastService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser(this.id);
  }

  getUser(id: number) {
    this.userservice.getUserById(id).subscribe(data => {
      this.user = data;
    },
      error => alert(error));
  }

  gotoCreateTask(id: number) {
    this.router.navigate(['create-task', id]);
  }

  gotoDashboard(id: number) {
    this.router.navigate(['dashboard', id]);
  }

  gotoUserTask(id: number){
    this.router.navigate(['user-task-list', id]);
  }

  createTask() {
    console.log(this.task);

    this.taskservice.createTask(this.id, this.task).subscribe(data => {
      console.log(data);
      this.toaster.success({ detail: "Success", summary: "Task created", duration: 5000 });
      this.gotoUserTask(this.user.id);
    },
      error => this.toaster.error({ detail: "Error", summary: "An error occured" })
    );
  }

  onSubmit() {
    this.createTask();
  }

}

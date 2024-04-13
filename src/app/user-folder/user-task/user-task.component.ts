import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../task-folder/task';
import { TaskService } from '../../task-folder/task.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../user/user-request';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})
export class UserTaskComponent implements OnInit {
  id: number;
  tasks: Task[];
  selectedValue: string = 'TODO';
  input: string;
  user: User;
  task: Task;

  constructor(private userservice: UserServiceService, private router: Router, private route: ActivatedRoute, private taskservice: TaskService , 
    private toast: NgToastService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userservice.getUserById(this.id).subscribe((data:any)=>{
      this.tasks = data.tasks;
      this.user = data;
    });
  }

  getTask(id: number){
    this.taskservice.getTaskById(id).subscribe(data => {
      this.task = data;
    })
  }

  gotoStatus(status: string) {
    this.router.navigate(['sortTask'], {queryParams: {status}})
}
  getStatus(status: string) {
    this.userservice.filterUserStatus(this.id, status).subscribe(data =>{
      this.tasks = data;
    }, 
    error => this.toast.success({detail:"Error", summary: "Error retrieving results", duration: 3000})
    )
  }
  getPriority(){
    this.userservice.orderUserPriority(this.id).subscribe(data => {
      this.tasks = data;
    },
    error => this.toast.success({detail:"Error", summary: "Error retrieving results", duration: 3000}))
  }

  getSearchResult(input: string) {
    this.userservice.searchUserTask(this.id, input).subscribe(data => {
      this.tasks = data;
    },
    error => this.toast.success({detail:"Error", summary: "Error retrieving results", duration: 3000}))
  }

  deleteUserTask(id: number){
   this.getTask(id)
    if(this.task.taskProjects.length > 0) {
      this.taskservice.deleteProjectTask(this.task.taskProjects[0].id, id).subscribe(data =>{
        console.log(data);
      this.toast.success({detail: "Success", summary: data, duration: 3000});
      window.location.reload();
      },
      error => this.toast.error({detail: "Error", summary: error, duration: 3000})
      );
    } 
   else {
    this.taskservice.deleteTask(id).subscribe((data: any) => {
      console.log(data);
      this.toast.success({detail: "Success", summary: data, duration: 3000});
      window.location.reload();
    },
    error => this.toast.error({detail: "Error", summary: error, duration: 3000}));
  }
}


gotoPriority() {
  this.router.navigate(['orderTask']);
}

gotoSearchResult(name: string) {
  this.router.navigate(['searchTask'], {queryParams: {name}});
}


}

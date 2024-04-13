import { Component, OnInit } from '@angular/core';
import { User } from '../user-folder/user/user-request';
import { UserServiceService } from '../user-folder/user-service.service';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task-folder/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user: User
  id: number
  authToken: any;
  title = 'Task-management-app';
  userTasks: Task[];
  constructor (private userservice: UserServiceService, private localstorageservice: LocalStorageService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userservice.getUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(data);
      
    },
    error => alert(error)
    );    
  }
  gotoCreateTask(id: number) {
    this.router.navigate(['create-task', id]);
  }

  gotoCreateProject(id: number) {
    this.router.navigate(['createProject', id]);
  }
}

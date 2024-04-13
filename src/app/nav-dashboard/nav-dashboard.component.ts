import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Project } from '../project-folder/project';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.css']
})
export class NavDashboardComponent {
  @Input() userId: number;

  isOpen: boolean = false;
  constructor(private router: Router, private localStorageService: LocalStorageService){


  }
  
  title = "Task-management-app";

  gotoDashboard(id: number) {
    console.log(id);
    this.router.navigate(['dashboard', id]);
  }

  userLogout(){
    this.localStorageService.remove('token');
    this.router.navigate(['login']);
  }

  gotoUserProjects(id: number){
    this.router.navigate(['user-project-list',id]);
  }
  gotoUserTasks(id: number){
    this.router.navigate(['user-task-list',id]);
  }

}

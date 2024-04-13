import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../project-folder/project';
import { ProjectServiceService } from '../../project-folder/project-service.service';
import { User } from '../user/user-request';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-userproject-list',
  templateUrl: './userproject-list.component.html',
  styleUrls: ['./userproject-list.component.css']
})
export class UserprojectListComponent implements OnInit{
  id: number;
  projects: Project[];
  input: string;
  selectedValue: string;
  user: User;
  constructor(private userservice: UserServiceService, private  projectservice: ProjectServiceService,private route: ActivatedRoute
    , private toast: NgToastService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userservice.getUserById(this.id).subscribe((data:any) =>{
      this.projects = data.projects;
      this.user = data;
    });
  }
  getSearchResult(input: string) {
    this.userservice.searchUserProject(this.id, input).subscribe(data => {
      this.projects = data;
    },
    error => this.toast.success({detail:"Error", summary: "Error retrieving results", duration: 3000}))
  }

  deleteUserProject(id: number){
    this.projectservice.deleteProject(id).subscribe(data => {
      console.log(data);
      this.toast.success({detail: "Success", summary: data, duration: 3000});
      window.location.reload();
    },
    error => this.toast.error({detail: "Error", summary: error, duration: 3000}));
  }
  
  searchProject(input: string){
    this.projectservice.searchProject(input).subscribe(data => {
        this.projects = data;
      },
      error => alert(error));
  }
  
}

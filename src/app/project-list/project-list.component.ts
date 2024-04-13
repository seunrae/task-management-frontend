import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-folder/project-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project-folder/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
  projects: Project[];
  input: string;
  constructor (private projectservice: ProjectServiceService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
   this.projectservice.getAllProjects().subscribe(data => {
      this.projects = data;
   });
  }
  
  searchProject(input: string){
    this.projectservice.searchProject(input).subscribe(data => {
        this.projects = data;
      },
      error => alert(error));
  }
  gotoProject(id: number) {

  }

  gotoUpdateProject(id: number){

  }
  deleteProject(id: number){
    
  }
}

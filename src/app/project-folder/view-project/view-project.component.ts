import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { LocalStorageService } from 'src/app/local-storage.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit{
  project: Project = new Project();
  id: number;
  userId: number;
  numberId: number = 1;
  constructor(private projectservice: ProjectServiceService, private router: Router, private route: ActivatedRoute,
    private localstorageservice: LocalStorageService, private toast: NgToastService) {

  }

  ngOnInit(): void {
    
    this.userId = Number(this.localstorageservice.get('id'));
    this.id = this.route.snapshot.params['id'];
    this.projectservice.getProjectById(this.id).subscribe(data => {
      this.project = data;
      for(let i = 0; i < data.projectTasks.length; i++){
        // this.numberId = i;
      }
      console.log(data);
    });
    
    
  }

  gotoEditProject(){
    this.router.navigate(['update-project', this.id]);
  }

  gotoDashboard(){
    this.router.navigate(['dashboard', this.userId]);
  }

  gotoAllProject(){
    this.router.navigate(['allProjects']);
  }

  gotoUserProjectList(){
    this.router.navigate(['user-project-list', this.userId])
  }

  addTask(){
    this.router.navigate(['createProjectTask', this.id])
  }

  deleteProject(){
  var question = window.confirm("Are you sure you want to delete this project?");
  if(question){
  this.projectservice.deleteProject(this.id).subscribe(data =>{
    console.log(data);
    this.toast.success({detail:"Success", summary: data, duration: 3000})
    this.gotoUserProjectList();
  },
  error => this.toast.error({detail:"Error", summary: "an error occured", duration: 3000}));}
  else {

  }
  }

}

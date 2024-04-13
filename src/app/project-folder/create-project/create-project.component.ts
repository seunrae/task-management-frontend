import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { UserServiceService } from 'src/app/user-folder/user-service.service';
import { Project } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit{
  project: Project =  new Project();
  id: number;
  projectId: number;
  userId: number;
  constructor(private projectservice: ProjectServiceService, private userservice: UserServiceService, private route: ActivatedRoute, private router: Router,
    private localstorage: LocalStorageService, private toast: NgToastService) {
  }
  ngOnInit(): void {
  this.userId = Number(this.localstorage.get('id'));
  this.id = this.route.snapshot.params['id'];
  }

  createProject() {
  this.projectservice.createProject(this.id, this.project).subscribe((data: any) => {
    this.projectId = data.id;
    console.log(data);
    this.gotoUserProjectList();
    this.toast.success({detail: "Success", summary:"Project created", duration: 3000});

  },
  error => {this.toast.error({detail: "Error", summary:"Please fill all the blank spaces", duration: 3000});});
  }

  gotoCreateProject() {
    this.router.navigate(['createProject', this.userId]);
  }

  gotoCreateProjectTask(){
    if(this.projectId == null){
      this.toast.warning({detail: "Warn", summary: "no project created", duration: 3000})
    }
    this.router.navigate(['createProjectTask', this.projectId]);
  }

  gotoUserProjectList(){
    this.router.navigate(['user-project-list', this.userId])
  }
  gotoDashboard(){
    this.router.navigate(['dashboard', this.userId]);
  }
  
  onSubmit(){
    this.createProject();
  }
}

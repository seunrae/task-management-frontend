import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit{
  id: number;
  project: Project;
  userId: number;

  constructor(private projectservice: ProjectServiceService, private router: Router, private route: ActivatedRoute,
    private localstorage: LocalStorageService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userId = Number(this.localstorage.get('id'));
    this.projectservice.getProjectById(this.id).subscribe(data => {
      this.project = data;
    },
    error => alert(error));
  }

  updateProject() {
    this.projectservice.updateProject(this.id, this.project).subscribe(data => {
      console.log(data);
    },
    error => alert(error));
  }

  gotoDashboard(){
    this.router.navigate(['dashboard', this.id]);
  }

  onSubmit(){
    this.updateProject();
  }



}

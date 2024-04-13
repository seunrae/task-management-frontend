import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{
  task: Task = new Task();
  id: number
  userId: number
  constructor(private taskservice: TaskService, private route: ActivatedRoute, private localstorage: LocalStorageService
    ,private router: Router) {

  }
  ngOnInit(): void {
    this.userId = Number(this.localstorage.get('id'));
    this.id = this.route.snapshot.params['id'];
    this.taskservice.getTaskById(this.id).subscribe(data => {
      this.task = data
    },
    error => alert(error));
  }
  gotoDashboard(id: number) {
    this.router.navigate(['dashboard', id]);
  }
  gotoUserTask(){
    this.router.navigate(['user-task-list', this.userId]);
  }

  updateTask(){
  this.taskservice.updateTask(this.id, this.task).subscribe(data => {
    console.log(data);
    this.gotoUserTask();
  },
  error => alert(error)
  );}

  onSubmit(){
    this.updateTask();
  }

}

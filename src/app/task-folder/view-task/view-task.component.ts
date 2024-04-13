import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { UserServiceService } from 'src/app/user-folder/user-service.service';
import { User } from 'src/app/user-folder/user/user-request';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit{
  task: Task = new Task();
  id: number
  userId: number | null;
  user: User;
  constructor(private taskservice: TaskService, private route: ActivatedRoute , private router: Router,
    private localStorage: LocalStorageService, private userservice: UserServiceService) {

  }
  ngOnInit(): void {
    this.userId = Number(this.localStorage.get('id'));
    this.id = this.route.snapshot.params['id'];
    this.taskservice.getTaskById(this.id).subscribe(data => {
      console.log(data);
      this.task = data;
    })

    this.userservice.getUserById(this.userId).subscribe(data => {
      this.user = data;
    })
  }

  gotoTasks(){
    this.router.navigate(['allTask']);
  }

  deleteTask(id: number){
    var question = window.confirm("Are you sure you want to delete this task");
    if (question){
      this.taskservice.deleteTask(id).subscribe((data: string) => {
        console.log(data);
        alert(data);
        this.gotoTasks();
      },
      error => {alert(error) , this.gotoTasks()});
    }
    else {
      
    }
    
  }


}

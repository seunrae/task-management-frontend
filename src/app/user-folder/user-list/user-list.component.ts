import { Component, OnInit } from '@angular/core';
import { User } from '../user/user-request';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: User[];

  constructor(private userservice: UserServiceService , private router: Router) {

  }
  ngOnInit(): void {
    this.getUsers()
  }

  private getUsers() {
    this.userservice.getUsers().subscribe(data => {this.users = data, console.log(data);
    })

  }

  viewUser(id: number) {
    this.router.navigate(['user', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['edit-user', id]);
  }
  
  deleteUser(id: number) {
    this.userservice.deleteUser(id).subscribe(data=> {
      console.log(data)
      alert("user deleted");
      this.getUsers();    
    },
    error => alert('error')
    );
  }


}

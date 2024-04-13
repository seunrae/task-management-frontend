import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user/user-request';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit{
  showModal: boolean = false;
  constructor(private userService: UserServiceService ,
    private router: Router, private toast: NgToastService) {

  }
  ngOnInit(): void {
   
  } 
  user: User = new User;

  gotoLogin() {
    this.router.navigate(['login']);
  }

  onSubmit(){
    this.userService.createUser(this.user)
    .subscribe(data => {
      console.log(data);
      this.toast.success({detail: "Success", summary:"Register Successful", duration: 5000});
      this.gotoLogin()
    },
    error => {this.toast.error({detail: "Error", summary:"Registration failed", duration: 5000});}
    )
    console.log("hello");
  }

}

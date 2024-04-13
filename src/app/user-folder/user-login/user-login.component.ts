import { Component, OnInit } from '@angular/core';
import { User } from '../user/user-request';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { AuthService } from '../../auth.service';
import { LocalStorageService } from '../../local-storage.service';
import { tap } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  user: User  = new User();
  constructor(private router: Router, private userservice: UserServiceService,
    private localstorageservice: LocalStorageService, private authservice: AuthService, private toast: NgToastService) {

  }
  ngOnInit(): void {
    
  }

  gotoRegister() {
    this.router.navigate(['signin']);
  }
  gotoUsers(){
    this.router.navigate(['users']);
  }

  gotoDashboard(id: number) {
    this.router.navigate(['dashboard', id]);
  }

  setUserdetails(data: any) {
    this.localstorageservice.set('id', data.id);
    this.localstorageservice.set('firstname', data.firstname);
    this.localstorageservice.set('lastname', data.lastname);
    this.localstorageservice.set('email', data.email);
    this.localstorageservice.set('token', data.token);
  }


  onSubmit() {
    if(this.user.email != null && this.user.password != null){
    this.userservice.verifyUser(this.user)
    .subscribe((data: any) => {
      this.toast.success({detail: "Success", summary:"Login Successful", duration: 5000});
      console.log(data);
      // this.authservice.setToken(JSON.stringify(data.token))
      this.setUserdetails(data);

      // this.gotoUsers();
      this.gotoDashboard(data.id);
    },
    error => {this.toast.error({detail: "Error", summary:"Login failed", duration: 5000});}
    
    )}
    else{
      this.toast.error({detail: "Error", summary:"Login failed", duration: 5000});
    }
  }

}

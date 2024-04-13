import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user-request';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: User = new User();
  id: number;
  constructor (private route: ActivatedRoute, private userservice: UserServiceService , private router: Router) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userservice.getUserById(this.id).subscribe(data => {
      this.user = data;
      console.log(data);
      
    },
    error => alert(error))
  }
  gotoUsers() {
    this.router.navigate(['users']);
  }
  updateUser(id: number) {
    this.router.navigate(['edit-user', id]);
  }

}

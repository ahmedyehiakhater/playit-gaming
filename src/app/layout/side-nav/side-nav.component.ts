import { UserService } from './../../shared/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  userDetails: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserDetails();
  }
  /**
   * Gets user details and sets it in local variable
   */
  getUserDetails() {
    this.userService.getUserDetails().subscribe(user => {
      this.userDetails = user;
      console.log("USER DETAILS", this.userDetails);
    });
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) { }
  isUserExist: boolean;
  ngOnInit() {
    // console.log("USER SERVICE", this.userService.isUserExist);
    this.getUserStatus();

  }
  /**
   * Subscribes to get userStatus observable to check if user is logged in
   */
  getUserStatus() {
    this.userService.getUserStatus().subscribe(user => {
      this.isUserExist = user['isUserExist'];
    });
  }
}

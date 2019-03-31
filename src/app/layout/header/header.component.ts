import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) { }
  isUserExist: boolean;
  isBackDisabled: boolean = true;
  ngOnInit() {
    this.checkBackEnabled();
    this.getUserStatus();
  }
  /**
   * Subscribes to router events and changed value of isBackDisabled to true on certain events
   */
  checkBackEnabled() {
    console.log("INSIDE CHECK ENABLED");
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/home/games/lobby' || event.url === '/home/games/online' || event.url === '/home/games/android') {
          this.isBackDisabled = false
        }
        else {
          this.isBackDisabled = true;
        }
      }
    });
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

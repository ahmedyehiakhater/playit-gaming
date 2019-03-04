import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("USER SERVICE", this.userService.isUserExist);
  }
}

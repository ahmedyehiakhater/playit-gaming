import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  @Input() phoneNumber: string;
  password: string;

  constructor(private loginService: LoginService, private userService: UserService) { }
  ngOnInit() {
    this.userService.getUserStatus().subscribe(status => {
      console.log("USER STATUS IN PASSWORD", status);
    });
    this.userService.getUserDetails().subscribe(user => {
      console.log("USER DETAILS IN PASSWORD", user);
    })
  }
  loginUser() {
    let userData = new FormData;
    userData.append('phone', this.phoneNumber);
    userData.append('password', this.password);
    this.loginService.loginUser(userData).subscribe(success => {
      this.userService.setUserData(success);
    });
  }
}

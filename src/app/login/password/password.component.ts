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
  isPasswordCorrect: boolean = true;
  isSMSSent: boolean = false;

  constructor(private loginService: LoginService, private userService: UserService) { }
  ngOnInit() {
  }
  /**
   * Logs in user and sets user data in shared user service 
   */
  loginUser() {
    let userData = new FormData;
    userData.append('phone', this.phoneNumber);
    userData.append('password', this.password);
    this.loginService.loginUser(userData).subscribe(success => {
      this.userService.setUserData(success);
    },
      error => {
        this.isPasswordCorrect = false;
      });
  }
  sendPasswordSMS() {
    this.loginService.sendPasswordSMS(this.phoneNumber).subscribe(
      success => {
        if (success['status']) {
          console.log("SMS has been sent successfully");
          this.isSMSSent = true;
        }
      }
    );
  }
}

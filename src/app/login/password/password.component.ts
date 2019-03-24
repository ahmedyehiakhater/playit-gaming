import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { UserService } from '../../shared/services/user/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private userService: UserService, private loadingSpinner: NgxSpinnerService, private router: Router) { }
  ngOnInit() {
  }
  /**
   * Logs in user and sets user data in shared user service 
   */
  loginUser() {
    this.loadingSpinner.show();
    let userData = new FormData;
    userData.append('phone', this.phoneNumber);
    userData.append('password', this.password);
    this.loginService.loginUser(userData).subscribe(success => {
      this.userService.setUserData(success);
      this.router.navigate(['/home/games/lobby']);
      this.loadingSpinner.hide();
    },
      error => {
        this.isPasswordCorrect = false;
        this.loadingSpinner.hide();
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

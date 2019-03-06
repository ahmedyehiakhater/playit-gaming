import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  @Input() countryCode: string;
  @Output() number: EventEmitter<string> = new EventEmitter<string>();
  @Output() requirePassword: EventEmitter<boolean> = new EventEmitter<boolean>();
  phoneNumber: string;
  unsubscribedError: boolean;
  usernameError: boolean;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  /**
   * Emits phone number to login component on change event 
   */
  emitNumber() {
    this.number.emit(this.phoneNumber);
  }
  /**
   * Calls API to check if the user exists and is active. 
   */
  validateUser() {
    this.loginService.checkUserExist(this.phoneNumber).subscribe(user => {
      if (user['exist'] && user['active']) {
        this.showPasswordField();
      }
      else if (user['exist'] && !user['active']) {
        this.usernameError = false;
        this.unsubscribedError = true;
      }
      else {
        this.unsubscribedError = false;
        this.usernameError = true;
      }
    });
  }
  /**
   * After user is validated and user's password is required. 
   */
  showPasswordField() {
    this.requirePassword.emit(true)
  }
  loginUserMSISDN() {

  }
}

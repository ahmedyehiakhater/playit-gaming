import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }
  /**
   * 
   */
  emitNumber() {
    this.number.emit(this.phoneNumber);
  }
  showPasswordField() {
    this.requirePassword.emit(true)
  }
  loginUserMSISDN(){

  }
}

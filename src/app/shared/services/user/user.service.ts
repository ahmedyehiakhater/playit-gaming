import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isUserExist: boolean;
  public userDetails: Subject<object> = new Subject<object>();
  public userStatus: Subject<object> = new Subject<object>();
  hostName: string;
  constructor(private cookieService: CookieService, private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.hostName = this.configService.getHostName();
  }
  /**
   * Handles the user depending on cookie
   */
  handleUser() {
    switch (this.cookieService.check('userId')) {
      case true:
        this.getUserToken(this.cookieService.get('userId'));
        break;
      case false:
        this.redirectUser();
        break;
    }
  }
  /**
   * Calls API to get token for given user ID
   * @param userId 
   */
  getUserToken(userId) {
    this.http.get(`${this.hostName}getToken/${userId}`).subscribe(user => {
      this.setUserData(user);
    },
      error => {
        this.userStatus.next({ "isUserExist": false });
      });
  }
  /**
   * Sets the user data and pushes it into stream 
   * @param data 
   */
  setUserData(data) {
    if (data['status']) {
      this.userDetails.next(data);
      this.userDetails.complete();
      this.userStatus.next({ "isUserExist": true });
    }
    else {
      this.userStatus.next({ "isUserExist": false });
    }
  }
  /**
   * Redirects the user to the login page if he is not already there
   */
  redirectUser() {
    if (this.router.url != '/login') {
      this.router.navigate(['/login']);
    }
  }
  /**
   * Returns user details to observers as an observable
   */
  getUserDetails() {
    return this.userDetails.asObservable();
  }
  /**
   * Returns user status to observers as an observable
   */
  getUserStatus() {
    return this.userStatus.asObservable();
  }
}

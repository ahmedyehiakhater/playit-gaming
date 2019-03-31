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
  public userId: string;
  public userDetails: Subject<object> = new Subject<object>();
  public userStatus: Subject<object> = new Subject<object>();
  hostName: string;
  testingHost: string;
  constructor(private cookieService: CookieService, private http: HttpClient, private configService: ConfigService, private router: Router) {
    this.hostName = this.configService.getHostName();
    this.testingHost = this.configService.getTestingHostName();
  }
  /**
   * Returns user id 
   */
  getUserId() {
    return this.userId;
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
    this.checkCookieSet(data['user_id']);
    if (data['status']) {
      this.userId = data['user_id'];
      this.userDetails.next(data);
      this.userStatus.next({ "isUserExist": true });
    }
    else {
      this.userStatus.next({ "isUserExist": false });
    }
  }
  /**
   * Checks if the user cookie is stored and stores it 
   * @param userId 
   */
  checkCookieSet(userId) {
    switch (this.cookieService.check('userId')) {
      case true:
        break;
      case false:
        this.cookieService.set('userId', userId)
        break;
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
  /**
   * Calls API to increment user points in leaderboard
   * @param userId 
   */
  updateUserLBPoints(userId) {
    return this.http.get(`${this.testingHost}LeaderBoard/updateUserLBPoints?userId=${userId}`);
  }
}

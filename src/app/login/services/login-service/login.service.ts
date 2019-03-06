import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../shared/services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostName: string;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.hostName = configService.getHostName();
  }

  loginUser(userData) {
    return this.http.post(`${this.hostName}login`, userData);
  }
  checkUserExist(username) {
    return this.http.get(`${this.hostName}checkusername/${username}`);
  }
  sendPasswordSMS(username) {
    return this.http.get(`${this.hostName}sendpassword/${username}`);
  }
}

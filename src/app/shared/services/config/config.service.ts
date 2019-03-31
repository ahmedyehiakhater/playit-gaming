import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public hostName: string = 'http://www.api.playit.mobi/api/v1/';
  public baseURL: string = 'http://staging.playit.mobi/api/v2/'
  public testingHost = "http://testing.playit.mobi/api/v2/"
  constructor() { }
  getHostName() {
    return this.hostName;
  }
  getBaseURL() {
    return this.baseURL;
  }
  getTestingHostName() {
    return this.testingHost;
  }
}

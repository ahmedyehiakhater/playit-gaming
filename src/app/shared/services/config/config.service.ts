import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public hostName: string = 'http://www.api.playit.mobi/api/v1/';
  constructor() { }
  getHostName() {
    return this.hostName;
  }
}

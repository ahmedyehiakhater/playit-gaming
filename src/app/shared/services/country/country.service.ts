import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public hostName: string;
  public countryName: string;
  public countryCode: string;
  public countryDetails: Subject<object> = new Subject<object>();
  constructor(private commonService: ConfigService, private http: HttpClient) {
    this.hostName = this.commonService.getHostName();
    console.log("host name", this.hostName);
  }
  /**
   * Returns observable to subscriber
   */
  public getCountryDetails() {
    return this.countryDetails.asObservable();
  }
  /**
   * Subscribes to API that gets country details
   */
  initiateCountry() {
    return this.http.get(`${this.hostName}getcountry`).subscribe(country => {
      this.setCountryDetails(country['country_name'], country['country_code']);
      console.log(country['country_name'], country['country_code']);
    });
  }

  /**
   * Adds country name and country code to stream of country details observable
   * @param countryName 
   * @param countryCode 
   */
  setCountryDetails(countryName, countryCode) {
    var countryInfo = { "countryName": countryName, "countryCode": countryCode };
    this.countryDetails.next(countryInfo);
    this.countryDetails.complete();
  }
}

import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public hostName: string
  public countryDetails: Observable<string>;
  public countryCode: Observable<string>;
  constructor(private commonService: ConfigService, private http: HttpClient) {
    this.hostName = this.commonService.getHostName();
    console.log("host name", this.hostName);
  }
  /**
   * Returns observable to subscriber
   */
  getCountryDetails() {
    return this.countryDetails;
  }
  /**
   * Subscribes to API that gets country details
   */
  initiateCountry() {
    return this.http.get(`${this.hostName}getcountry`).subscribe(country => {
      this.setCountryDetails(country['country_name'], country['country_code']);
    });
  }

  /**
   * Adds country name and country code to stream of country details observable
   * @param countryName 
   * @param countryCode 
   */
  setCountryDetails(countryName, countryCode) {
    this.countryDetails = new Observable(observer => {
      observer.next(countryName);
      observer.next(countryCode);
      observer.complete();
    })
  }
}

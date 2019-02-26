import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-service/login.service';
import { CountryService } from '../../shared/services/country/country.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private countryService: CountryService) { }

  ngOnInit() {
    this.getCountryDetails();
  }
  
  /**
   * Subscribes to service to retrieve country details 
   */
  getCountryDetails() {
    this.countryService.getCountryDetails().subscribe(country => {
      console.log("COUNTRY IN LOGIN", country);
    });
  }
}

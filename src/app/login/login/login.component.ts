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
  countryCode: string;
  phoneNumber: string;
  requirePassword: boolean;
  ngOnInit() {
    this.getCountryDetails();
  }

  /**
   * Subscribes to observable to get country details 
   */
  getCountryDetails() {
    this.countryService.getCountryDetails().subscribe(country => {
      this.countryCode = country['countryCode'];
    });
  }
  /**
   * Gets emitted phone value from username component
   * @param phone 
   */
  getPhoneNumber(phone) {
    this.phoneNumber = phone;
  }
  /**
   * Checks if username is inputted to view password field
   * @param isRequired 
   */
  isPasswordRequired(isRequired) {
    this.requirePassword = isRequired;
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from './shared/services/country/country.service';
import { UserService } from './shared/services/user/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService, private countryService: CountryService, private userService: UserService) {
  }
  ngOnInit() {
    this.initiateProject();
  }
  /**
   * Calls necessary methods to initiate project. 
   */
  initiateProject(){
    this.translateService.setDefaultLang('en');
    this.countryService.initiateCountry();
    this.userService.handleUser();
  }
}

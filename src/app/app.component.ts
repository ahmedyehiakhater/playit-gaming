import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CountryService } from './shared/services/country/country.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService, private countryService: CountryService) {
    this.translateService.setDefaultLang('en');
    this.countryService.initiateCountry();
  }
}

import { Injectable } from '@angular/core';
import { ConfigService } from '../../../shared/services/config/config.service';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../shared/services/country/country.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  baseURL: string;
  countryName: string;
  constructor(private configService: ConfigService, private http: HttpClient, private countryService: CountryService) {
    this.baseURL = this.configService.getBaseURL();
    this.countryService.getCountryDetails().subscribe(
      country => {
        this.countryName = country['countryName'];
      }
    );
  }
  /**
   * Calls API with order to get all games 
   * @param order 
   */
  getAllGames(order) {
    return this.http.get(`${this.baseURL}gameList/${order}/${this.countryName}`);
  }
  /**
   * Calls API with gameType and order to get games with type android or online
   * @param type 
   * @param order 
   */
  getAllGamesWithType(type, order) {
    return this.http.get(`${this.baseURL}gameList/${order}/${this.countryName}/${type}`);
  }
}

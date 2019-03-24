import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../shared/services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {
  hostName: string;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.hostName = this.configService.getHostName();
  }
  getFeaturedSlider() {
    return this.http.get(`${this.hostName}getSlider`);
  }
}

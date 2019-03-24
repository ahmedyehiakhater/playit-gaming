import { Component, OnInit } from '@angular/core';
import { FeaturedService } from '../services/featured/featured.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private featuredService: FeaturedService) { }
  featuredGames: Array<Object>;
  ngOnInit() {
    this.getFeaturedGames();
  }

  getFeaturedGames() {
    this.featuredService.getFeaturedSlider().subscribe(games => {
      this.featuredGames = games['slide_games'];
      console.log("FEATURED", this.featuredGames);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../services/games/games.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService, private spinnerService: NgxSpinnerService) { }
  gamesCategories: Array<object>;
  ngOnInit() {
    this.getGamesType();
  }
  /**
   * Determines type of game from data on routed to
   */
  getGamesType() {
    this.activatedRoute.data.subscribe(data => {
      this.spinnerService.show();
      switch (data['gameType']) {
        case 'all':
          this.getAllGames();
          break;
        default:
          this.getAllGamesWithType(data['gameType']);
          break;
      }
    });
  }
  /**
   * Gets all games with type either android or online 
   * @param gameType 
   */
  getAllGamesWithType(gameType) {
    this.gamesService.getAllGamesWithType(gameType, 2).subscribe(games => {
      this.gamesCategories = games['game_list'];
      console.log(this.gamesCategories);
      this.spinnerService.hide();
    });
  }
  /**
   * Gets all games with all types
   */
  getAllGames() {
    this.gamesService.getAllGames(2).subscribe(
      games => {
        this.gamesCategories = games['game_list'];
        this.spinnerService.hide();
      }
    );
  }
}

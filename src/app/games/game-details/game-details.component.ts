import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../services/games/games.service';
import { UserService } from '../../shared/services/user/user.service';
import { NgxSpinnerService } from '../../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameDetails: object;
  constructor(private activeRoute: ActivatedRoute, private gameService: GamesService, private userService: UserService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.getGame()
  }
  /**
   * Handles retrieving the game details
   */
  getGame() {
    this.spinnerService.show();
    this.getUserDetails();
  }
  /**
   * Gets user Id and in sequence gets game id
   */
  getUserDetails() {
    this.userService.getUserDetails().subscribe(user => {
      this.getGameId(user['user_id']);
    })
  }
  /**
   * Gets game ID from route parameter
   * @param userId 
   */
  getGameId(userId) {
    this.activeRoute.params.subscribe(params => {
      this.getGameDetails(params['gameid'], userId);
    });
  }
  /**
   * Gets game details
   * @param gameId 
   * @param userId 
   */
  getGameDetails(gameId, userId) {
    this.gameService.getGameWithId(gameId, userId).subscribe(game => {
      this.gameDetails = game;
      this.spinnerService.hide();
      console.log("GAME DETAILS", this.gameDetails);
    });
  }
}

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
  gameDetails: any;
  userComment: string;
  userId: string;
  gameId: string;
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
    // console.log("INSIDE FIRST FUNCTION")
  }
  /**
   * Gets user Id and in sequence gets game id
   */
  getUserDetails() {
    this.userId = this.userService.getUserId();
    if (this.userId === undefined) {
      this.userService.getUserDetails().subscribe(user => {
        this.userId = user['user_id'];
        this.getGameId(user['user_id']);
      });
    }
    else {
      this.getGameId(this.userId);
    }
  }
  /**
   * Gets game ID from route parameter
   * @param userId 
   */
  getGameId(userId) {
    this.activeRoute.params.subscribe(params => {
      this.gameId = params['gameid'];
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
    });
  }
  /**
   * Handles game like and unlike 
   */
  toggleLike() {
    switch (this.gameDetails['gameIsLiked']) {
      case true:
        this.unlikeGame();
        break;
      case false:
        this.likeGame();
        break;
    }
  }
  /**
   * Unlikes game  
   */
  unlikeGame() {
    this.gameService.unlikeGame(this.gameId, this.userId).subscribe(unliked => {
      if (unliked['status']) {
        this.gameDetails['gameIsLiked'] = false;
      }
    });
  }
  /**
   * Likes game
   */
  likeGame() {
    this.gameService.likeGame(this.gameId, this.userId).subscribe(liked => {
      if (liked['status']) {
        this.gameDetails['gameIsLiked'] = true;
      }
    });
  }
  submitReview(review) {
    console.log("SUBMITTED", review);
  }
  playGame() {
    switch (this.gameDetails['game_type']) {
      case 'easy':
        this.playHTML();
        break;
      case 'andriod':
        this.downloadGame();
        break;
    }
  }
  /**
   * Updates user points in LB
   */
  updateUserPoints() {
    this.userService.updateUserLBPoints(this.userId).subscribe(
      next => {
        console.log("Success callback update leaderboard", next);
      }
    );
  }
  /**
   *Redirects to game-play component  
   */
  playHTML() {

  }
  /**
   * Downloads game 
   */
  downloadGame() {
    this.updateUserPoints();
    var newWindow = window.open();
    this.gameService.downlaodGame(this.gameId).subscribe(data => {
      console.log("Game data", data);
      newWindow.location.href = this.gameDetails['game_folder'];
      setTimeout(() => {
        (function () {
          newWindow.close();
        })();
      }, 3000);
    });
  }
}

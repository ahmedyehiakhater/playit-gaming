import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { ListGamesComponent } from './list-games/list-games.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [ListGamesComponent, GameDetailsComponent]
})
export class GamesModule { }

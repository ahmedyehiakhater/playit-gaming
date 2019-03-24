import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGamesComponent } from './list-games/list-games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
const routes: Routes = [
  {
    path: 'leaderboard',
    component: ListGamesComponent
  },
  {
    path: 'lobby',
    component: ListGamesComponent,
    data: { gameType: 'all' }
  },
  {
    path: 'online',
    component: ListGamesComponent,
    data: { gameType: 'easy' }
  },
  {
    path: 'android',
    component: ListGamesComponent,
    data: { gameType: 'andriod' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

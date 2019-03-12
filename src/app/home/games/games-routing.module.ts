import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGamesComponent } from './list-games/list-games.component';
const routes: Routes = [
  {
    path: 'leaderboard',
    component: ListGamesComponent
  },
  {
    path: 'lobby',
    component: ListGamesComponent,
    data: { gameType: 'All' }
  },
  {
    path: 'online',
    component: ListGamesComponent,
    data: { gameType: 'Online' }
  },
  {
    path: 'android',
    component: ListGamesComponent,
    data: { gameType: 'Android' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

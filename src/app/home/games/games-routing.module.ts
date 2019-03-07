import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGamesComponent } from './list-games/list-games.component';
const routes: Routes = [
  {
    path: '',
    component: ListGamesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

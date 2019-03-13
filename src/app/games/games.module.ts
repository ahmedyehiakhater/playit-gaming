import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { ListGamesComponent } from './list-games/list-games.component';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [ListGamesComponent]
})
export class GamesModule { }

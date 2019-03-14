import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { ListGamesComponent } from './list-games/list-games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SliderComponent } from './slider/slider.component';
import { SlickModule } from 'ngx-slick';
@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    TranslateModule.forChild(),
    SlickModule.forRoot()
  ],
  declarations: [ListGamesComponent, GameDetailsComponent, SliderComponent]
})
export class GamesModule { }

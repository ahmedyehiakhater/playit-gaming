import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { GamesModule } from '../games/games.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    GamesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

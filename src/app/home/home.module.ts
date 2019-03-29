import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { GamesModule } from '../games/games.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    GamesModule,
    TranslateModule.forChild()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

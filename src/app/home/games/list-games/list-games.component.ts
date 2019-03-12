import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getGamesType();
  }
  getGamesType() {
    this.activatedRoute.data.subscribe(data => {
      console.log("Game type is", data);
      this.getAllGames();
    });
  }
  getAllGames(){
    
  }
}

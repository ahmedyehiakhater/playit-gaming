import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  @Input() sliderGames: Array<object>;
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    // centerMode: true
  };
  ngOnInit() {

  }
}

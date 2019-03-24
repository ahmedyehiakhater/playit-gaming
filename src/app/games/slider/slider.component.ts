import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() sliderGames: Array<object>;
  @Input() numberOfSlides: number;
  @Input() autoPlay: boolean;
  @Input() withGameDescription: boolean;
  slideConfig: object;
  ngOnInit() {

  }
  ngOnChanges() {
    this.slideConfig = {
      slidesToShow: this.numberOfSlides,
      slidesToScroll: this.numberOfSlides,
      arrows: false,
      autoplay: this.autoPlay
    }
  }
}

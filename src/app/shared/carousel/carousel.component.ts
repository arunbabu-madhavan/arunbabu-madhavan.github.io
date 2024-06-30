import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, HostListener } from '@angular/core';

enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone:true,
  imports:[CommonModule]

})
export class CarouselComponent implements OnInit {
  @Input() images?: String[];

  private currentSlide: number = 1;
  private slides?: string[];

  constructor() { }

  ngOnInit() {
    this.slides = [];
    if (this.images)
      for (var i = 0; i < this.images.length; i++)
        this.slides.push('slide' + (i + 1))
  }

  setCurrentSlide(currentSlide: any) {
    this.currentSlide = currentSlide;
  }

  private displaySlide(number: any) {
    setTimeout(() => {
      if (this.slides)
        document.getElementById(this.slides[number])!.click();
    }, 0);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if (this.images)
        this.currentSlide = (++this.currentSlide) % this.images.length;
      this.displaySlide(this.currentSlide);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (this.images) {
        this.currentSlide = (--this.currentSlide) % this.images.length;
        this.currentSlide = this.currentSlide < 0 ? this.currentSlide + this.images.length : this.currentSlide;
        this.displaySlide(this.currentSlide);
      }
    }

  }

}

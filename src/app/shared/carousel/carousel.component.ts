import { Component, OnInit, Input,HostListener  } from '@angular/core';

enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() images:String[];

  private currentSlide:number = 1;
  private slides:string[];

  constructor() { }

  ngOnInit() {
    this.slides = [];
    for(var i=0;i<this.images.length;i++)
      this.slides.push('slide' + (i +1))
  }

  setCurrentSlide(currentSlide){
    this.currentSlide = currentSlide;
  }
  
  private displaySlide(number){
        setTimeout(() => {
        document.getElementById(this.slides[number]).click();
    }, 0);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
 
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.currentSlide =  (++this.currentSlide) % this.images.length;
       this.displaySlide(this.currentSlide);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.currentSlide =  (--this.currentSlide) % this.images.length;
      this.currentSlide  = this.currentSlide  < 0 ? this.currentSlide + this.images.length : this.currentSlide;
       this.displaySlide(this.currentSlide);
    }

  }

}

import { Directive, Renderer2, ElementRef, OnInit, HostBinding } from '@angular/core';
import { DayNightService } from '../services/day-night.service';

@Directive({
  selector: '[dayNightColor]'
})
export class DayNightColorDirective implements OnInit {
  @HostBinding("class.night") isDark:boolean;
  constructor(private dayNightServiceInstance:DayNightService) {
  }
  ngOnInit() {
      this.isDark = !this.dayNightServiceInstance.isDay();
   }
 
}

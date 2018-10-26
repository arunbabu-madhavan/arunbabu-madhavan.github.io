import { Directive, OnInit, HostBinding } from '@angular/core';

const colorClasses:string[] =["red","blue","green", "orange","purple"]

@Directive({
  selector: '[colorPalette]'
})
export class ColorPaletteDirective implements OnInit {
  @HostBinding("class") class:string;
  constructor() {

  }
  ngOnInit() {
    this.class = colorClasses[parseInt((Math.random()*100).toString()) % colorClasses.length];
   }
 
}

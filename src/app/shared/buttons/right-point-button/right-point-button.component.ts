import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DayNightColorDirective } from '../../directives/day-night-color.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'right-point-button',
  templateUrl: './right-point-button.component.html',
  styleUrls: ['./right-point-button.component.css'],
  standalone:true,
  imports:[DayNightColorDirective, RouterLink]
})
export class RightPointButtonComponent implements OnInit {
  @Input() routerLink?:any[];
  @Output() hover: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() {
  }

  OnMouseOver(isMouseonTop:boolean)
  {
    if(this.hover)
    this.hover.emit(isMouseonTop);
  }
}

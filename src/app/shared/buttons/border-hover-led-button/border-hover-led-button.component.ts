import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'border-hover-led-button',
  templateUrl: './border-hover-led-button.component.html',
  styleUrls: ['./border-hover-led-button.component.css']
})
export class BorderHoverLedButtonComponent implements OnInit {
  @Output() ButtonClicked: EventEmitter<void> = new  EventEmitter<void>();
  @Input() width:number;
  @Input() routerLink:any[];
  @Input() link:string;
  dashOffset:number;
  constructor() { 
    this.width = 150;
  }
  OnClick():void {
    this.ButtonClicked.emit();
    
  }
  ngOnInit() {
    this.dashOffset = 220 ;
  }

}

import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

const maxSphereSpeed:number= 6;
const defaultSpeed:number = 2;

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  particleVelocity:number;
  
  constructor(){
    this.particleVelocity = defaultSpeed;
  }
  ngOnInit() {
   // document.body.style.backgroundColor="#000";
  }

  
  increaseParticleSpeed(toIncrease:boolean):void{
    this.particleVelocity = toIncrease ? maxSphereSpeed:defaultSpeed;
  }
  
  ngOnDestroy(){
   // document.body.style.backgroundColor="#fff";
    
  }
}

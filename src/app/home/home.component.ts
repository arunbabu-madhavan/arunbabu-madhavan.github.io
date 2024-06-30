import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ParticleComponent } from './particle/particle.component';
import { GreetingComponent } from './greeting/greeting.component';
import { IntroComponent } from './intro/intro.component';
import { Router, RouterModule } from '@angular/router';
import { DayNightColorDirective } from '../shared/directives/day-night-color.directive';
import { RightPointButtonComponent } from '../shared/buttons/right-point-button/right-point-button.component';

const maxSphereSpeed:number= 6;
const defaultSpeed:number = 2;

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ParticleComponent, GreetingComponent, IntroComponent, RouterModule, DayNightColorDirective, RightPointButtonComponent]
})
export class HomeComponent implements OnInit , OnDestroy {
  particleVelocity:number;
  
  constructor(){
    this.particleVelocity = defaultSpeed;
  }
  ngOnInit() {
   // document.body.style.backgroundColor="#000";
  }

  
  increaseParticleSpeed(toIncrease:any):void{
    this.particleVelocity = toIncrease ? maxSphereSpeed:defaultSpeed;
  }
  
  ngOnDestroy(){
   // document.body.style.backgroundColor="#fff";
    
  }
}

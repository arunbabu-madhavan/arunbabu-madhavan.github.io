import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleComponent } from './particle/particle.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ParticleComponent, GreetingComponent, HomeComponent, IntroComponent]
})
export class HomeModule {
 
 }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationArrowsComponent } from '../shared/navigation-arrows/navigation-arrows.component';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
  standalone:true,
  imports:[CommonModule, NavigationArrowsComponent]
})
export class BioComponent implements OnInit {
  images?:string[];
  image?:string;
  constructor() { 
    this.images = ["assets/images/bio/arun.jpeg"];
  }

  ngOnInit() {
    this.image = this.images![Math.floor(Math.random() * 100)%this.images!.length];
  }

}

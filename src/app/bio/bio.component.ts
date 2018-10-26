import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  images:string[];
  image:string;
  constructor() { 
    this.images = ["/src/assets/images/bio/1.png"];
  }

  ngOnInit() {
    this.image = this.images[Math.floor(Math.random() * 100)%this.images.length];
  }

}

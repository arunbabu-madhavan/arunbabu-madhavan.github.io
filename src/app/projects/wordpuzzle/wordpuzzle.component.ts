import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpuzzle',
  templateUrl: './wordpuzzle.component.html',
  styleUrls: ['./wordpuzzle.component.css']
})
export class WordpuzzleComponent implements OnInit {
  images:string[];
  constructor() { 
    this.images = ["/src/assets/images/projects/wordpuzzle/1.png"
    ,"/src/assets/images/projects/wordpuzzle/2.png"
   ,"/src/assets/images/projects/wordpuzzle/3.png"
  ,"/src/assets/images/projects/wordpuzzle/4.png"];

  }

  ngOnInit() {

  }

}

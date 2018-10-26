import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-space-attack',
  templateUrl: './space-attack.component.html',
  styleUrls: ['./space-attack.component.css']
})
export class SpaceAttackComponent implements OnInit {
  images:string[];
  constructor() { 
    this.images = ["assets/images/projects/spaceattack/1.png"
                          ,"assets/images/projects/spaceattack/2.png"
                         ,"assets/images/projects/spaceattack/3.png"];

  }

  ngOnInit() {
  }

}

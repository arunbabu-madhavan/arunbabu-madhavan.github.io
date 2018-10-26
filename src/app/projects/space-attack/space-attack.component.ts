import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-space-attack',
  templateUrl: './space-attack.component.html',
  styleUrls: ['./space-attack.component.css']
})
export class SpaceAttackComponent implements OnInit {
  images:string[];
  constructor() { 
    this.images = ["assets/images/projects/spaceattack/a.png"
                          ,"assets/images/projects/spaceattack/b.png"
                         ,"assets/images/projects/spaceattack/c.png"];

  }

  ngOnInit() {
  }

}

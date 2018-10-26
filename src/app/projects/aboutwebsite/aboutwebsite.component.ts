import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutwebsite',
  templateUrl: './aboutwebsite.component.html',
  styleUrls: ['./aboutwebsite.component.css']
})
export class AboutwebsiteComponent implements OnInit {
  images:string[];
  constructor() { }

  ngOnInit() {
    this.images = ["/src/assets/images/projects/website/1.png"
    ,"/src/assets/images/projects/website/2.png"
   ,"/src/assets/images/projects/website/3.png"
  ,"/src/assets/images/projects/website/4.png"];

  }

}

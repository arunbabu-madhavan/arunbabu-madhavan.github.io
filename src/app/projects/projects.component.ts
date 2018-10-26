import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { default  as mixitup } from "mixitup"
import { routerTransition } from '../router.transtions';
@Component({
  templateUrl: './projects.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  @ViewChild("containerobj") containerRef:ElementRef;
  ngOnInit() {
    var mixer = mixitup(".container-gallery",{
      animation: {
        easing: 'ease-in-out',
        animateResizeContainer: false,
        duration: 1000,
      }});
  }

  getState(outlet) {
  
    return outlet && outlet.activatedRouteData 
        && outlet.activatedRouteData['state'];
  
  }

}

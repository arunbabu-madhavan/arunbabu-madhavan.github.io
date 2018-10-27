import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { default  as mixitup } from "mixitup"
import { routerTransition } from '../router.transtions';
import { ProjectService } from './project.service';
import { Project } from './projects.model';
@Component({
  templateUrl: './projects.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[];
  imagesDir:string = "assets/images/projects/";
  constructor(private projectService:ProjectService) { }
  @ViewChild("containerobj") containerRef:ElementRef;
  ngOnInit() {
    
      this.projectService.getProjects()
      .subscribe((x:Project[]) => {this.projects = x;
        setTimeout(()=>{

          var mixer = mixitup(".container-gallery",{
            animation: {
              easing: 'ease-in-out',
              animateResizeContainer: false,
              duration: 900,
            }});

        },1000);
      }
      );
  }

 

  getState(outlet) {
  
    return outlet && outlet.activatedRouteData 
        && outlet.activatedRouteData['state'];
  
  }

}

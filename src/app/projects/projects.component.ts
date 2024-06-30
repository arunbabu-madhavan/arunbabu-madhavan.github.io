import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { routerTransition } from '../router.transtions';
import { ProjectService } from './project.service';
import { Project } from './projects.model';
import { RouterModule } from '@angular/router';
import { NavigationArrowsComponent } from '../shared/navigation-arrows/navigation-arrows.component';
import { CommonModule } from '@angular/common';
import { BorderHoverLedButtonComponent } from '../shared/buttons/border-hover-led-button/border-hover-led-button.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
@Component({
  templateUrl: './projects.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports:[RouterModule, NavigationArrowsComponent,ProjectdetailComponent, CommonModule, BorderHoverLedButtonComponent, CarouselComponent],
  providers:[ProjectService]
  
})
export class ProjectsComponent implements OnInit {

  projects?:Project[];
  imagesDir:string = "assets/images/projects/";
  constructor(private projectService:ProjectService) { }
  @ViewChild("containerobj") containerRef?:ElementRef;
  ngOnInit() {
    
      this.projectService.getProjects()
      .subscribe((x:Project[]) => {this.projects = x;
      }
      );
  }

 

  getState(outlet:any) {
  
    return outlet && outlet.activatedRouteData 
        && outlet.activatedRouteData['state'];
  
  }

}

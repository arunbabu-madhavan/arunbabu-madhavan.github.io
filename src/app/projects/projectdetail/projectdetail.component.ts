import { Component, OnInit, HostListener} from '@angular/core';
import { ProjectService } from '../project.service';
import { ProjectDetail } from '../projects.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

const ESC_KEY_CODE:number = 27;

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  title = 'Arun Babu Madhavan | Projects - ';
  images:string[];
  project:ProjectDetail;
  constructor(private projectService:ProjectService,private route:ActivatedRoute,private titleService:Title,private router:Router) { 

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === ESC_KEY_CODE) 
      this.router.navigate(["/projects"]);
  }
  

  popupClicked(event:Event):void{
    if(event.srcElement.className == "project-popup")
      this.router.navigate(["/projects"]);
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectService.getProjectDetail(+params['id'])
          .subscribe((x:ProjectDetail) => {this.project = x;
          
            this.titleService.setTitle(this.title +  this.project.ProjectName);
          });
    });

    
    
  }

}

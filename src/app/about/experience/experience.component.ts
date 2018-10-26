import { Component, OnInit } from '@angular/core';
import { Experience, Position } from './experience.model';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences:Experience[];

  
  constructor(private dataService:DataService) {
   
   }


  ngOnInit() {
   this.dataService.getExperience()
              .subscribe((x:Experience[]) => {this.experiences = x;});
  }

}

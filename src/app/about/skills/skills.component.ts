import { Component, OnInit } from '@angular/core';
import { SkillModel } from './skill.model';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillList:SkillModel[];
  constructor(private dataService:DataService) { 
 
  }

  ngOnInit() {
    this.dataService.getSkill()
      .subscribe((x:SkillModel[]) => {this.skillList = x;});
  }

}

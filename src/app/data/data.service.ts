
import { Injectable } from '@angular/core';
import { Experience } from '../about/experience/experience.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillModel } from '../about/skills/skill.model';

@Injectable()
export class DataService{

    constructor(private http:HttpClient){
       
    }

   getExperience():Observable<Experience[]>{
    return  this.http.get<Experience[]>('./data/experience.json?g=123');

  }

  getSkill():Observable<SkillModel[]>{
    return  this.http.get<SkillModel[]>('./data/skills.json');

  }

}
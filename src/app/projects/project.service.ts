import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectDetail } from './projects.model';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class ProjectService {

  constructor(private http:HttpClient){
       
  }

 getProjects():Observable<Project[]>{
  return  this.http.get<Project[]>('./data/projects.json');

}

getProjectDetail(id:number):Observable<ProjectDetail>{
  return  this.http.get<ProjectDetail[]>('./data/projectdetails.json')
  .pipe(map(items => {return items.filter(item => item.ProjectId == id)[0]}));

}


}

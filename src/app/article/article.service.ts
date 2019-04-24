import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class ArticleService {

  constructor(private http:HttpClient){
       
  }

 getArticles():Observable<Article[]>{
  return  this.http.get<Article[]>('./data/myArticles.json');

}

getInpirationArticles():Observable<Article[]>{
    return  this.http.get<Article[]>('./data/inspirations.json');
  
  }


}

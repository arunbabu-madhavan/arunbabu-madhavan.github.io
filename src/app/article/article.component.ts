import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './article.model';
import { CommonModule } from '@angular/common';
import { NavigationArrowsComponent } from '../shared/navigation-arrows/navigation-arrows.component';
import { CalendarComponent } from '../shared/calendar/calendar.component';

const MAX_RECENT_ARTICLES:number = 4;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  standalone: true,
  providers:[ArticleService],
  imports:[CommonModule, NavigationArrowsComponent, CalendarComponent]
})
export class ArticleComponent implements OnInit {
  
  articles?:Article[];
  allArticles?:Article[];

  inspirations?:Article[];
  constructor(private articleServiceInstance:ArticleService) { }

  ngOnInit() {
    this.articleServiceInstance.getArticles().subscribe(x => {
      x.sort((a,b)=>{
        return a.date < b.date ? 0 : -1});
      this.allArticles = x;
      this.articles = this.allArticles.splice(0,MAX_RECENT_ARTICLES);
    });
    
    this.articleServiceInstance.getInpirationArticles().subscribe(x => {
      this.inspirations = x;
    });


  }

}

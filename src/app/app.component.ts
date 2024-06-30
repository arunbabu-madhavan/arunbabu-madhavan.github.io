import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter,map,mergeMap } from 'rxjs/operators'
import { LayoutManager } from './shared/services/layout.service';
import { routerTransition } from './router.transtions';
import { FooterComponent } from './shared/footer/footer.component';
import { TopNavigationBarComponent } from './shared/top-navigation-bar/top-navigation-bar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ],
  imports:[RouterOutlet, FooterComponent, TopNavigationBarComponent],
  providers:[LayoutManager],
  styleUrls: ['./app.component.css'],
  standalone:true
})
export class AppComponent {
  title = 'Arun Babu Madhavan | ';
  
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private titleService:Title,private layoutManager:LayoutManager){
  }

  ngOnInit (){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)).pipe(
    map(() => this.activatedRoute))
    .pipe(
    map((route) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    }))
    .pipe(
    filter((route) => route.outlet === 'primary' )).pipe(
    mergeMap((route) => route.data))
    .subscribe((event) => {
      
      if(event['title'])
      {
        this.titleService.setTitle(this.title +  event['title'])
        if(event['title'].toString().toLowerCase() ==='home')
          this.layoutManager.homePageSetting();
        else
          this.layoutManager.defaultPageSetting();
      }
  
  });
}
 private node?:string;
getState(outlet:any) {
  
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['state'];

}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-arrows',
  templateUrl: './navigation-arrows.component.html',
  styleUrls: ['./navigation-arrows.component.css']
})
export class NavigationArrowsComponent implements OnInit {
  
  @Input() prevPage:string;
  @Input() nextPage:string;
  
  constructor() { }

  ngOnInit() {
  
  }

}

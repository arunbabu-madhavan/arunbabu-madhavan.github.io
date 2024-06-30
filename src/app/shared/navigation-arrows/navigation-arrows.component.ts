import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-arrows',
  templateUrl: './navigation-arrows.component.html',
  styleUrls: ['./navigation-arrows.component.css'],
  standalone:true,
  imports:[CommonModule, RouterLink]
})
export class NavigationArrowsComponent implements OnInit {
  
  @Input() prevPage?:string[];
  @Input() nextPage?:string[];
  
  constructor() { }

  ngOnInit() {
  
  }

}

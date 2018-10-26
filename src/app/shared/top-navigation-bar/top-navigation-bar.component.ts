import { Component, OnInit } from '@angular/core';
import { LayoutManager } from '../services/layout.service';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.css']
})
export class TopNavigationBarComponent implements OnInit {

  constructor(public layout:LayoutManager) { }

  ngOnInit() {
  }

}

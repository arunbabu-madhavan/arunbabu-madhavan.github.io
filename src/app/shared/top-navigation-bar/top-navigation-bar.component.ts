import { Component, OnInit } from '@angular/core';
import { LayoutManager } from '../services/layout.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.css'],
  standalone:true,
  imports:[RouterModule, CommonModule]
})
export class TopNavigationBarComponent implements OnInit {

  expand: boolean = false;
  constructor(public layout:LayoutManager) { }

  ngOnInit() {
  }

}

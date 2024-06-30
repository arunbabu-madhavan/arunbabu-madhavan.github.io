import { Component, OnInit } from '@angular/core';
import { LayoutManager } from '../services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class FooterComponent implements OnInit {

  constructor(public layout:LayoutManager) { }

  ngOnInit() {
  }

}

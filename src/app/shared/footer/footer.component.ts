import { Component, OnInit } from '@angular/core';
import { LayoutManager } from '../services/layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public layout:LayoutManager) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() articleSiteName:string;
  @Input() calendarDate:Date;
  constructor() { }

  ngOnInit() {

  }


}

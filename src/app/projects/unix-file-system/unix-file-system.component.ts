import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unix-file-system',
  templateUrl: './unix-file-system.component.html',
  styleUrls: ['./unix-file-system.component.css']
})
export class UnixFileSystemComponent implements OnInit {
  images:string[];
  constructor() { 
    this.images = ["assets/images/projects/unixfs/1.PNG"
                          ,"assets/images/projects/unixfs/2.PNG"
                         ,"assets/images/projects/unixfs/3.PNG"];

  }
  ngOnInit() {
  }

}

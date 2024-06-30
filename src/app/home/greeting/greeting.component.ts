import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  standalone: true

})
export class GreetingComponent implements OnInit {

  private greetingMessage?:string;
  private _greeting?:string;
  greetingAdjustment?:number;
  
  constructor() { }

  ngOnInit() {
    this.greetingMessage = this.getGreetingMessage();
    if(this.greetingMessage)
      this.greetingAdjustment = -(this.greetingMessage.length * 7);
  }

  public get Greeting() : string {
    return this.greetingMessage!;
  }

  getGreetingMessage():string | any{
     let greeting:string;

     var now = new Date();
     let hours:number = now.getHours();

     if(hours > 12)
      {  
        if(hours < 17)
          return "Good Afternoon!";
        else
          return "Good Evening!";
      }
     else
     {
       if(hours > 4)
          return "Good Morning!";
     }


  }


}

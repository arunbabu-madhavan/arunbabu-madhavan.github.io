import { IParticleSetting } from "../../home/particle/IParticle";
import { Injectable } from "@angular/core";

@Injectable()
export class DayNightService{

    particleSetting?:IParticleSetting;

    getParticleSetting():IParticleSetting{

        
     var now = new Date();
     let hours:number = now.getHours();

     if(hours > 12)
      {  
        if(hours < 17)
            return {b:0,g:137,r:2,radius:4.5};
        else
            return {b:228,g:175,r:80,radius:1.5};
          
      }
     else
     {
       if(hours > 4)
       return {b:4,g:128,r:255,radius:2.5};
     }
     return {b:228,g:175,r:80,radius:1.5};
       
    }

    getBackgroundColor():string{
        
        return this.isDay() ? "#ffffff" : "#000000"
    }

    
    getTextColor():string{
        
        return !this.isDay() ? "#ffffff" : "#000000"
    }

    isDay():boolean{
        var now = new Date();
        let hours:number = now.getHours();
        return (hours > 5 && hours < 17) ;
    }
}
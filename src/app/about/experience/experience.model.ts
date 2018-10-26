export class Experience{

   
    constructor(public companyName:string,public positions:Position[], 
        public  location:string, public imagePath:string)
    {
        
    }
}

export class Position{
 
    constructor(public designation:string,public summary:string,public timePeriod:string){
    }
}
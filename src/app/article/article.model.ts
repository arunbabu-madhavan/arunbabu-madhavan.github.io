export class Article{

   public date:Date;
    constructor(public heading:string,public subheading:string,
        public link:string, 
        public  views:string,
         public downloads:string,
         public bookmarked:string,
         private datestr:string,
         public author:string,
         public aboutAuthor:string,
         public authoreSite:string)
    {
        this.date = new Date(Date.parse(datestr));
    }
}

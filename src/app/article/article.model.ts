export class Article{

   public date:Date;
    constructor(public heading:string,public subheading:string,
        public link:string, 
        public  views:string,
         public downloads:string,
         public bookmarked:string,
         public site:string,
         private datestr:string,
         public author:string,
         public aboutAuthor:string,
         public authorSite:string,
         public likes:string)
    {
        this.date = new Date(Date.parse(datestr));
    }
}

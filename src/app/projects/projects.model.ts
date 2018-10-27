export interface Project{
        ProjectId:number;
        ProjectName:string;
        ShortDesc:string;
        InProgress:boolean;
        Categories:string[];
        ShowDetails:boolean;
        ImageFile:string;
}
export interface ProjectDetail{
    ProjectId:number;
    ProjectName:string;
    Description:string;
    showLink:boolean;
    linkType:number;
    linkhref:string;
    linkText:string;
    carouselImages:string[];
}

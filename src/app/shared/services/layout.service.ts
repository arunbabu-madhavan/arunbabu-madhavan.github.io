import { Injectable } from "@angular/core";

@Injectable()
export class LayoutManager{
    showHeader:boolean;
    showFooter:boolean;
    
    constructor(){
        this.showFooter = false;
        this.showHeader = false;
    }

    homePageSetting(){
        this.showFooter = false;
        this.showHeader = false;
    }

    defaultPageSetting(){
        this.showHeader = true;
        this.showFooter = true;
    }

}
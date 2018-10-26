import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { DayNightService } from './shared/services/day-night.service';
import { LayoutManager } from './shared/services/layout.service';
import { SkillsComponent } from './about/skills/skills.component';
import { DataService } from './data/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsModule } from './projects/projects.module';
import { BioComponent } from './bio/bio.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    BioComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProjectsModule
  ],
  providers: [LayoutManager,DayNightService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

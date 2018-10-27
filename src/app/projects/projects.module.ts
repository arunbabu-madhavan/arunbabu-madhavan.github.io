import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[ProjectService],
  declarations: [ProjectsComponent, ProjectdetailComponent],
  exports:[]
})
export class ProjectsModule { }

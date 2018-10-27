import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BioComponent } from './bio/bio.component';
import { ArticleComponent } from './article/article.component';
import { ProjectdetailComponent } from './projects/projectdetail/projectdetail.component';

const routes: Routes = [
{path:"home", component:HomeComponent, data:{title:"Home" , state:"home"}},
{path:"profile", component:AboutComponent, data:{title:"Profile" ,state: 'profile' }},
{path:"projects", component:ProjectsComponent, data:{title:"Projects" ,state: 'projects' },children:
  [
    {path:"project/:id", component:ProjectdetailComponent, data:{title:"Projects" , state: 'project' }},
  ]
},
{path:"about", component:BioComponent, data:{title:"About" ,state: 'about' }},
{path:"articles", component:ArticleComponent, data:{title:"Articles" ,state: 'article' }},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

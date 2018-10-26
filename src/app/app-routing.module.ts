import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SpaceAttackComponent } from './projects/space-attack/space-attack.component';
import { BioComponent } from './bio/bio.component';
import { ArticleComponent } from './article/article.component';
import { AboutwebsiteComponent } from './projects/aboutwebsite/aboutwebsite.component';
import { WordpuzzleComponent } from './projects/wordpuzzle/wordpuzzle.component';
import { UnixFileSystemComponent } from './projects/unix-file-system/unix-file-system.component';

const routes: Routes = [
{path:"home", component:HomeComponent, data:{title:"Home" , state:"home"}},
{path:"profile", component:AboutComponent, data:{title:"Profile" ,state: 'profile' }},
{path:"projects", component:ProjectsComponent, data:{title:"Projects" ,state: 'projects' },children:
  [
    {path:"spaceAttack", component:SpaceAttackComponent, data:{title:"Projects | Space Attack" , state: 'project' }},
    {path:"aboutwebsite", component:AboutwebsiteComponent, data:{title:"Projects | About Website" , state: 'project' }},
    {path:"wordpuzzle", component:WordpuzzleComponent, data:{title:"Projects | Word Puzzle" , state: 'project' }},
    {path:"unixfs", component:UnixFileSystemComponent, data:{title:"Projects | UNIX v6 File System" , state: 'project' }}
    
   
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

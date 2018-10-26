import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SpaceAttackComponent } from './space-attack/space-attack.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { AboutwebsiteComponent } from './aboutwebsite/aboutwebsite.component';
import { PlaychatComponent } from './playchat/playchat.component';
import { WordpuzzleComponent } from './wordpuzzle/wordpuzzle.component';
import { UnixFileSystemComponent } from './unix-file-system/unix-file-system.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [ProjectsComponent, SpaceAttackComponent, AboutwebsiteComponent, PlaychatComponent, WordpuzzleComponent, UnixFileSystemComponent],
  exports:[]
})
export class ProjectsModule { }

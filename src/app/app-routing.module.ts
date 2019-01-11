import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { CoursesComponent } from './courses/courses.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'links', component: LinksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  })

export class AppRoutingModule { }

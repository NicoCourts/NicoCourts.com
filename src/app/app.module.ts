import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { LinksComponent } from './links/links.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './blog/post.component';
import { BlogRoutingModule } from './blog/blog-routing.module';
//import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    ResumeComponent,
    CoursesComponent,
    LinksComponent,
    PostComponent,
    //AdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BlogRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

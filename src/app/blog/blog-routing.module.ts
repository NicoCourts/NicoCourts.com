import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post.component';
import { BlogComponent } from './blog.component';


const routes: Routes = [
    { path: 'blog/:urltitle', component: PostComponent },
    { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  })

export class BlogRoutingModule { }

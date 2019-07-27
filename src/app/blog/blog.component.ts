import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postList: Post[];
  showCount: number;
  startAt: number;

  // Read the API data and create a local data structure containing them
  constructor(public rest: RestService) {
    this.showCount = 5;
    this.startAt = 0;
    this.postList = [];
    this.rest.getPosts().subscribe((data: Post[]) => {
      this.postList = data.reverse();
    });
  }

  postType(p: Post) : string {
    if (p.isshort) {
      return "short "
    } else {
      return ""
    }
  }

  posted(p: Post) : string {
    let d = new Date(Date.parse(p.date))
    let options = { weekday: 'long', 
                    year:    'numeric', 
                    month:   'long', 
                    day:     'numeric', 
                    hour:    'numeric', 
                    minute:  'numeric' 
                  }
    return "Posted on " + d.toLocaleString("en-US", options)
  } 

  laterPosts() {
    this.startAt = this.startAt + this.showCount
  }

  prevPosts() {
    this.startAt = this.startAt - this.showCount
  }

  morePosts() : boolean {
    return this.postList.length > this.startAt + this.showCount
  }

  ngOnInit() {  }

}

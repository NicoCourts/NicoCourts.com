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

  // Read the API data and create a local data structure containing them
  constructor(public rest: RestService) {
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

  ngOnInit() {  }

}

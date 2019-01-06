import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { RestService } from '../rest.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  post: Post;

  constructor(public rest: RestService) {
    this.rest.getPost('1265362629').subscribe((data: Post) => {
      this.post = data;
    });
  }

  ngOnInit() {  }

}

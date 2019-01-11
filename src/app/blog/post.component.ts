import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  private post$: Observable<Post>;
  private post: Post;

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private service: RestService 
    ) {  }

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPost(params.get('urltitle')))
    );

    this.post$.subscribe((data: Post) => {
      this.post = data;
    });
  }

}

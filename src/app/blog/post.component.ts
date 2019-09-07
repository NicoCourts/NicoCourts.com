import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from './post';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  private post$: Observable<Post>;
  post: Post;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private service: RestService,
    private location: Location
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

  posted(p: Post) : string {
    let d = new Date(Date.parse(p.date))
    let options = { weekday: 'long', 
                    year:    'numeric', 
                    month:   'long', 
                    day:     'numeric', 
                    hour:    'numeric', 
                    minute:  'numeric' 
                  }
    return d.toLocaleString("en-US", options)
  }
  
  decode(s: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(JSON.parse(s))
  }

  goBack() {
    this.location.back();
  }

}

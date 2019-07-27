import { Component, OnInit } from '@angular/core';

declare function reType(): any;

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    setTimeout(() =>
    {
      reType();
    },
    500);
  }

}

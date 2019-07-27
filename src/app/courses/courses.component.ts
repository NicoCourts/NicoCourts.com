import { Component, OnInit } from '@angular/core';

declare function reType(): any;
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() =>
    {
      reType();
    },
    500);
  }

}

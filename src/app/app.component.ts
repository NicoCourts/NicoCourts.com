import { Component } from '@angular/core';
import { Section } from './section';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'website';

    showModal: string;
    router: Router;

    constructor(private _router: Router) {
        this.showModal = "hidden";
        this.router = _router;
    }

    sections: Section[] = [
        {uri: 'home', displayName: 'Home'},
        {uri: 'resume', displayName: 'Resume/CV'},
        {uri: 'blog', displayName: 'Blog'},
        {uri: 'courses', displayName: 'Coursework'},
        {uri: 'links', displayName: 'Links'}
    ];

    isSelected(s1: string, s2: string) {
        return (s1.substring(0,5) === "/blog" && s2.substring(0,5) === "/blog") || s1 === s2
    }

    modalToggle() {
        if (this.showModal == "hidden") {
          this.showModal = "show"
        } else {
          this.showModal = "hidden"
        }
      }
}

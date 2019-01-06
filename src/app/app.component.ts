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

    router: Router;

    constructor(private _router: Router) {
        this.router = _router;
    }

    sections: Section[] = [
        {uri: 'home', displayName: 'Home'},
        {uri: 'resume', displayName: 'Resume/CV'},
        {uri: 'blog', displayName: 'Blog'},
        {uri: 'courses', displayName: 'Coursework'},
        {uri: 'links', displayName: 'Links'}
    ];
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './blog/post';


const endpoint = 'https://api.nicocourts.com';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(endpoint + '/post/' + id);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(endpoint + '/posts/');
  }
}

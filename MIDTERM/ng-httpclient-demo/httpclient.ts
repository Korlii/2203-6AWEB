import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  // Challenge: Fetch from a different source (posts) and limit to 5
  getLimitedPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://jsonplaceholder.typicode.com/posts').pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}

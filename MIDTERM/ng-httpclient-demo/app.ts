import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];
  limitedPosts: any[] = []; // 2. New array for the challenge

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });

    // 3. Call the challenge service
    this.httpClient.getLimitedPosts().subscribe((data) => {
      this.limitedPosts = data;
    });
  }
}

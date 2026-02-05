import { Injectable, inject } from '@angular/core'; // 1. Add inject here
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private http = inject(HttpClient);
  public posts$: Observable<Post[]> = this.http.get<Post[]>(this.apiUrl).pipe(
    shareReplay(1)
  );
}

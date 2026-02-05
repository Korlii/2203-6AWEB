import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data-service';
import { TruncatePipe } from '../truncate-pipe';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css' // Ensure this matches your filename!
})
export class Home {
  private dataService = inject(DataService);

  latestPosts$ = this.dataService.posts$.pipe(
    map(posts => posts.slice(0, 5))
  );
}

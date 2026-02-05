import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data-service';
import { TruncatePipe } from '../truncate-pipe';
import { combineLatest, map, startWith, catchError, of } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  private dataService = inject(DataService);

  searchControl = new FormControl('', { nonNullable: true });

  filteredPosts$ = combineLatest([
    this.dataService.posts$,
    this.searchControl.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([posts, searchTerm]) => {
      const term = searchTerm.toLowerCase();
      return posts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
      );
    }),
    catchError(() => of(null))
  );
}

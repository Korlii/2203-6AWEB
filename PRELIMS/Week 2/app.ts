import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemo } from './data-binding-demo/data-binding-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prelim-lab-data-binding');
}

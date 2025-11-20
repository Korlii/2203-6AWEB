import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Footer } from "./footer/footer";
import { References } from "./references/references";
import { Hireme } from "./hireme/hireme";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Skills, Footer, References, Hireme],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}

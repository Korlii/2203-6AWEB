import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  imageUrl = "https://i.imgur.com/xV3IWMQ.jpeg"
  username: string = 'Adrian D. Curley'
  subtitle: string = 'I am an aspiring Web Developer!';
  description: string = 'I love building modern web interfaces, learning new frameworks, and turning ideas into real projects.';
}

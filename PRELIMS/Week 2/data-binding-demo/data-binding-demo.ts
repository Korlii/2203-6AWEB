import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})
export class DataBindingDemo {
  message = 'Data Binding Demonstration';
  title = "My First App!"
  description = "This is my new Angular Application"
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNPeqZUhb8tsU1ILP489QNRdYHj22lw1jmw&s'
  w = 150;
  h = 150;
  altText = 'Pochacco';
  textColor='blue';
  isHighlighted = true;
  yourName='';
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation
  studentName = "Adrian Curley";
  score = 98;

  // Property Binding
  imageUrl = "https://i.imgur.com/xV3IWMQ.jpeg"
  isDisabled= true;

  // Attribute Binding
  colSpanValue = 3;

  // Class Binding
  isPassing = true;

  // Style Binding
  boxColor = "purple";
  boxSize = "150px";
}

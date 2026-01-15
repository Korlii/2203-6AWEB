import {
  AsyncPipe, DatePipe, UpperCasePipe, LowerCasePipe,
  CurrencyPipe, SlicePipe, DecimalPipe,
  JsonPipe, KeyValuePipe, TitleCasePipe
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    AsyncPipe, DatePipe, UpperCasePipe, LowerCasePipe,
    CurrencyPipe, SlicePipe, DecimalPipe,
    JsonPipe, KeyValuePipe, TitleCasePipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  presentDate = new Date();
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  userObject = {
    id: 101,
    name: 'adrian curley',
    role: 'admin',
    status: 'active'
  };

  time$ = interval(1000).pipe(
    map(() => new Date())
  );

  ngOnInit(): void {
    console.log("Component is ready!");
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-services-demo');
  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  public products: {
    id: string,
    productname: string,
    description: string,
    price: number,
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productService: Products,
  ) {}

  ngOnInit() {
    this.products = this._productService.getProducts();
    this.employees = this._employeeService.getEmployees();
  }
}

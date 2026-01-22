import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
    return [
      {
        id: 101,
        firstname: 'Adrian',
        lastname: 'Curley',
        email: 'acurley@hau.edu.ph',
      },
      {
        id: 102,
        firstname: 'Sofia',
        lastname: 'Sarmiento',
        email: 'ssarmiento@hau.edu.ph',
      },
      {
        id: 103,
        firstname: 'Geonwoo',
        lastname: 'Kim',
        email: 'gkim@hau.edu.ph',
      },
      {
        id: 104,
        firstname: 'Karl',
        lastname: 'Dungca',
        email: 'kdungca@hau.edu.ph',
      },
    ]
  }
}

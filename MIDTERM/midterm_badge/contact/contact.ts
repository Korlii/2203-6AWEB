import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    subject: new FormControl('', { nonNullable: true }),
    message: new FormControl('', { nonNullable: true })
  });

  onSubmit() {
    console.log('Form Submitted!', this.contactForm.value);
    alert('Thank you for your message!');
    this.contactForm.reset();
  }
}

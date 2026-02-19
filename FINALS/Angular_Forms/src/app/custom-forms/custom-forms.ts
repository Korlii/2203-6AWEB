import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-forms.html',
  styleUrl: './custom-forms.css'
})
export class CustomForms implements OnInit {
  feedbackForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // inside ngOnInit or your constructor
    this.feedbackForm = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerNumber: ['', [Validators.required, Validators.pattern(/^(09|\+639)\d{9}$/)]],
      concern: ['', Validators.required],
      message: [''] // Leaving message optional as per your request
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.submitted = true;
      console.log('Feedback Data:', this.feedbackForm.value);
    }
  }
}

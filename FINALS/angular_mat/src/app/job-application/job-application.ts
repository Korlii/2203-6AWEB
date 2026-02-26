import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

// For the chip input functionality
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './job-application.html',
  styleUrl: './job-application.css'
})
export class JobApplication {
  isDarkMode = false;
  submittedData: any = null;

  // Chip control keys
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  // Requirement: Accept only users born in 2006 or earlier
  maxDate: Date = new Date(2006, 11, 31);

  // Requirement: Password starts with letter, alphanumeric only, 8+ characters
  passwordRegex = /^[a-zA-Z][a-zA-Z0-9]{7,}$/;

  jobForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.passwordRegex)
    ]),
    birthDate: new FormControl(null, [Validators.required]),
    department: new FormControl('', [Validators.required]),
    level: new FormControl('Junior')
  });

  // 1. Reactive list of skills using Signals
  skills = signal(['Angular', 'Firebase', 'Material UI']);

  // 2. Function to add a new skill from the input
  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our skill
    if (value) {
      this.skills.update(current => [...current, value]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  // 3. Function to remove a skill via the (removed) event
  removeSkill(skill: string): void {
    this.skills.update(current => {
      const index = current.indexOf(skill);
      if (index >= 0) {
        const newSkills = [...current];
        newSkills.splice(index, 1);
        return newSkills;
      }
      return current;
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onSubmit() {
    if (this.jobForm.valid) {
      // We combine the form values with our dynamic skills signal
      this.submittedData = {
        ...this.jobForm.value,
        skills: this.skills()
      };
    }
  }
}

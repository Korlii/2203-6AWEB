import { Routes } from '@angular/router';
import { Register } from './register/register';
import { JobApplication } from './job-application/job-application';

export const routes: Routes = [
  { path: '', component: Register},
  { path: 'register', component: Register},
  { path: 'job-application', component: JobApplication}
];

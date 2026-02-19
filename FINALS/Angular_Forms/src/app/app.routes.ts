import { Routes } from '@angular/router';
import { Home } from './home/home'; // Assuming you have a Home component
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomForms } from './custom-forms/custom-forms';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: 'custom', component: CustomForms },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: 'home' }
];

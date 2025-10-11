import { Routes } from '@angular/router';

export const routes: Routes = [];

export default [
  {
    path: 'sign-in',
    loadComponent: () => import('./sing-in/sing-in.component')
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sing-up/sing-up.component')

  }
]


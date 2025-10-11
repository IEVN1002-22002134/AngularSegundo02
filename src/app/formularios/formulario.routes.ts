import { Routes } from '@angular/router';

export const routes: Routes = [];

export default [
  {
    path: 'distancia',
    loadComponent: () => import('./distancia/distancia.component')
  },
  {
    path: 'multiplicacion',
    loadComponent: () => import('./multiplicacion/multiplicacion.component')

  },
  {
    path: 'zodiaco-chino',
    loadComponent: () => import('./zodiaco-chino/zodiaco-chino.component')

  }

]


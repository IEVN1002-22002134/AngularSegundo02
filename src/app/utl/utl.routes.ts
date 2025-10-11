import { Routes } from '@angular/router';

export const routes: Routes = [];

export default [
  {
    path: 'agregar',
    loadComponent: () => import('./agregar/agregar.component')
  },
  {
    path: 'alistalumnos',
    loadComponent: () => import('./alumnos/alumnos.component')
  },
  {
    path: 'eliminar/:matricula',
    loadComponent: () => import('./eliminar/eliminar.component')
  },
  {
    path: 'editar/:matricula',
    loadComponent: () => import('./editar/editar.component')
  }

]


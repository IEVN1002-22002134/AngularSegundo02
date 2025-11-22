import { Routes } from '@angular/router';
import { Distancia } from '../../formularios/distancia/diatancia2.component';



export default [
  {
    path: 'sign-in',
    loadComponent: () => import('./sing-in/sing-in.component').then(c=>c.SingInComponent)
  },

  {
    path: 'sign-up',
    loadComponent: () => import('./sing-up/sing-up.component').then(c=>c.SingUpComponent)

  },
]as Routes


import { Routes } from '@angular/router';


export default [
  {
    path: 'distancia',
    loadComponent: () => import('./distancia/distancia.component').then(m=> m.DistanciaComponent)
  },

  {
    path: 'multiplicacion',
    loadComponent: () => import('./multiplicacion/multiplicacion.component').then(m=> m.MultiplicacionComponent)

  },

  {
    path: 'zodiaco-chino',
    loadComponent: () => import('./zodiaco-chino/zodiaco-chino.component').then(m=> m.ZodiacoChinoComponent)

  },

]as Routes


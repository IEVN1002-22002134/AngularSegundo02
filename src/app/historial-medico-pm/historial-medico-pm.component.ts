// historial-medico-pm/historial-medico-pm.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OpcionMenu {
  nombre: string;
  icono: string; // Nombre del icono para simplificar
  activo: boolean;
}

@Component({
  selector: 'app-historial-medico-pm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-medico-pm.component.html',
  styleUrls: ['./historial-medico-pm.component.css']
})
export class HistorialMedicoPMComponent implements OnInit {

  menuOpciones: OpcionMenu[] = [
    { nombre: 'Historial', icono: 'history', activo: true },
    { nombre: 'Agregar Información', icono: 'add', activo: false },
    // Puedes añadir más opciones: Documentos, Diagnósticos, etc.
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización
  }

  // Función para cambiar la opción de menú activa
  seleccionarOpcion(opcion: OpcionMenu): void {
    this.menuOpciones.forEach(item => item.activo = false);
    opcion.activo = true;
    alert(`Cargando vista: ${opcion.nombre}`);
    // Aquí iría la lógica para cargar el componente/vista correspondiente
  }
}

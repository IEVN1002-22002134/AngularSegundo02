import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor, *ngIf

interface PersonalMedico {
  nombre: string;
}

interface PacienteReciente {
  nombre: string;
}

@Component({
  selector: 'app-panel-hospitalarion',
  imports: [CommonModule],
  templateUrl: './panel-hospitalarion.component.html',
  styleUrls: ['./panel-hospitalarion.component.css'] // Si tienes estilos específicos
})
export class PanelHospitalarioComponent implements OnInit {

  // Datos para las listas
  personalMedico: PersonalMedico[] = [
    { nombre: 'Dra. Sofía Ramos' },
    { nombre: 'Dr. Alejandro Torres' },
    { nombre: 'Lic. Enfermería Diana Cruz' },
  ];

  pacientesRecientes: PacienteReciente[] = [
    { nombre: 'Juan Pérez García' },
    { nombre: 'María López Jiménez' },
    { nombre: 'Carlos Ruiz Salazar' },
    { nombre: 'Laura Mendiola P.' },
    { nombre: 'Roberto González T.' },
  ];

  // Elemento activo del menú lateral
  menuActivo: 'Hospital' | 'Información' = 'Hospital';

  constructor() { }

  ngOnInit(): void {
  }

  // Método para cambiar el elemento activo del menú
  seleccionarMenu(opcion: 'Hospital' | 'Información'): void {
    this.menuActivo = opcion;
    console.log(`Menú seleccionado: ${this.menuActivo}`);
  }
}

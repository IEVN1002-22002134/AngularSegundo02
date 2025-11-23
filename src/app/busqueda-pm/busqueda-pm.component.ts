// busqueda-pm/busqueda-pm.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor, *ngIf
import { FormsModule } from '@angular/forms'; // Necesario para el filtro [(ngModel)]

// Definición de la estructura del Paciente
interface Paciente {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-busqueda-pm',
  standalone: true,
  // Importamos los módulos necesarios
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda-pm.component.html',
  styleUrls: ['./busqueda-pm.component.css']
})
export class BusquedaPMComponent implements OnInit {

  // Variable para el filtro de búsqueda
  searchFilter: string = '';

  // Lista estática de los "Últimos Pacientes"
  ultimosPacientes: Paciente[] = [
    { id: '12345', nombre: 'Daniela Herrera' },
    { id: '56789', nombre: 'Matilde Gonzalez' },
    { id: '12368', nombre: 'Jorge Gonzalez' },
    { id: '57638', nombre: 'Iridia Barajas' },
    { id: '10111', nombre: 'Alejandro Martinez' },
  ];

  // Lista reactiva para mostrar en el *ngFor
  pacientesFiltrados: Paciente[] = [];

  constructor() { }

  ngOnInit(): void {
    // Inicializar la lista filtrada al inicio
    this.pacientesFiltrados = this.ultimosPacientes;
  }

  // Lógica de filtrado (se activa al escribir en el input)
  onFilterChange(newValue: string): void {
    const filterBy = newValue.toLocaleLowerCase();
    if (filterBy) {
      this.pacientesFiltrados = this.ultimosPacientes.filter((paciente: Paciente) =>
        paciente.nombre.toLocaleLowerCase().includes(filterBy) ||
        paciente.id.toLocaleLowerCase().includes(filterBy)
      );
    } else {
      // Si el filtro está vacío, mostrar todos los últimos pacientes
      this.pacientesFiltrados = this.ultimosPacientes;
    }
  }

  // Función placeholder para el botón de BÚSQUEDA
  ejecutarBusqueda(): void {
    alert(`Ejecutando búsqueda avanzada para: ${this.searchFilter}`);
  }

  // Función placeholder para el botón ESCANEAR QR
  escanearQR(): void {
    alert('Navegando a la interfaz de Escaneo QR...');
  }
}

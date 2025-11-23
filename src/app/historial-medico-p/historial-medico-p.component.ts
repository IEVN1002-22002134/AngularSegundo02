// historial-medico/historial-medico.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaces para simular los datos
interface Diagnostico {
  fecha: string;
  descripcion: string;
}

interface Documento {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-historial-medico-p',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-medico-p.component.html',
  styleUrls: ['./historial-medico-p.component.css']
})
export class HistorialMedicoComponent implements OnInit {

  // Datos destacados
  datosDestacados = {
    nombre: 'Matilde Susana Gonzalez Blas',
    edad: 21,
    grupoSanguineo: 'O+',
    alergias: 'Loratadina',
  };

  // Diagnósticos simulados
  diagnosticos: Diagnostico[] = [
    { fecha: '2023-10-15', descripcion: 'Infección respiratoria leve. Tratamiento con antibiótico por 7 días.' },
    { fecha: '2024-01-20', descripcion: 'Revision de alergias estacionales. Receta de antihistamínico.' }
  ];

  // Documentación clínica simulada
  documentacion: Documento[] = [
    { nombre: 'Resultados dLaboratorio.pdf', ruta: '/docs/lab_01.pdf' },
    { nombre: 'Sanguinia5Q.pdf', ruta: '/docs/sanguinia.pdf' },
    { nombre: 'Pruebas.pdf', ruta: '/docs/pruebas_2024.pdf' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica para cargar el historial médico real.
  }

  descargarDocumento(nombre: string): void {
    alert(`Descargando documento: ${nombre}`);
  }

  seleccionarArchivos(): void {
    alert('Abriendo selector de archivos para subir nuevo documento...');
  }
}

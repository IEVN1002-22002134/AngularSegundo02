// ficha-ae/ficha-ae.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha-ae',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha-ae.component.html',
  styleUrls: ['./ficha-ae.component.css']
})
export class FichaAEComponent implements OnInit {

  // Datos de emergencia del paciente (simulación)
  pacienteEmergencia = {
    nombre: 'Matilde Susana Gonzalez Blas',
    edad: 21,
    grupoSanguineo: 'O+',
    alergias: 'N/A', // O especificar: 'Penicilina, Polen'
    enfermedadesCronicas: 'N/A', // O especificar: 'Asma, Diabetes Tipo 2'
    medicamentosActivos: 'N/A', // O especificar: 'Insulina, Salbutamol'
  };

  constructor() { }

  ngOnInit(): void {
    // Lógica para cargar los datos de emergencia del paciente.
  }
}

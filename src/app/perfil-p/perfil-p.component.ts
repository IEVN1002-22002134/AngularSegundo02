// perfil-p/perfil-p.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para pipes y directivas

@Component({
  selector: 'app-perfil-p',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-p.component.html',
  styleUrls: ['./perfil-p.component.css']
})
export class PerfilPComponent implements OnInit {

  // Datos del Paciente (Simulación de una interfaz de datos)
  paciente = {
    nombreCompleto: 'Matilde Susana Gonzalez Blas',
    edad: 21,
    fechaNacimiento: '2004-03-14',
    genero: 'Femenino',
    numeroTelefono: '4793775154',
    curp: 'GOBM040314MGTNLAT3'
  };

  // Datos del Consultorio
  consultorio = {
    ubicacion: 'Clínico 53',
    consultorio: 'C1',
    myDoctor: 'Carlos Landin'
  };

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización, por ejemplo, cargar datos reales de una API
  }

  // Las funciones de editar para simular la interacción
  editarDatosPersonales(): void {
    alert('Navegando a la edición de datos personales...');
  }

  editarInfoConsultorio(): void {
    alert('Navegando a la edición de información del consultorio...');
  }
}

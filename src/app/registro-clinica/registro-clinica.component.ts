// registro-clinica/registro-clinica.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-clinica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-clinica.component.html',
  styleUrls: ['./registro-clinica.component.css']
})
export class RegistroClinicaComponent implements OnInit {
  // ... (Las variables de modelo son las mismas)
  nombreComercial: string = '';
  rfc: string = '';
  tipoEstablecimiento: string = '';
  razonSocial: string = '';
  correoInstitucional: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  codigoPostal: string = '';
  calleNumero: string = '';
  coloniaSector: string = '';
  tiposEstablecimiento: string[] = ['Hospital', 'Clínica Privada', 'Consultorio Médico'];
  aceptaTerminos: boolean = false;

  constructor() { }
  ngOnInit(): void {}

  onSubmit(): void {
    // ... (Lógica de validación y envío)
    if (this.contrasena !== this.confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    console.log('Datos de la Clínica a registrar:', { nombreComercial: this.nombreComercial, rfc: this.rfc, /* ... */ });
  }
}

// login-p.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ⬅️ ¡IMPORTANTE! Lo importamos aquí.

@Component({
  selector: 'app-login-p',
  imports: [FormsModule, ], // ⬅️ Añadimos las dependencias del HTML aquí.
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent {
  // Las propiedades del formulario, como se definió antes
  nombres: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  curp: string = '';
  correoElectronico: string = '';
  fechaNacimiento: string = '2004-04-14'; // Puedes dejar el valor por defecto si lo deseas
  sexo: string = ''; // 'Masculino' o 'Femenino'

  registrarme() {
    // Lógica de registro
    console.log('Datos a registrar:', this.nombres, this.sexo);
  }
}

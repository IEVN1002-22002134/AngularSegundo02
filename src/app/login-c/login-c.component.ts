import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Necesario para Formularios Reactivos
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-c',
  // Si tu clase usa módulos, este componente debe estar declarado en AppModule.
  // Si tu clase usa standalone, añade: standalone: true, imports: [ReactiveFormsModule]
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent implements OnInit {

  // Declaración del Formulario Reactivo
  formularioLogin!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializa el formulario con los campos requeridos
    this.formularioLogin = this.fb.group({
      nombreUsuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  iniciarSesion(): void {
    if (this.formularioLogin.valid) {
      console.log('Datos de inicio de sesión:', this.formularioLogin.value);
      // Aquí iría la lógica de autenticación (servicio, API, etc.)

      alert(`Iniciando sesión como: ${this.formularioLogin.value.nombreUsuario}`);

    } else {
      console.log('Formulario inválido. Revise los campos.');
      alert('Por favor, ingresa tu usuario y contraseña.');
    }
  }
}

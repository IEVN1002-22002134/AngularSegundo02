import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Datos } from './zodiaco-chino2.component';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-zodiaco-chino',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './zodiaco-chino.component.html',
  styleUrl: './zodiaco-chino.component.css'
})
export class ZodiacoChinoComponent {
  formulario!: FormGroup
  resultado!: string
  image!:string
  objDatos= new Datos();


  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      aPaterno: new FormControl(''),
      aMaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      masculino: new FormControl(''),
      femenino: new FormControl('')

    })
  }
  calcular(): void{
    this.objDatos.nombre = this.formulario.value.nombre;
    this.objDatos.aPaterno = this.formulario.value.aPaterno;
    this.objDatos.aMaterno = this.formulario.value.aMaterno;
    this.objDatos.dia = this.formulario.value.dia;
    this.objDatos.mes = this.formulario.value.mes;
    this.objDatos.anio = this.formulario.value.anio;
    this.objDatos.sexo = this.formulario.value.sexo;

    this.objDatos.calcularSigno();

    this.resultado = this.objDatos.resultado;
    this.image = this.objDatos.imagen;


  }

}

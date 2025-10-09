import { Component } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Distancia } from './diatancia2.component';


@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
})

export class DistanciaComponent {
  formulario!: FormGroup
  resultado!: number;
  objMult = new Distancia();

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nx1: new FormControl(''),
      ny1: new FormControl(''),
      nx2: new FormControl(''),
      ny2: new FormControl('')
    });
  }

  calcularDistancia(): void {

    this.objMult.x1 = this.formulario.value.nx1;
    this.objMult.y1 = this.formulario.value.ny1;
    this.objMult.x2 = this.formulario.value.nx2;
    this.objMult.y2 = this.formulario.value.ny2;

    this.objMult.calcular();

    this.resultado = this.objMult.res;

  }
}

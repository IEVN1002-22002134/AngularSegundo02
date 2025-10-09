import { Component } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  formulario!:FormGroup
  resultado!:number;

  constructor(){}
    ngOnInit():void { //permite inicializar las peticiones o que muestre la info
      this.formulario = new FormGroup({
        numero1:new FormControl(''),
        numero2:new FormControl(''),
      });
    }
    multNumeros():void{
      let n1=this.formulario.value.numero1;
      let n2=this.formulario.value.numero2;
      this.resultado = n1*n2;
    }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* import { DistanciaComponent } from './formularios/distancia/distancia.component'; */
/* import { MultiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";
import { ZodiacoChinoComponent } from "./formularios/zodiaco-chino/zodiaco-chino.component"; */
import { NavbarComponent } from "./navbar/navbar.component";
import { initFlowbite } from 'flowbite';
import { TemhComponent } from "./tem/temh/temh.component";
import { TempComponent } from "./tem/temp/temp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent], //imports: [RouterOutlet, DistanciaComponent, MultiplicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
  ngOnInit():void {
    initFlowbite
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { MultiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";
import { ZodiacoChinoComponent } from "./formularios/zodiaco-chino/zodiaco-chino.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZodiacoChinoComponent], //imports: [RouterOutlet, DistanciaComponent, MultiplicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* import { DistanciaComponent } from './formularios/distancia/distancia.component'; */
/* import { MultiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";
import { ZodiacoChinoComponent } from "./formularios/zodiaco-chino/zodiaco-chino.component"; */
import { NavbarComponent } from "./navbar/navbar.component";
import { initFlowbite } from 'flowbite';
import { TemhComponent } from "./tem/temh/temh.component";
import { TempComponent } from "./tem/temp/temp.component";
import { LoginPComponent } from "./login-p/login-p.component";
import { LoginCComponent } from "./login-c/login-c.component";
import { PerfilPComponent } from "./perfil-p/perfil-p.component";
import { EscanearQRPComponent } from "./escanear-qrp/escanear-qrp.component";
import { FichaAEComponent } from "./ficha-ae/ficha-ae.component";
import { HistorialMedicoComponent } from "./historial-medico-p/historial-medico-p.component";
import { HistorialMedicoPMComponent } from "./historial-medico-pm/historial-medico-pm.component";
import { BusquedaPMComponent } from "./busqueda-pm/busqueda-pm.component";
import { AgregarInformacionComponent } from "./agregar-informacion/agregar-informacion.component";
import { RegistroClinicaComponent } from "./registro-clinica/registro-clinica.component";
import { PanelHospitalarioComponent } from "./panel-hospitalarion/panel-hospitalarion.component";
import { IndexComponent } from "./index/index.component";
import { ResultadosClinicosComponent } from "./resultados-clinicos/resultados-clinicos.component";
import { RecetasComponent } from "./recetas/recetas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecetasComponent], //imports: [RouterOutlet, DistanciaComponent, MultiplicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
  ngOnInit():void {
    initFlowbite
  }
}

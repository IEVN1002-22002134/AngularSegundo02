// agregar-informacion/agregar-informacion.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Documento {
  nombre: string;
}

interface Tab {
  nombre: string;
  key: 'diagnosticos' | 'resultados' | 'recetas';
}

@Component({
  selector: 'app-agregar-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agregar-informacion.component.html',
  styleUrls: ['./agregar-informacion.component.css']
})
export class AgregarInformacionComponent implements OnInit {

  tabs: Tab[] = [
    { nombre: 'Diagnósticos', key: 'diagnosticos' },
    { nombre: 'Resultados Clínicos', key: 'resultados' },
    { nombre: 'Recetas', key: 'recetas' }
  ];

  // La pestaña 'Diagnósticos' es la activa por defecto en la imagen de referencia.
  activeTab: 'diagnosticos' | 'resultados' | 'recetas' = 'diagnosticos';

  // Datos simulados (documentos)
  documentosDiagnosticos: Documento[] = [
    { nombre: 'Diagnostico_Examen Fisico.pdf' },
    { nombre: 'Diagnostico_Problemas futuros.pdf' }
  ];

  constructor() { }
  ngOnInit(): void {}

  seleccionarTab(key: 'diagnosticos' | 'resultados' | 'recetas'): void {
    this.activeTab = key;
    console.log(`Cambiando a pestaña: ${key}`);
  }

  seleccionarArchivos(): void {
    alert('Función de carga de archivos activada.');
  }
}

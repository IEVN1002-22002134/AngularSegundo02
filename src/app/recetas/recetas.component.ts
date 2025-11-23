import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  key: 'diagnosticos' | 'clinicos' | 'recetas';
  nombre: string;
  bgColor: string;
}

interface Documento {
  nombre: string;
}

@Component({
  // ===============================================
  // ¡CAMBIO DE NOMBRE!
  // ===============================================
  selector: 'app-recetas', // Selector renombrado
  templateUrl: './recetas.component.html', // Archivo HTML renombrado
  styleUrls: ['./recetas.component.css'],

  standalone: true,
  imports: [CommonModule]
})
export class RecetasComponent implements OnInit { // Clase renombrada

  menuLateralActivo: 'Historial' | 'Agregar Información' = 'Agregar Información';
  activeTab: 'diagnosticos' | 'clinicos' | 'recetas' = 'recetas'; // Pestaña predeterminada cambiada a 'recetas'

  tabs: Tab[] = [
    { key: 'diagnosticos', nombre: 'Diagnósticos', bgColor: '#9be3dc' },
    { key: 'clinicos', nombre: 'Resultados Clínicos', bgColor: '#7ddccf' },
    { key: 'recetas', nombre: 'Recetas', bgColor: '#9be3dc' },
  ];

  // Datos para la pestaña 'Resultados Clínicos'
  documentosClinicos: Documento[] = [
    { nombre: 'IndiceRoma.pdf' },
    { nombre: 'BiometriaHematica_5Q.pdf' },
  ];

  // Datos para la pestaña 'Recetas'
  documentosRecetas: Documento[] = [
    { nombre: 'Matilde_Blas_20251107_Rx.pdf' },
    { nombre: 'Matilde_Blas_20251015_Rx.pdf' },
  ];


  constructor() { }
  ngOnInit(): void { }

  seleccionarTab(tabKey: 'diagnosticos' | 'clinicos' | 'recetas'): void {
    this.activeTab = tabKey;
  }

  onDragOver(event: DragEvent) { event.preventDefault(); }
  onDrop(event: DragEvent) { event.preventDefault(); }
  seleccionarArchivos() { document.getElementById('fileUpload')?.click(); }
}

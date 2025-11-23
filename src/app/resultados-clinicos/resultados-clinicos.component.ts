import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ¡IMPORTANTE! Reemplaza el App.module

interface Tab {
  key: 'diagnosticos' | 'clinicos' | 'recetas';
  nombre: string;
  bgColor: string;
}

interface Documento {
  nombre: string;
}

@Component({
  selector: 'app-resultados-clinicos',
  templateUrl: './resultados-clinicos.component.html',
  styleUrls: ['./resultados-clinicos.component.css'],

  // ===============================================
  // CONFIGURACIÓN STANDALONE (SIN APP.MODULE)
  // ===============================================
  standalone: true, // Indica que este es un componente standalone
  imports: [CommonModule] // Hace que directivas como *ngFor y *ngIf funcionen
  // ===============================================
})
export class ResultadosClinicosComponent implements OnInit {

  // Estado del menú lateral
  menuLateralActivo: 'Historial' | 'Agregar Información' = 'Agregar Información';

  // ==============================================
  // LÓGICA DE PESTAÑAS
  // ==============================================
  activeTab: 'diagnosticos' | 'clinicos' | 'recetas' = 'clinicos';

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

  constructor() { }

  ngOnInit(): void {
  }

  // Método para cambiar la pestaña activa
  seleccionarTab(tabKey: 'diagnosticos' | 'clinicos' | 'recetas'): void {
    this.activeTab = tabKey;
  }

  // Métodos de Drag and Drop
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
  }

  // Método para simular la selección de archivos al hacer clic
  seleccionarArchivos() {
      document.getElementById('fileUpload')?.click();
  }
}

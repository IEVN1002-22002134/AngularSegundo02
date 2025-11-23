// escanear-qrp/escanear-qrp.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para componentes Standalone

@Component({
  selector: 'app-escanear-qrp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escanear-qrp.component.html',
  styleUrls: ['./escanear-qrp.component.css']
})
export class EscanearQRPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías implementar la lógica para generar el código QR del paciente si fuera dinámico.
  }

  descargarQR(): void {
    alert('Función: Descargando Código QR...');
    // Lógica para descargar la imagen del QR.
  }

  compartirQR(): void {
    alert('Función: Compartiendo Código QR...');
    // Lógica para compartir el QR (usando la API Web Share si es necesario).
  }
}

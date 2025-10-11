export class Datos {
  nombre: string = '';
  aPaterno: string = '';
  aMaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';
  edad: number = 0;
  resultado: string = '';
  imagen: string = '';

  calcularSigno(): void {

    let anioActual = new Date().getFullYear();
    this.edad = anioActual - this.anio;

    let signo = '';

    if (this.anio % 12 == 0) {
      signo = 'Mono';
      this.imagen = "./img/Mono.jpg";

    } else if (this.anio % 12 === 1) {
      signo = 'Gallo';
      this.imagen = "./img/Gallo.jpg";

    } else if (this.anio % 12 === 2) {
      signo = 'Perro';
      this.imagen = "./img/Perro.jpg";
    } else if (this.anio % 12 === 3) {
      signo = 'Cerdo';
      this.imagen = "./img/Cerdo.jpg";
    } else if (this.anio % 12 === 4) {
      signo = 'Rata';
      this.imagen = "./img/Rata.jpg";
    } else if (this.anio % 12 === 5) {
      signo = 'Buey';
      this.imagen = "./img/Buey.jpg";
    } else if (this.anio % 12 === 6) {
      signo = 'Tigre';
      this.imagen = "./img/Tigre.jpg";
    } else if (this.anio % 12 === 7) {
      signo = 'Conejo';
      this.imagen = "./img/Conejo.jpg";
    } else if (this.anio % 12 === 8) {
      signo = 'Dragón';
      this.imagen = "./img/Dragon.jpg";
    } else if (this.anio % 12 === 9) {
      signo = 'Serpiente';
      this.imagen = "./img/Serpiente.jpg";
    } else if (this.anio % 12 === 10) {
      signo = 'Caballo';
      this.imagen = "./img/Caballo.jpg";
    } else if (this.anio % 12 === 11) {
      signo = 'Cabra';
      this.imagen = "./img/Cobra.jpg";
    }

    this.resultado = `Hola ${this.nombre} ${this.aPaterno} ${this.aMaterno}, tienes ${this.edad} años y tu signo chino es ${signo}.`;
  }
}

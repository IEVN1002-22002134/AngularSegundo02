export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  res: number = 0
  
  calcular(): void {
    let dx = this.x2 - this.x1;
    let dy = this.y2 - this.y1;
    this.res = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }

}

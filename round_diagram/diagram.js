class Diagram {
  constructor(canvas, cells, gap, width, height, radius) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.rad = radius || 100;
    this.cellWidth = width || 40;
    this.cellHeight = height || 2;
    this.cells = cells || 60;
    this.gap = gap || 2;
    this.globalAngle = 0;
    //
    this.shiftDefault = 1;
  }
  drawDiagram() {
    for (let i = 0+this.globalAngle; i <= 360+this.globalAngle; i+=30) {
      let x = this.canvas.width/2+Math.cos(Math.PI/180*i)*this.rad;
      let y = this.canvas.height/2+Math.sin(Math.PI/180*i)*this.rad;
      this.ctx.save(); 
      //сдвигаем контекст в центр ячейки, чтобы поворот совершался относительно центра
      this.ctx.translate(x + this.cellHeight / 2, y + this.cellWidth / 2);
      this.ctx.rotate(i*Math.PI/180);
      this.ctx.translate(-this.cellHeight / 2, -this.cellWidth / 2);
      //
      for (let j = 0; j < this.cells; j++) {
        this.ctx.fillStyle = `hsl(${140 + i/2.5 + j*1.05}, 100%, 50%)`;
        let nextCellWidth = this.cellWidth + j*2;
        let shift = (this.cellWidth - nextCellWidth) / 2 * this.shiftDefault;
        this.ctx.fillRect(j*(this.gap+this.cellHeight), shift, this.cellHeight, nextCellWidth);
      }
      this.ctx.restore();
    }
  }
  draw() {  
    this.ctx.fillStyle = 'hsl(67, 100%, 8%)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawDiagram();
  }
  render() {
    this.draw();
    if(this.globalAngle < 360000) {
      this.globalAngle++;
    }else{
      this.globalAngle = 0;
    }
    window.requestAnimationFrame(this.render.bind(this));
  }
}
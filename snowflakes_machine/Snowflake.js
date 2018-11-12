//случайное значение с преобладанием меньшего числа
function getRandomSize() {
	let r1 = Math.random(),
		r2 = Math.random(),
		rad;
	if(r2 > r1) {
		rad = r1 * 40;
		if(rad <= 8) {
			rad = 8;
		}
	}else{
		rad = r2 * 40;
		if(rad <= 8) {
			rad = 8;
		}
	}
	return rad;
}
//
class Snowflake {
	constructor(sx, sy, img) {
		let x = sx || Math.floor(Math.random() * canvas.width);
		let y = sy || Math.floor((Math.random() * (-90)) - 10);
		this.pos = {x: x, y: y}; //позиция
		this.vel = {x: 0, y: 0}; //скорость
		this.acc = {x: 0, y: 0}; //ускорение
		this.radius = getRandomSize();
		this.img = img;
		this.dir = (Math.random() > 0.5) ? 0.02 : -0.02;
		this.angle = this.dir * (Math.random() * (2*Math.PI));
	}
	//генерируем случайную снежинку
	randomFlake() {
		let x = Math.floor(Math.random() * canvas.width);
		let y = Math.floor((Math.random() * (-90)) - 10);
		this.pos = {x: x, y: y}; //позиция
		this.vel = {x: 0, y: 0}; //скорость
		this.acc = {x: 0, y: 0}; //ускорение
		this.radius = getRandomSize();
	}
	applyForce(force) {
		//Parallax Effect Hack
		let f = Object.assign({}, force);
		f.y *= this.radius;
		this.acc.y += f.y;
	}
	render() {
		// ctx.fillStyle = '#fff';
		// ctx.beginPath();
		// ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
		// ctx.fill();
		// ctx.drawImage(this.img, this.pos.x, this.pos.y, this.radius*2, this.radius*2);
		ctx.save();
		ctx.translate(this.pos.x, this.pos.y);
		ctx.rotate(this.angle);
		ctx.drawImage(this.img, 0, 0, this.radius*2, this.radius*2);
		ctx.restore();
		this.angle += this.dir;
	}
	update() {
		this.vel.y += this.acc.y;
		/**Ограничиваем скорость в зависимости от радиуса 
		*	 формула нормализации из библиотеки p5.js 
		*  метод limit()
		*  файл p5.Vector.js
		*/
		let velSqrY = this.vel.y * this.vel.y;
		let radSqrY = (this.radius*0.2) * (this.radius*0.2);
		if(velSqrY > radSqrY) {
			this.vel.y = this.vel.y / this.vel.y * (this.radius*0.2);
		}
		//
		// let magnitude = Math.sqrt(velSqrY);
		// if(magnitude < 1) {
		// 	if(magnitude !== 0) {
		// 		this.vel.y = this.vel.y * (1 / magnitude); 
		// 	}
		// }
		//
		this.pos.y += this.vel.y;
		this.acc.y *= 0;
		if (this.pos.y > canvas.height + this.radius) {
			this.randomFlake();
		}
	}
	// offVision() {
	// 	if(this.pos.y > canvas.height + this.radius) {
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }
}

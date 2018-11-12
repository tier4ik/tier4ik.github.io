class Symbol {
	constructor(x, y, speed) {
		this.x = x;
		this.y = y;
		this.value; //в переменной будет храниться сам символ Katakana(японская слоговая азбука)
		this.speed = speed;
		this.switchInterval = Math.round(Math.random()*21 + 5);
		this.specialOne = false;
	}
	setToRandomSymbol() {
		if(frameCount % this.switchInterval == 0) this.value = String.fromCharCode(0x30A0 + Math.round(Math.random()*96));
	}
	movingDown() {
		if(this.y >= canvas.height) {
			this.y = 0;
		}else{
			this.y += this.speed;
		}
	}
}

class Stream {
	constructor() {
		this.symbols = [];
		this.symbolsLength = Math.round(Math.random()*25 + 5);
		this.speed = Math.random()*15 + 5;
	}
	generateSymbols(a, b) {
		let x = a;
		let y = b;

		for(let i = 0; i <= this.symbolsLength; i++) {
			let symbol = new Symbol(x, y, this.speed);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= 32;
		}
		//
		let index = Math.floor(Math.random() * this.symbols.length);
		for(let j = 0; j < this.symbols.length; j++) {
			if (j == index) this.symbols[j].specialOne = true;
		}
	}
	render() {
		for (var i = 0; i < this.symbols.length; i++) {
			if(this.symbols[i].specialOne) {
				ctx.fillStyle = 'rgb(255, 255, 255)';
			}else{
				ctx.fillStyle = 'rgb(0, 255, 90)';
			}
			ctx.font = '26px Tahoma';
			ctx.fillText(this.symbols[i].value, this.symbols[i].x, this.symbols[i].y);
			this.symbols[i].movingDown();
			this.symbols[i].setToRandomSymbol();
		}
	}
}
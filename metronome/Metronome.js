class Metronome {
	constructor() {
		this.tempHolder = document.getElementById('temp');
		this.ball = document.getElementById('ball');
		this.volumeRange = document.getElementById('range');
		this.kick = new Audio();
		this.kick.src;
		this.temp;
		this.interval;
		this.globalInterval;
		this.isWorking = false;
		self = this;
	}
	getAudioSrc() {
		let inputs = document.querySelectorAll('[name="sound"]');
		for(let i=0; i<inputs.length; i++) {
			if (inputs[i].checked) {
				this.kick.src = inputs[i].src;
				break;
			}
		}
	}
	getVolume() {
		let value = this.volumeRange.value;
		this.kick.volume = value;
	}
	getTemp() {
		this.temp = +this.tempHolder.value;
	}
	valueCheck() {
		if(!isNaN(parseFloat(this.temp)) && isFinite(this.temp)) {
			return true;
		}else return false;
	}
	getInterval() {
		this.interval = Math.round(60 / this.temp * 1000);
	}
	play() {
		this.getTemp();
		if(this.valueCheck() && this.isWorking === false) {
			this.isWorking = true;
			this.ball.classList.add('active');
			this.getInterval();
			this.getAudioSrc();
			this.kick.preload = 'auto';
			this.globalInterval = setInterval(function() {
									  self.kick.play();
									  self.getVolume();
								  }, self.interval);
		}else{
			return false;
		}
	}
	stop() {
		this.isWorking = false;
		this.ball.classList.remove('active');
		clearInterval(this.globalInterval);
	}
}
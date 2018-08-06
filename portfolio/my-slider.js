//В вашем контейнере для элементов слайдера создайте два подконтейнерa с классами 
//.slider-rails и .slider-wagon и поместите элементы слайдера внутрь
class MySlider {
	constructor(container) {
		this.container = container;
		this.mainDiv;
		self = this;
		this.startx = 0;
		this.endx = 0;
		this.wagon = this.container.getElementsByClassName('slider-wagon')[0];
		this.rails = this.container.getElementsByClassName('slider-rails')[0];
		this.wagonElements = this.wagon.getElementsByClassName('slider-element');
		this.wagon.addEventListener('click', self._elementPicker);
		this.wagon.addEventListener('mousedown', self._wagonCatcher);
		this.rails.addEventListener('wheel', self._wagonWheelMover);
		this.rails.addEventListener('touchstart', self._wagonTouchStart);
		document.addEventListener('touchmove', self._wagonTouchMove);
	}
	_mainCreator() { //Создаем блок для главного изображения
		this.mainDiv = document.createElement('div');
		this.mainDiv.classList.add('slider-main');//
	}
	_contentChanger() { //Меняем внутреннее наполнение главного блока в зависимости от активного элемента
		for (var i = 0; i < this.wagonElements.length; i++) {
			if(this.wagonElements[i].classList.contains('active')) {
				this.mainDiv.innerHTML = this.wagonElements[i].innerHTML;
				break;
			}
		}
	}
	_mainChanger() { //Вставляем главный блок в тело контейнера
		this._mainCreator();
		this._contentChanger();
	}
	_elementPicker(e) {
		e.preventDefault();
		for (var i = 0; i < self.wagonElements.length; i++) {
			self.wagonElements[i].classList.remove('active');
			if(self.wagonElements[i].contains(e.target)) {
				self.wagonElements[i].classList.add('active');
				self._contentChanger();
			}
		}
	}
	_wagonCatcher(e) {
		e.preventDefault();
		let shiftX = e.pageX - self.wagon.getBoundingClientRect().left;
		document.addEventListener('mousemove', _wagonMover);
		document.addEventListener('mouseup', _wagonCleaner);
		function _wagonMover(e) {
			e.preventDefault();
			let left = e.pageX - shiftX - self.rails.getBoundingClientRect().left;
			if(left > (self.rails.getBoundingClientRect().left + 120)) {
				_wagonCleaner();
				left = 0;
			}
			if(self.wagon.getBoundingClientRect().right < self.rails.getBoundingClientRect().right - 120) {
				_wagonCleaner();
				left = -(self.wagon.offsetWidth - self.rails.offsetWidth);
			}
			self.wagon.style.left = left + 'px';
		}
		function _wagonCleaner(e) {
			document.removeEventListener('mousemove', _wagonMover);
			document.removeEventListener('mouseup', _wagonCleaner);
		}
	}
	_wagonWheelMover(e) {
		self.delta = self.wagon.getBoundingClientRect().left - self.rails.getBoundingClientRect().left;
		self.delta += Math.floor(e.deltaY / 3);
		if(self.wagon.getBoundingClientRect().left >= self.rails.getBoundingClientRect().left + 120) {
			self.delta = 0;
		} 
		if(self.wagon.getBoundingClientRect().right <= self.rails.getBoundingClientRect().right - 120) {
			self.delta = -(self.wagon.offsetWidth - self.rails.offsetWidth);
		}
		self.wagon.style.left = self.delta + 'px';
	}
	_clickToMove(e) { //Движение по клику
		let left = self.wagon.getBoundingClientRect().left;
		if (e.target.closest('.slider-forward')) {
			if (self.wagon.getBoundingClientRect().right <= self.rails.getBoundingClientRect().right) left = 300 -(self.wagon.offsetWidth - self.rails.offsetWidth);
			self.wagon.style.left =  left - 300 + 'px';
		}
		if (e.target.closest('.slider-back')) {
			if (self.wagon.getBoundingClientRect().left >= self.rails.getBoundingClientRect().left) left = -300;
			self.wagon.style.left =  left + 300 + 'px';
		}
	}
	_wagonTouchStart(e) { //Отслеживается нажатие пальцем
		e.preventDefault();
		let touchobj = e.changedTouches[0];
        self.startx = touchobj.clientX;
	}
	_wagonTouchMove(e) {
		let touchobj = e.changedTouches[0],
        	dist = touchobj.clientX - self.startx,
        	startPos = self.wagon.getBoundingClientRect().left - self.rails.getBoundingClientRect().left;
        if(self.wagon.getBoundingClientRect().left >= self.rails.getBoundingClientRect().left + 10) {
        	startPos = 0;
        	dist = 0;
        }
        if(self.wagon.getBoundingClientRect().right <= self.rails.getBoundingClientRect().right - 10) {
        	startPos = -(self.wagon.offsetWidth - self.rails.offsetWidth);
        	dist = 0;
        }
        self.wagon.style.left = startPos + dist + 'px';
	}
	_navGenerator() {
		let forward = document.createElement('div'),
			back = document.createElement('div'),
			forwardInner = document.createElement('span'),
			backInner = document.createElement('span');
		forward.classList.add('slider-forward');
		back.classList.add('slider-back');
		forward.addEventListener('click', self._clickToMove);
		back.addEventListener('click', self._clickToMove);
		forwardInner.innerHTML = '&#10148;';
		backInner.innerHTML = '&#10148;';
		forward.append(forwardInner);
		back.append(backInner);
		this.rails.append(forward);
		this.rails.append(back);
	}
	_innerContentChecker() {
		window.onload = function() {
			if(self.wagon.offsetWidth < self.rails.offsetWidth) {
				let railsCenter = self.rails.offsetWidth / 2,
					wagonCenter = self.wagon.offsetWidth / 2;
				self.wagon.style.left = railsCenter - wagonCenter + 'px';
				self.wagon.removeEventListener('mousedown', self._wagonCatcher);
				document.getElementsByClassName('slider-forward')[0].removeEventListener('click', self._clickToMove);
				document.getElementsByClassName('slider-back')[0].removeEventListener('click', self._clickToMove);
			}
		}
	}
	init() {
		this._mainChanger();
		this.container.prepend(this.mainDiv);
		this._navGenerator();
		this._innerContentChecker();
	}
}
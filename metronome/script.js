document.addEventListener('DOMContentLoaded', init);

function init() {
	let metronome = new Metronome();
			
	let start = document.getElementById('start'),
		stop = document.getElementById('stop'),
		menu = document.getElementById('side-menu'),
		tempBox = document.getElementById('temp'),
		isOpened = false;

	document.addEventListener('click', function(evt) {
		if(evt.target.closest('#menu-button') && isOpened === false) {
			menu.classList.add('side-menu_active');
			isOpened = true;
			//ставится таймаут для того, 
			//чтобы успела сработать анимация выезда блока меню 0.3 секунды
			setTimeout(checkEdges, 310);
		}else if(!menu.contains(evt.target) && isOpened === true) {
			menu.classList.remove('side-menu_active');
			isOpened = false;
			tempBox.style.left = '';
		}else if(evt.target == start) {
			metronome.play();
		}else if(evt.target == stop) {
			metronome.stop();
		}
	});

	//
	function checkEdges() {
		let menuRight = menu.getBoundingClientRect().right,
			tempBoxLeft = tempBox.getBoundingClientRect().left;

		if(menuRight > tempBoxLeft) {
			let shiftX = menuRight - tempBoxLeft + 'px';
			tempBox.style.left = shiftX;
		}
	}		
}
document.addEventListener('DOMContentLoaded', init);

function init() {
	//Динамическое изменение количества гостей
	let guestSelect = document.querySelector('#guests'),
		guestDisplayer = document.querySelector('#guests-number');

	guestSelect.addEventListener('change', function() {
		let options = this.options;
		let selected;
		for (var i = 0; i < options.length; i++) {
			if (options[i].selected) {
				selected = options[i];
				break;
			} 
		}
		let value = selected.value;
		guestDisplayer.innerHTML = value;
	})

	//Открытие/скрытие меню слева и строки поиска
	let menu = document.getElementsByClassName('contacts')[0],
		bgShifter = document.getElementsByClassName('availability')[0],
		searchForm = document.getElementsByClassName('header__search-form')[0],
		clickCounter = 0;
		
	document.addEventListener('click', function(evt) {
		if(evt.target.closest('#button') && clickCounter === 0) {
			menu.classList.add('contacts_active');
			bgShifter.style.backgroundPosition = '115px 0';
			clickCounter++;
		}else if(!menu.contains(evt.target) && menu.classList.contains('contacts_active')) {
			menu.classList.remove('contacts_active');
			bgShifter.style.backgroundPosition = '';
			clickCounter--;
		}else if(evt.target.closest('#search-button')) {
			searchForm.style.display = 'inline-block';
		}
	})

	//Открытие видео плеера(заглушка)
	let playerButton = document.querySelector('.video__play-button');

	playerButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		alert('Video player was opened');
	})
}
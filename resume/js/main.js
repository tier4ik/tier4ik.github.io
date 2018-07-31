window.addEventListener('DOMContentLoaded', function() {
	let button = document.getElementsByClassName('header__mmenu-button')[0],
		nav = document.getElementsByClassName('header__nav')[0],
		scrolled,
		count = 0;

	document.addEventListener('click', menuShow);
		// Добавляем стили для появления меню
	function menuShow(e) {
		if(e.target.closest('.header__mmenu-button') && count === 0) {
			nav.classList.add('header__nav_active');
			button.classList.add('header__mmenu-button_active');
			count = 1;
			return false;
		}
		if(e.target.closest('.header__mmenu-button') && count === 1) {
			nav.classList.remove('header__nav_active');
			button.classList.remove('header__mmenu-button_active');
			count = 0;
			return false
		}
		if(!nav.contains(e.target)) {
			nav.classList.remove('header__nav_active');
			button.classList.remove('header__mmenu-button_active');
			count = 0;
		}
	};
	let buttonUp = document.getElementsByClassName('header__buttonUp')[0];
		// Добавляем эвент скролл и настраиваем кнопку "вверх"
	window.addEventListener('scroll', function(){
		let scrollMove = window.pageYOffset;
		scrolled = window.pageYOffset;
		if(scrollMove > 400) {
			buttonUp.style.display = 'block';
			buttonUp.addEventListener('click', goToTop);
		}else{
			buttonUp.style.display = '';
			buttonUp.removeEventListener('click', goToTop);
		}
	});

	let timer;
		// Настраиваем анимированную прокрутку страницы
	function goToTop() {
		if(scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 50; // Скорость прокрутки
			timer = setTimeout(goToTop, 8)
		}else{
			clearTimeout(timer);
			window.scrollTo(0, 0);
		}
	}
		// Добавляем всем input[type='range'] эвент "change"
	let range = document.querySelectorAll("input[type='range']");
	for (var i = 0; i < range.length; i++) {
		range[i].addEventListener('input', changeValue);
	}
		// Меняем значения в span относительно значений input[type='range']
	function changeValue() {
		for (var i = 0; i < range.length; i++) {
			let rangeSon = range[i].nextElementSibling;
			rangeSon.innerHTML = range[i].value + '%';
		}
	}
})


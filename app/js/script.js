window.addEventListener('DOMContentLoaded', init);

function init() {
	let bookContainer = document.getElementsByClassName('book-holder__goods')[0],
		counter = document.getElementsByClassName('cart__items-count')[0],
		price = document.getElementsByClassName('cart__items-price')[0],
		nav = document.getElementsByClassName('book-holder')[0].querySelector('nav'),
		slider = document.getElementsByClassName('slider')[0]
		sliderBox = slider.getElementsByClassName('slider__box')[0],
		sliderPieces = slider.getElementsByClassName('slider__mover'),
		bookArr = [],
		summ = 0,
		left = 0; //Координата для функции slide();
	
	bookContainer.addEventListener('click', bookChoicer);
	nav.addEventListener('click', navToggle);
	slider.addEventListener('click', slide);
	sliderBox.addEventListener('mousedown', drag);
	
	function bookChoicer(e) {    //Добавление книги в корзину и подсчет цены;
		e.preventDefault();
		if (e.target.closest('.book-holder__container')) {
			let title = e.target.closest('.book-holder__container').querySelector('h4').innerText,
				answer = confirm('Would you like to add ' + '"' + title + '"' + ' into your cart ?');
			
			if (answer) {
				bookArr.push(title);
				counter.innerHTML = bookArr.length + ' items';
				summ += +e.target.closest('.book-holder__container').querySelector('span').innerText.slice(1);
				price.innerHTML = '$' + summ;
			}
		}
	}

	function navToggle(e) { 		
		e.preventDefault();
		let navChildren = nav.getElementsByClassName('book-holder__element');
		for (var i = 0; i < navChildren.length; i++) {
			navChildren[i].classList.remove('book-holder__element_active');
		}
		e.target.parentElement.classList.add('book-holder__element_active');
		navContainerInner.call(null, e.target);
	}

	function navContainerInner(elem) {		//Переключение классов в нав-меню изменение наполнения;
		let bookCollection = bookContainer.querySelectorAll('.book-holder__goods-element');
		if(elem.innerHTML === 'Special Offers') {
			makeVisible();
			for (var i = 0; i < bookCollection.length; i++) {
				if (bookCollection[i].querySelector('.book-holder__on-sale')) {
					bookCollection[i].style.display = 'block';
				}else{
					bookCollection[i].style.display = 'none';
				}
			}
		}
		if (elem.innerHTML === 'Best sellers') {
			makeVisible();
		}
		if (elem.innerHTML === 'Used Books') {
			makeVisible();
			for (var i = 0; i < bookCollection.length; i++) {
				let price = +bookCollection[i].querySelector('span').innerText.slice(1);
				if (price <= 100) continue;
				bookCollection[i].style.display = 'none';
			}
		}
		function makeVisible() {   //Делает элементы видимыми для последующего редактирования;
			for (var i = 0; i < bookCollection.length; i++) {
				bookCollection[i].style.display = 'block';
			}
		}
	}

	function slide(e) {      //Переключаем слайды по элементам управления;
		if(e.target.closest('#forward')) {
			left -= 715;
			if(left < -715 * (sliderPieces.length - 1)) left = 0;
			sliderBox.style.left = left + 'px';
		}
		if (e.target.closest('#backward')) {
			left += 715;
			if(left > 0) left = -715 * (sliderPieces.length - 1);
			sliderBox.style.left = left + 'px';
		}
	}

	function drag(e) { 
		e.preventDefault();
		let shiftX = e.pageX - sliderBox.getBoundingClientRect().left;
		document.documentElement.addEventListener('mousemove', move);

		function move(e) {
			e.preventDefault();
			let left = e.pageX - shiftX - slider.getBoundingClientRect().left;
			if(sliderBox.getBoundingClientRect().left > slider.getBoundingClientRect().left + 100) {
				clear();
				left = 0;
			}
			if(sliderBox.getBoundingClientRect().right < slider.getBoundingClientRect().right - 100) {
				clear();
				left = -715 * (sliderPieces.length - 1);
			}
			sliderBox.style.left = left + 'px';
		}
		document.addEventListener('mouseup', clear);
		
		function clear() {
			visibleCorrecter();
			document.documentElement.removeEventListener('mousemove', move);
			document.documentElement.removeEventListener('mouseup', clear);
		}

		function visibleCorrecter() {     //При отпускании кнопки мыши корректируем положение BOX в контейнере
			for (var i = 0; i < sliderPieces.length; i++) {
				if(sliderPieces[i].getBoundingClientRect().right < slider.getBoundingClientRect().right
					&& sliderPieces[i].getBoundingClientRect().right > slider.getBoundingClientRect().left + (slider.offsetWidth / 2)) {
					left = -715 * i;
					sliderBox.style.left = left + 'px';
					break;
				}else if(sliderPieces[i].getBoundingClientRect().left > slider.getBoundingClientRect().left
					&& sliderPieces[i].getBoundingClientRect().left < slider.getBoundingClientRect().left + (slider.offsetWidth / 2)) {
					left = -715 * i;
					sliderBox.style.left = left + 'px';
					break;
				}
			}
		}
	}
	
	
}
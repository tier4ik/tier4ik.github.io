$(function() {
	$('#my-menu').mmenu({
		extensions: ['position-right', 'theme-dark', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-new.png">'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('#my-icon').addClass('is-active');
	});
	api.bind('close:finish', function(){
		$('#my-icon').removeClass('is-active');
	});
// -----------------------------------------------
	$('h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/,'<span>$1</span>'));
	});
// ------------------------------------------------
	$('select').selectize({
		create: true,
	});
// ----------------------------------------------
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.up-button').addClass('active');
		} else {
			$('.up-button').removeClass('active');
		}
	});

	$('.up-button').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
// ---------------------------------------------
	$("form.request__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.request__success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.request__success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
	$('.carousel-services').owlCarousel({
		nav: true,
		smartSpeed: 600,
		dots: false,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	$('.opinion__carousel').owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		smartSpeed: 600,
		// autoHeight: true,
	});
	$('.partners__gallery').owlCarousel({
		items: 4,
		loop: true,
		margin: 10,
		smartSpeed: 600,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 3
			},
			800: {
				items: 3
			},
			1100: {
				items: 4
			}
		}
	});
});

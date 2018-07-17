$(document).ready(function(){

	$(".banner__holder").owlCarousel({
		items: 1,
		smartSpeed: 600,
		loop: true,
		margin: 10,
	});	

	$(".fullImg").colorbox();

	$(document).mouseup(function(e){
		var box = $('.contact__message');

		if (!box.is(e.target) && box.has(e.target).length === 0) {
			$('#letter').removeClass('slideOutRight');
		} else {
			$('#letter').addClass('slideOutRight');
		}
	});
	
	$(document).mouseup(function(e){
		var box2 = $('.contact__name');

		if (!box2.is(e.target) && box2.has(e.target).length === 0) {
			$('#name').removeClass('slideOutRight');
		} else {
			$('#name').addClass('slideOutRight');
		}
	});

	$(document).mouseup(function(e){
		var box3 = $('.contact__email');

		if (!box3.is(e.target) && box3.has(e.target).length === 0) {
			$('#email').removeClass('slideOutRight');
		} else {
			$('#email').addClass('slideOutRight');
		}
	});

	$('#dark').click(function(){
		if ($('body').hasClass('purple')) {
			$('body').removeClass('purple');
			$('body').addClass('dark');
		} else {
			$('body').addClass('dark');
		};
		if ($('.header').hasClass('header_purple')) {
			$('.header').removeClass('header_purple');
			$('.header').addClass('header_dark');
		} else {
			$('.header').addClass('header_dark');
		};
		if ($('.header__sitename').hasClass('header__sitename_purple')) {
			$('.header__sitename').removeClass('header__sitename_purple');
			$('.header__sitename').addClass('header__sitename_dark');
		} else {
			$('.header__sitename').addClass('header__sitename_dark');
		};
		if ($('.header__menu').hasClass('header__menu_purple')) {
			$('.header__menu').removeClass('header__menu_purple');
			$('.header__menu').addClass('header__menu_dark');
		} else {
			$('.header__menu').addClass('header__menu_dark');
		};
		if ($('.header__link').hasClass('header__link_purple')) {
			$('.header__link').removeClass('header__link_purple');
			$('.header__link').addClass('header__link_dark');
		} else {
			$('.header__link').addClass('header__link_dark');
		};
		if ($('.banner__holder').hasClass('banner__holder_purple')) {
			$('.banner__holder').removeClass('banner__holder_purple');
			$('.banner__holder').addClass('banner__holder_dark');
		} else {
			$('.banner__holder').addClass('banner__holder_dark');
		};
		if ($('.marks').hasClass('marks_purple')) {
			$('.marks').removeClass('marks_purple');
			$('.marks').addClass('marks_dark');
		} else {
			$('.marks').addClass('marks_dark');
		};
		if ($('.marks__header').hasClass('marks__header_purple')) {
			$('.marks__header').removeClass('marks__header_purple');
			$('.marks__header').addClass('marks__header_dark');
		} else {
			$('.marks__header').addClass('marks__header_dark');
		};
		if ($('.marks__icon').hasClass('marks__icon_purple')) {
			$('.marks__icon').removeClass('marks__icon_purple');
			$('.marks__icon').addClass('marks__icon_dark');
		} else {
			$('.marks__icon').addClass('marks__icon_dark');
		};
		if ($('.marks__link').hasClass('marks__link_purple')) {
			$('.marks__link').removeClass('marks__link_purple');
			$('.marks__link').addClass('marks__link_dark');
		} else {
			$('.marks__link').addClass('marks__link_dark');
		};
		if ($('.marks__text').hasClass('marks__text_purple')) {
			$('.marks__text').removeClass('marks__text_purple');
			$('.marks__text').addClass('marks__text_dark');
		} else {
			$('.marks__text').addClass('marks__text_dark');
		};
		if ($('.owl-dots').hasClass('owl-dots_purple')) {
			$('.owl-dots').removeClass('owl-dots_purple');
			$('.owl-dots').addClass('owl-dots_dark');
		} else {
			$('.owl-dots').addClass('owl-dots_dark');
		};
		if ($('.examples').hasClass('examples_purple')) {
			$('.examples').removeClass('examples_purple');
			$('.examples').addClass('examples_dark');
		} else {
			$('.examples').addClass('examples_dark');
		};
		if ($('.social__news-header').hasClass('social__news-header_purple')) {
			$('.social__news-header').removeClass('social__news-header_purple');
			$('.social__news-header').addClass('social__news-header_dark');
		} else {
			$('.social__news-header').addClass('social__news-header_dark');
		};
		if ($('.social__news-more').hasClass('social__news-more_purple')) {
			$('.social__news-more').removeClass('social__news-more_purple');
			$('.social__news-more').addClass('social__news-more_dark');
		} else {
			$('.social__news-more').addClass('social__news-more_dark');
		};
		if ($('.social__blog-header').hasClass('social__blog-header_purple')) {
			$('.social__blog-header').removeClass('social__blog-header_purple');
			$('.social__blog-header').addClass('social__blog-header_dark');
		} else {
			$('.social__blog-header').addClass('social__blog-header_dark');
		};
		if ($('.social__lorem-header').hasClass('social__lorem-header_purple')) {
			$('.social__lorem-header').removeClass('social__lorem-header_purple');
			$('.social__lorem-header').addClass('social__lorem-header_dark');
		} else {
			$('.social__lorem-header').addClass('social__lorem-header_dark');
		};
		if ($('.social__lorem-link').hasClass('social__lorem-link_purple')) {
			$('.social__lorem-link').removeClass('social__lorem-link_purple');
			$('.social__lorem-link').addClass('social__lorem-link_dark');
		} else {
			$('.social__lorem-link').addClass('social__lorem-link_dark');
		};
		if ($('.social__blog-link').hasClass('social__blog-link_purple')) {
			$('.social__blog-link').removeClass('social__blog-link_purple');
			$('.social__blog-link').addClass('social__blog-link_dark');
		} else {
			$('.social__blog-link').addClass('social__blog-link_dark');
		};
		$('.banner__icon').removeClass('banner__icon_purple');
		$('.banner__link').removeClass('banner__link_purple');
		$('.banner__title').removeClass('banner__title_purple');
		$('.social__news-text').removeClass('social__news-text_purple');
		$('.social__news-date').removeClass('social__news-date_purple');
		$('.social__blog-cite').removeClass('social__blog-cite_purple');
		$('.social__lorem-text').removeClass('social__lorem-text_purple');
		$('.banner__subtitle').removeClass('banner__subtitle_purple');
		$('.examples__image').removeClass('examples__image_purple');
		$('.examples__zoom-icon').removeClass('examples__zoom-icon_purple');
		$('.examples__subtitle').removeClass('examples__subtitle_purple');
		$('.examples__more').removeClass('examples__more_purple');
		$('.contact').removeClass('contact_purple');
		$('.prefooter').removeClass('prefooter_purple');
		$('.prefooter__text').removeClass('prefooter__text_purple');
		$('.prefooter__button').removeClass('prefooter__button_purple');
		$('.footer').removeClass('footer_purple');
		$('.footer__copyright').removeClass('footer__copyright_purple');
	});


	$('#purple').click(function(){
		if ($('body').hasClass('dark')) {
			$('body').removeClass('dark');
			$('body').addClass('purple');
		} else {
			$('body').addClass('purple');
		};
		if ($('.header').hasClass('header_dark')) {
			$('.header').removeClass('header_dark');
			$('.header').addClass('header_purple');
		} else {
			$('.header').addClass('header_purple');
		};			
		if ($('.header__sitename').hasClass('header__sitename_dark')) {
			$('.header__sitename').removeClass('header__sitename_dark');
			$('.header__sitename').addClass('header__sitename_purple');
		} else {
			$('.header__sitename').addClass('header__sitename_purple');
		};		
		if ($('.header__menu').hasClass('header__menu_dark')) {
			$('.header__menu').removeClass('header__menu_dark');
			$('.header__menu').addClass('header__menu_purple');
		} else {
			$('.header__menu').addClass('header__menu_purple');
		};	
		if ($('.header__link').hasClass('headerlink_dark')) {
			$('.header__link').removeClass('headerlink_dark');
			$('.header__link').addClass('header__link_purple');
		} else {
			$('.header__link').addClass('header__link_purple');
		};	
		if ($('.banner__holder').hasClass('banner__holder_dark')) {
			$('.banner__holder').removeClass('banner__holder_dark');
			$('.banner__holder').addClass('banner__holder_purple');
		} else {
			$('.banner__holder').addClass('banner__holder_purple');
		};				
		$('.banner__icon').addClass('banner__icon_purple');
		$('.banner__link').addClass('banner__link_purple');
		$('.banner__title').addClass('banner__title_purple');
		$('.banner__subtitle').addClass('banner__subtitle_purple');
		if ($('.marks').hasClass('marks_dark')) {
			$('.marks').removeClass('marks_dark');
			$('.marks').addClass('marks_purple');
		} else {
			$('.marks').addClass('marks_purple');
		};
		if ($('.marks__header').hasClass('marks__header_dark')) {
			$('.marks__header').removeClass('marks__header_dark');
			$('.marks__header').addClass('marks__header_purple');
		} else {
			$('.marks__header').addClass('marks__header_purple');
		};
		if ($('.marks__icon').hasClass('marks__icon_dark')) {
			$('.marks__icon').removeClass('marks__icon_dark');
			$('.marks__icon').addClass('marks__icon_purple');
		} else {
			$('.marks__icon').addClass('marks__icon_purple');
		};
		if ($('.marks__link').hasClass('marks__link_dark')) {
			$('.marks__link').removeClass('marks__link_dark');
			$('.marks__link').addClass('marks__link_purple');
		} else {
			$('.marks__link').addClass('marks__link_purple');
		};	
		if ($('.marks__text').hasClass('marks__text_dark')) {
			$('.marks__text').removeClass('marks__text_dark');
			$('.marks__text').addClass('marks__text_purple');
		} else {
			$('.marks__text').addClass('marks__text_purple');
		};
		if ($('.owl-dots').hasClass('owl-dots_dark')) {
			$('.owl-dots').removeClass('owl-dots_dark');
			$('.owl-dots').addClass('owl-dots_purple');
		} else {
			$('.owl-dots').addClass('owl-dots_purple');
		};
		if ($('.examples').hasClass('examples_dark')) {
			$('.examples').removeClass('examples_dark');
			$('.examples').addClass('examples_purple');
		} else {
			$('.examples').addClass('examples_purple');
		};															
		$('.examples__image').addClass('examples__image_purple');
		$('.examples__zoom-icon').addClass('examples__zoom-icon_purple');
		$('.examples__subtitle').addClass('examples__subtitle_purple');
		$('.examples__more').addClass('examples__more_purple');
		$('.contact').addClass('contact_purple');
		if ($('.social__news-header').hasClass('social__news-header_dark')) {
			$('.social__news-header').removeClass('social__news-header_dark');
			$('.social__news-header').addClass('social__news-header_purple');
		} else {
			$('.social__news-header').addClass('social__news-header_purple');
		};
		if ($('.social__blog-header').hasClass('social__blog-header_dark')) {
			$('.social__blog-header').removeClass('social__blog-header_dark');
			$('.social__blog-header').addClass('social__blog-header_purple');
		} else {
			$('.social__blog-header').addClass('social__blog-header_purple');
		};
		$('.social__lorem-header').addClass('social__lorem-header_purple');
		$('.social__news-date').addClass('social__news-date_purple');
		$('.social__news-text').addClass('social__news-text_purple');
		$('.social__lorem-text').addClass('social__lorem-text_purple');
		$('.social__blog-cite').addClass('social__blog-cite_purple');
		if ($('.social__news-more').hasClass('social__news-more_dark')) {
			$('.social__news-more').removeClass('social__news-more_dark');
			$('.social__news-more').addClass('social__news-more_purple');
		} else {
			$('.social__news-more').addClass('social__news-more_purple');
		};
		if ($('.social__blog-link').hasClass('social__blog-link_dark')) {
			$('.social__blog-link').removeClass('social__blog-link_dark');
			$('.social__blog-link').addClass('social__blog-link_purple');
		} else {
			$('.social__blog-link').addClass('social__blog-link_purple');
		};
		if ($('.social__lorem-header').hasClass('social__lorem-header_dark')) {
			$('.social__lorem-header').removeClass('social__lorem-header_dark');
			$('.social__lorem-header').addClass('social__lorem-header_purple');
		} else {
			$('.social__lorem-header').addClass('social__lorem-header_purple');
		};
		if ($('.social__lorem-link').hasClass('social__lorem-link_dark')) {
			$('.social__lorem-link').removeClass('social__lorem-link_dark');
			$('.social__lorem-link').addClass('social__lorem-link_purple');
		} else {
			$('.social__lorem-link').addClass('social__lorem-link_purple');
		};
		$('.prefooter').addClass('prefooter_purple');
		$('.prefooter__text').addClass('prefooter__text_purple');
		$('.prefooter__button').addClass('prefooter__button_purple');
		$('.footer').addClass('footer_purple');
		$('.footer__copyright').addClass('footer__copyright_purple');
	});


	$('#classic').click(function(){
		$('body').toggleClass('purple dark', false);
		$('.header').toggleClass('header_purple header_dark', false);
		$('.header__sitename').toggleClass('header__sitename_purple header__sitename_dark', false);
		$('.header__menu').toggleClass('header__menu_purple header__menu_dark', false);
		$('.header__link').toggleClass('header__link_purple header__link_dark', false);
		$('.banner__holder').toggleClass('banner__holder_purple banner__holder_dark', false);
		$('.banner__icon').toggleClass('banner__icon_purple banner__icon_dark', false);
		$('.banner__link').toggleClass('banner__link_purple banner__link_dark', false);
		$('.banner__title').toggleClass('banner__title_purple banner__title_dark', false);
		$('.banner__subtitle').toggleClass('banner__subtitle_purple banner__subtitle_dark', false);
		$('.marks').toggleClass('marks_purple marks_dark', false);
		$('.marks__header').toggleClass('marks__header_purple marks__header_dark', false);
		$('.marks__icon').toggleClass('marks__icon_purple marks__icon_dark', false);
		$('.marks__link').toggleClass('marks__link_purple marks__link_dark', false);
		$('.marks__text').toggleClass('marks__text_purple marks__text_dark', false);
		$('.owl-dots').toggleClass('owl-dots_purple owl-dots_dark', false);
		$('.examples').toggleClass('examples_purple examples_dark', false);
		$('.examples__image').toggleClass('examples__image_purple examples__image_dark', false);
		$('.examples__zoom-icon').toggleClass('examples__zoom-icon_purple examples__zoom-icon_dark', false);
		$('.examples__subtitle').toggleClass('examples__subtitle_purple examples__subtitle_dark', false);
		$('.examples__more').toggleClass('examples__more_purple examples__more_dark', false);
		$('.contact').toggleClass('contact_purple contact_dark', false);
		$('.social__news-header').toggleClass('social__news-header_purple social__news-header_dark', false);
		$('.social__blog-header').toggleClass('social__blog-header_purple social__blog-header_dark', false);
		$('.social__lorem-header').toggleClass('social__lorem-header_purple social__lorem-header_dark', false);
		$('.social__news-date').toggleClass('social__news-date_purple social__news-date_dark', false);
		$('.social__news-text').toggleClass('social__news-text_purple social__news-text_dark', false);
		$('.social__lorem-text').toggleClass('social__lorem-text_purple social__lorem-text_dark', false);
		$('.social__blog-cite').toggleClass('social__blog-cite_purple social__blog-cite_dark', false);
		$('.social__news-more').toggleClass('social__news-more_purple social__news-more_dark', false);
		$('.social__blog-link').toggleClass('social__blog-link_purple social__blog-link_dark', false);
		$('.social__lorem-link').toggleClass('social__lorem-link_purple social__lorem-link_dark', false);
		$('.prefooter').toggleClass('prefooter_purple prefooter_dark', false);
		$('.prefooter__text').toggleClass('prefooter__text_purple prefooter__text_dark', false);
		$('.prefooter__button').toggleClass('prefooter__button_purple prefooter__button_dark', false);
		$('.footer').toggleClass('footer_purple footer_dark', false);
		$('.footer__copyright').toggleClass('footer__copyright_purple footer__copyright_dark', false);
	});


});


$( document ).ready(function() {

	// ---------------------- home__recommend-slider ---------------

	$('.home__recommend-slider').slick({
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		prevArrow: $('.home__recommend-controls .controls__prev'),
		nextArrow: $('.home__recommend-controls .controls__next')
	});

	// -------------------- header__nav toggle ---------------------

	$('.header-bottom__nav-btn').on('click', function () {
		$('.header-bottom__nav-btn .nav-btn').toggleClass('active');
		$('.header-bottom__nav-wrap').slideToggle();
	});

	// -------------------header-bottom__search-mobile toggle---------------

	$('.header-bottom__search-mobile').on('click', function () {
		$('.header-bottom__search').fadeToggle();
	});

	// ----------------------footer__item toggle ---------------------------

	$('.footer__item-title').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.footer__item-list').slideToggle();
	});

});
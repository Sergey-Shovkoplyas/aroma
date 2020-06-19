$( document ).ready(function() {

	// ---------------------- home__recommend-slider ---------------

	$('.home__recommend-slider').slick({
		// variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		prevArrow: $('.home__recommend-controls .controls__prev'),
		nextArrow: $('.home__recommend-controls .controls__next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
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

	// ----------------------filter toggle ---------------------------

	$('.category__filter-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.category__left').slideToggle();
	});

	// -------------------- quantity --------------------------

	$('.quantity__bnt--minus').on('click', function () {
		let $input = $(this).next('.quantity__input');
		let inputValue = $input.val();
		if (inputValue > 0) {
			inputValue--;
			$input.val(inputValue)
		}
	});

	$('.quantity__bnt--plus').on('click', function () {
		let $input = $(this).prev('.quantity__input');
		let inputValue = $input.val();
		inputValue++;
		$input.val(inputValue);

	});

	// -------------------- sidebar-bottom toggle --------------------------

	$('.user__sidebar-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.user__sidebar-bottom').slideToggle();
	});

	// -------------------- poput clode --------------------------

	$('.popup__overlay, .pupup__close').on('click', function () {
		$(this).parents('.popup').fadeOut();
	});

	// -------------------------product-slider----------------------

	$('.product-slider__main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-slider__preview'
	});

	$('.product-slider__preview').slick({
		arrows: false,
		infinite: false,
		variableWidth: true,
		slidesToScroll: 5,
		slidesToShow: 5,
		focusOnSelect: true,
		asNavFor: '.product-slider__main'
	});

	

});
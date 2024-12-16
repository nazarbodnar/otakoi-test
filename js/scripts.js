$(document).ready(function () {
	$('.bg-img').each(function () {
		if ($(this).find('> img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
		};
	});//bg-img
	$('.top-nav .btn-lang').on('click', function(){
		$(this).parent('li').toggleClass('opened');
		return false;
	}); /*dropdown-language*/


 $('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#header');

    $('.open-menu').click(function () {
        $('body').toggleClass('menu-opened');
        return false;
    });//mobile-men

	var slider = $('.slider');
	slider.slick({
		arrows: false,
		autoplay: false,
		adaptiveHeight: true
	});
	$('.slides-count').text( slider.slick("getSlick").slideCount);
	$('.btn-next').click(function () {
		slider.slick('slickNext');
		return false;
	})
	$('.btn-prev').click(function () {
		slider.slick('slickPrev');
		return false;
	})
	slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		var slideNumber;
		slideNumber = currentSlide + 1;
		$('.slide-number').text(slideNumber);
	}); /*slider*/
	$('.btn-scroll').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
	$('.btn-search').on('click', function(){
		$('body').addClass('search-opened');
	});

	$('.btn-close').on('click', function(){
		$('body').removeClass('search-opened');
	});

	$(".form-control").focus(function () {
		$(this).parent().addClass("input-focus");
	}).blur(function () {
		$(this).parent().removeClass("input-focus");
	});



	$('.same-height').matchHeight({
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	});

	
	if($(window).width() < 992){
		$('.news-block ul').slick({
			arrows:false,
			dots:true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1
		});
	}
})//ready


$(document).on('mouseup touchend',function (e) {
	var $container = $('.top-nav .lang-drop, .top-nav .btn-lang'),
	$container2 = $('.search-form, .btn-search');
	if (!$container.is(e.target) && $container.has(e.target).length === 0) {
		$('.top-nav .lang-holder').removeClass('opened');
	}
	if (!$container2.is(e.target) && $container.has(e.target).length === 0) {
		$('body').removeClass('search-opened');
	}
});


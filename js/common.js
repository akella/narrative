$(document).ready(function() {
	
	$('.user-more-arr').click(function(){
		$(this).siblings('.user-inf').fadeIn('fast');
	});

	$('input.check').css('opacity', '0').wrap("<div class='checkbox'></div>")
		.delegate($(this), 'change', function(){ $(this).attr('checked') ? $(this).parent().parent().addClass('checked') : $(this).parent().parent().removeClass('checked')});
	$('input.check:checked').parent().parent().addClass('checked');


	$('.tabs-nav li').click(function(){
		if (!($(this).hasClass('active'))) $(this).addClass('active').siblings().removeClass('active')
			.parents('.popup').find('.tabs-info').eq($(this).index()).fadeIn(300).siblings('.tabs-info').hide();
	});

	$('.post__togglesocial').click(function(){
		$(this).parent().next('.post__socials').slideToggle();
	});

	var plh = $('.search-form__input').attr('placeholder');
	$('.search-form__input').focus(function(){
		$(this).attr('placeholder','');
	});
	$('.search-form__input').blur(function(){
		$(this).attr('placeholder',plh);
	});



$('.slider').each(function(){
	show = $(this);
	prev = show.children('.slider__prev');
	next = show.children('.slider__next');
	slider = show.children('.slider__slides');
	slidecount = false;
	if(show.children('.slider__info').length>0){
		slidecount = show.children('.slider__info');
	}

	slider.cycle({
	    fx:     'scrollHorz',
	    speed:  'fast',
	    timeout: 0,
	    next: show.children('.slider__next'),
	    prev: show.children('.slider__prev'),
	    after: function (curr,next,opts) {
	    		go = $(curr).closest('.slider').children('.slider__info');
				go.html((opts.currSlide + 1) + " / " + opts.slideCount + "");
				var index = opts.currSlide;
				var $ht = $(this).height();
				//set the container's height to that of the current slide
				$(this).parent().css("height", $ht);
	    }

	});

	function onAfter(curr,next,opts) {
		  
	}

})




});

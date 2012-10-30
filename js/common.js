$(document).ready(function() {
	
	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

	$('.user-more-arr').click(function(){
		$(this).siblings('.user-inf_popup').fadeToggle('fast');
	});

	$('html').click(function(e) {
		if($('.user-inf_popup').is(":visible")){ 
			if (e.target.class != 'user-inf_popup' && $(e.target).parents('.user-inf_popup').length == 0) {
				$('.user-inf_popup').fadeOut();
			}
		}

		if ($('.icon_comments').hasClass("icon_active")){
			if (e.target.class != 'notif' && e.target.class != 'icon_comments' && $(e.target).parents('.notif').length == 0) {
				$('.notif').fadeOut();
				$('.icon_comments').removeClass('icon_active');
			}
		}
	});

	if ($('.popup').exists()){
		var win = $(window);
		var popup = $('.popup');
		var w = win.height();
		var p = popup.height() + parseInt(popup.css('top'));
		$(window).resize(function(){
			w = win.height();
			if (w >= p){
				popup.css('position','fixed');
			}
			else{
				popup.css('position','absolute');
				win.scroll(function(){
				var wst = win.scrollTop();
					if(wst + w >= p+30){ 
					popup.css('position','fixed').addClass('popup_bottom');
				}
				else{
					popup.css('position','absolute').removeClass('popup_bottom');
				}
				});
			}
		});

		if (w >= p){
			popup.css('position','fixed');
		}
		else{
			popup.css('position','absolute');
			win.scroll(function(){
			var wst = win.scrollTop();
				if(wst + w >= p+30){ 
					popup.css('position','fixed').addClass('popup_bottom');
				}
				else{
					popup.css('position','absolute').removeClass('popup_bottom');
				}
			});
		}
	};


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

	$('.icon_comments').click(function(){
		var notif = $('.notif')
		if ($(this).hasClass('icon_active')){
			notif.fadeOut('fast');
			notif.find('.mess__author').removeClass('notif_animation');
			notif.find('.mess-list__arr').removeClass('notif_animation');
			$(this).removeClass('icon_active');
		}
		else{
			notif.fadeIn('fast');
			notif.find('.mess__author').addClass('notif_animation');
			notif.find('.mess-list__arr').addClass('notif_animation');
			$(this).addClass('icon_active');
		}
		
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

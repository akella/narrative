$(document).ready(function() {
	


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

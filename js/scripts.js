$(document).ready(function() {	

	// Scroll to Top
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 550);
		return false;
	});
	
	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});


	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
		if(upto > 50) {
			jQuery('.nav-area').addClass('navfixed')
			jQuery('.container-box').addClass('container')
		}else {
			jQuery('.nav-area').removeClass('navfixed')
			jQuery('.container-box').removeClass('container')
		}
	});


	jQuery("#carousel").owlCarousel({
		// autoplay: true,
		rewind: true,
		margin: 30,
		loop: true,
		responsiveClass: true,
		autoHeight: true,
		autoplayTimeout: 7000,
		smartSpeed: 800,
		nav: false,
		dots: true,
		responsive: {
		  0: {
			items: 1
		  },
		  576: {
			items: 2,
		  },
		  768: {
			items: 3
		  },
	  
		  1024: {
			items: 4
		  },
	  
		  1366: {
			items: 4
		  }
		}
	  });


		//custom accordion
		jQuery(".accordion-title").click(function() {
			if ($(this).hasClass("active")) {
		      	$(this).removeClass("active").next().slideUp();
		    } else {
		      	$(".accordion-title").next().slideUp();
		      	$(".accordion-title").removeClass("active");
		      	$(this).addClass("active").next().slideDown();
		    }
		    return false;
		});

		


	  AOS.init({
		offset: 120,
		delay: 0,
		duration: 1600,
		easing: 'ease',
		once: true,
		mirror: false,
		anchorPlacement: 'top-bottom'
	});

	jQuery('select').niceSelect();
	
		
});

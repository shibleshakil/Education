/*
Author       : Theme_Ocean.
Template Name: Bornomala - Kindergarten & School HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});		
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

		/* START PORTFOLIO JS */
			jQuery('.grid').mixitup({
			targetSelector: '.mix',
			});
			$('.image-popup').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-img-mobile',
				image: {
					verticalFit: true
				}
			});
		/* END PORTFOLIO JS */

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/*START SLIDER JS*/
			$('.carousel').carousel({
				interval:8000,
				pause:'false',
			});
		/*END SLIDER JS*/	
			
	}); 			
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  


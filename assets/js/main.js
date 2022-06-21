$(document).ready(function() {
	// Portfolio slider
	$("#owl-demo").owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:true
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	});

	// Partners slider
	$("#owl-demo2").owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
	    nav: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:false,
	            loop:false
	        }
	    }
	});

	// Accordion

	$(".single-acco h3").click(function(){
	  if($(this).next(".accodion-body").hasClass("active")){
	    $(this).next(".accodion-body").removeClass("active").slideUp();
	    $(this).children("span").html('+');		
	  }
	  else{
	    $(".accodion-body").removeClass("active").slideUp();
	    $(".single-acco h3 span").html('+');

	    $(this).next(".accodion-body").addClass("active").slideDown();
	    $(this).children("span").html('-');
	  }
	})

	// Navigation toggle
	$('.hamburger').on('click', function() {
		$('header nav .main_nav').toggle('blind');
	})

	// Scroll to top
	var btn = $('#button');
	$(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
	    btn.addClass('show');
	  } else {
	    btn.removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});
});
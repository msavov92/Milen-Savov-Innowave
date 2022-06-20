$(document).ready(function() {
	// Portfolio slider
	$('.owl-carousel').owlCarousel({
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
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true,
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
});
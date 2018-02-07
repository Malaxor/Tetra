
//=====================================================
// SERVICES SECTION
//=====================================================


// animte on scroll
new WOW().init();


//=====================================================
// WORK SECTION
//=====================================================


$("#work").magnificPopup({
	
	delegate: "a", // child items selector. by clicking it, popup will open
	type: "image",
	gallery: {
		enabled: true
	}
});

//=====================================================
// TEAM SECTION
//=====================================================

$("#team-members").owlCarousel({
	items: 3,
	autoplay: true,
	autoplayHoverPause: true,
	smartSpeed: 700,
	loop: true
})

//=====================================================
// TESTIMONIALS SECTION
//=====================================================

$("#customers-testimonials").owlCarousel({
	items: 1,
	autoplay: true,
	autoplayHoverPause: true,
	smartSpeed: 700,
	loop: true
})

//=====================================================
// STATS SECTION
//=====================================================

$(".counter").counterUp({

	delay: 10,
	time: 2000
});

//=====================================================
// STATS SECTION
//=====================================================

$("#clients-list").owlCarousel({
	items: 6,
	autoplay: true,
	autoplayHoverPause: true,
	smartSpeed: 700,
	loop: true,
	responsive : {
	    // breakpoint from 0 up
	    0 : {
	    	items: 1
	    },
	    // breakpoint from 480 up
	    480 : {
	    	items: 3
	    },
	    // breakpoint from 768 up
	    768 : {
	    	items: 5
	    },
	    // breakpoint from 992 up
	    992 : {
	    	items: 6
	    }
	} 
});

//=====================================================
// NAVIGATION
//=====================================================
// Show/Hide transparent black navi
$(window).scroll(function() {

	if($(this).scrollTop() < 50) {

		$("nav").removeClass("custom-nav");
		// hide btn-back-to-top
		$("#back-to-top").fadeOut();
	}
	else {

		$("nav").addClass("custom-nav");
		$("#back-to-top").fadeIn();
	}
});	

// smooth scrolling
$("a.smooth-scroll").click(function(event) {

	event.preventDefault();

	var section = $(this).attr("href");

	$("html, body").animate({

		scrollTop: $(section).offset().top -65
	},1250, "easeInOutExpo");
});


// close mobile menu on section click
$(".navbar-collapse ul li a").on("click touch", function() {

	$(".navbar-toggle").click();
});



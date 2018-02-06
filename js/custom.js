
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
	loop: true
})

//=====================================================
// NAVIGATION
//=====================================================
// Show/Hide transparent black navi
$(window).scroll(function() {

	if($(this).scrollTop() < 50) {

		$("nav").removeClass("custom-nav");
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




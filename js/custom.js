
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

$("#team-members").owlCarousel();




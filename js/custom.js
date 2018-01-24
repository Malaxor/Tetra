//=====================================================
// SERVICES SECTION
//=====================================================

$(function() {

	// animte on scroll
	new WOW().init();
});

//=====================================================
// WORK SECTION
//=====================================================

$(function () {

	$("#work").magnificPopup({

		delegate: "a", // child items selector. by clicking it, popup will open
		type: "image",
		gallery: {
			enabled: true
		}
	});

});
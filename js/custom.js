//=====================================================
// SERVICES SECTION
//=====================================================

$(function () {

	// animte on scroll
	new WOW().init();
});


//=====================================================
// WORK SECTION
//=====================================================

$(function () {

	$("#work").magnificPopup({

		delegate: "a", // child items selector. by clicking on it popup will open
		type: "image"
	});

});

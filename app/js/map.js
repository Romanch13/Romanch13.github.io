jQuery(function($) {
 $("#google-map .map-heading").click(function(){
		$("#google-map").toggleClass("showMap");
		$(this).find(".text1").toggle();
	});
});
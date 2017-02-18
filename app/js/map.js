jQuery(function($) {
 $("#google-map .map-heading").click(function(){
		$("#google-map").toggleClass("showMap");
		$(this).find(".text2").toggle();
	});
});
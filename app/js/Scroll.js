//ScrollSectionPageId
$(document).ready(function(){
		$('nav a[href^="#"]').click(function () { 
 				elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top - 50;
				{
				$('body,html').animate( { scrollTop: destination }, 1500);
				} 
				return false;
		   });
});
//scrollToTop
$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() > 600) {
			$('#toTop').fadeIn();
				} else {
			$('#toTop').fadeOut();
				}
			});
			$('#toTop').click(function() {
			$('body,html').animate({scrollTop:0},1000);
			return false;
		});
	});


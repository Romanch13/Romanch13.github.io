//menu2
	$(document).ready(function() {
  
	$(".nav a").mPageScroll2id({
		offset : 50,
		scrollSpeed: 1500,
	
		
	});
		

});

//scrollToTop
$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() > 600) {
			$('.top').fadeIn();
				} else {
			$('.top').fadeOut();
				}
			});
			$('.top').click(function() {
			$('body,html').animate({scrollTop:0},1000);
			return false;
		});

	
	});

//Меню jquery
$(document).ready(function(){
//menu
			var touch = $('#touch-menu');
		    var menu = $('.nav');
		 
		    $(touch).on('click', function(e){
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 768 && menu.is(':hidden')){
		            menu.removeAttr('style');
		        }
		    });
		$('.wrapper>.prokrutka').not(':first-of-type').hide();
  		$('.wrapper>h1').click(function() {
    
    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.wrapper');
    
    if (findArticle.is(':visible')) {
      findArticle.slideUp('fast');
    }
    else {
      findWrapper.find('>.prokrutka').slideUp('fast');
      findArticle.slideDown('fast');
    }
  });
		
		});

//картинки  
$(document).ready(function(){

	$(".item").magnificPopup({
		type : 'image',
		gallery : {
		  enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$(".item-about").magnificPopup({
		type : 'image',
		gallery : {
		  enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$(".item-brand").magnificPopup({
		type : 'image',
		gallery : {
		  enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$(".item-inst").magnificPopup({
		type : 'image',
		gallery : {
		  enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
});



//accordeon
	$(document).ready(function() {
  
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
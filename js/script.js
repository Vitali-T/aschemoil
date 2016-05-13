function show(){
		var menu = document.getElementById("small_menu");
		if(menu.style.display == "none"){
			menu.style.display = "initial";
			}
		else
			menu.style.display = "none";
	}
    
	
    
$(document).ready(function() {
	$('.scroll').click(function() {
		if($(this).find('p').css('display') == 'none'){
			$(this).find('p, .btn').css('display','block');
			$('html,body').animate({
			scrollTop:$(document).scrollTop()+180},500);
	}

		else{
			$(this).find('p, .btn').css('display','none');
		}
	
});

$(document).scroll(function() {
  var dHeight = $(this).height()-$(window).height();
  if (dHeight >= $(this).scrollTop()) {
    $('nav').css('background', 'rgba(130, 130, 130, ' + ($(this).scrollTop() / dHeight + 0.7) + ')');
  }
});

//make carousel rotate automatically
setInterval(function() { $("#carousel").Carousel3d('next') }, 4000);
});

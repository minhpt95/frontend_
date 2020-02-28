
var owl = $('.owl-carousel');
owl.owlCarousel({
	// margin: 10,
	loop: true,
	responsive: {
	  	0: {
	    	items: 1
	  	},
	},
    autoplay:true,
    autoplayTimeout:5000,
})
$(document).ready(function(){
  	$('.owl-carousel').owlCarousel();
});

$('#open_menu').on('click', function(){
	if (screen.width > 768) {
		$('.menu1').toggleClass('block');
	}else{
		$('.menu2').toggleClass('block');
	}
})
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});



























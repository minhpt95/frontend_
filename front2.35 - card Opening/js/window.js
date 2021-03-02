AOS.init();
var stickyNav = $('body').offset().top;
window.onscroll = function() {
    NavFixed();
};
function NavFixed() {
    let scroll = window.pageYOffset > stickyNav ? true : false;
    if (scroll) {
	    $('header').addClass('is-scroll')
    }else{
    	$('header').removeClass('is-scroll')
    }
}


// OWL carousel
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    stagePadding: 50,
    	margin: 20,
	    loop:true,
	    nav:true,
	    autoWidth: false,
	    items: 3,
	    lazyLoad: true,
	    responsive:{
	        360:{
	            items: 1
	        },
	        375:{
	            items: 1
	        },
	        768:{
	            items: 2
	        },
	        1200:{
	            items: 3
	        }
	    }
	})
	//  count carousel image
	var item_count = $('.carousel_item').length - 6;
	var key = $('.carousel_item.is-select').find('img').attr('key')
	$('.count_image').html(key)
	// render carousel image
	for (var i = 1 ; i <= item_count; i++) {
		$('.I-carousel').append('<div class="carousel-image"> <img src="' + $('.carousel_item').eq(i+2).find('img').attr('src') + '" alt=""> </div>')
	}
	$('.carousel-image').eq(key-1).addClass('is-select')

	$('.content_wrapper').append('<h3 data-aos="fade-down">' + $('.carousel_item.active').find('.title').html() + '</h3>')
	$('.content_wrapper').append('<h1 data-aos="fade-right">' + $('.carousel_item.active').find('.content').html() + '</h1>')
	$('.content_wrapper').append('<p data-aos="fade-up">' + $('.carousel_item.active').find('.detail').html() + '</p>')
	$('.content_wrapper').append('<a href="' + $('.carousel_item.active').find('.link').html() + '" data-aos="fade-left">Book Tour</a>')
	
	
	$('.carousel_item').on('click', function(){
		key = $(this).find('img').attr('key');
		percen = ( 100 / item_count * key )
		$('.carousel-image').removeClass('is-select')
		$('.carousel-image').eq(key-1).addClass('is-select')

		//  thay đổi data
		$('.content_wrapper').find('h3').remove()
		$('.content_wrapper').find('h1').remove()
		$('.content_wrapper').find('p').remove()
		$('.content_wrapper').find('a').remove()
		$('.content_wrapper').append('<h3 data-aos="fade-down">' + $(this).find('.title').html() + '</h3>')
		$('.content_wrapper').append('<h1 data-aos="fade-right">' + $(this).find('.content').html() + '</h1>')
		$('.content_wrapper').append('<p data-aos="fade-up">' + $(this).find('.detail').html() + '</p>')
		$('.content_wrapper').append('<a href="' + $(this).find('.link').html() + '" data-aos="fade-left">Book Tour</a>')

		$('.count_image').html(key)
		$('.line_count').css({
			'width' : percen + '%'
		})
	})
});


// open bar
$('.open-bar').on('click', function(){
	$('.I-header').toggleClass('is-open')
})








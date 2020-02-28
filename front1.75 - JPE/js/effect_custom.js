if (screen.width < 769) {
	$('.language').on('click', function(){
		$('.language-nav-respontitle').toggleClass('is-active');
		$('.language').toggleClass('is-active');
		$('.open_listmenu').removeClass('is-active');
		$('.menu').removeClass('is-active');
		// $('main').removeClass('is-active');
	})
	$('.open_listmenu').on('click', function(){
		$('.menu').toggleClass('is-active');
		$('.open_listmenu').toggleClass('is-active');
		$('.language').removeClass('is-active');
		$('.language-nav-respontitle').removeClass('is-active');
		// $('main').toggleClass('is-active');
	})


}
if (screen.width > 768) {
	$('.open_search_form').on('click', function(){
		$('.open_search_form').toggleClass('is-active');
		$('.large_search').toggleClass('is-active');
	})
}


$('.movie-header-title__jp').on('click', function(){
	$('iframe').attr('src', 'https://www.youtube.com/embed/P_tZjTVfyTc')
	// $('iframe').attr('src', 'https://www.youtube.com/embed/czEH0MJdGII')
})



$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:50,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
  	responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 100
        },
        800:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
})






























































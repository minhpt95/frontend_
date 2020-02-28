if (screen.width > 768) {
	var sticky = $('header').offset().top;
	$(window).scroll(function(){
		if (window.pageYOffset > sticky) {
			$('header').css({
				'height': '150px',
			})
			$('.telephone').css({
				'height': '40px',
			})
			$('.main').css({
				'height': '70px',
			})
			$('nav').css({
				'height': '40px',
			})
	  	} else {
			$('header').css({
				'height': '200px',
			})
			$('.telephone').css({
				'height': '50px',
			})
			$('.main').css({
				'height': '100px',
			})
			$('nav').css({
				'height': '50px',
			})
	  	}
	})
}
$(".chosen-select").chosen({
	allow_single_deselect: true,
	width: '100%',
  	no_results_text: "Không tìm thấy kết quả :"
})
$('.open_menu').on('click', function(){
	$('nav').toggleClass('active');
	$('.close_nav').toggleClass('active');
})
$('.close_nav').on('click', function(){
	$('nav').toggleClass('active');
	$('.close_nav').toggleClass('active');
})

$('.open_search').on('click', function(){
	$('.search').toggleClass('active');
	$('nav').removeClass('active');
	$('.close_nav').removeClass('active');
})
$('.close_search').on('click', function(){
	$('.search').toggleClass('active');
})










































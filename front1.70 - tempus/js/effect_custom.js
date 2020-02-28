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
































$('.menu-toggle').on('click', function(){
	$('.I-sidebar').toggleClass('is-open')
})
$('.close_nav').on('click', function(){
	$('.I-sidebar').toggleClass('is-open')
})
$('.open_submenu').on('click', function(){
	if ($(this).parent().hasClass('is-open')) {
		$(this).parent().removeClass('is-open')
	}else{
		$(this).parent().parent().find('.sub_menu').removeClass('is-open')
		$(this).parent().addClass('is-open')
	}
})



$('.open_info').on('click', function(){
	$('.info').toggleClass('is-open')
})
$('.open_sidebar').on('click', function(){
	if ($('aside').hasClass('is-open')) {
		$('aside').removeClass('is-open')
	}else{
		$('aside').addClass('is-open')
	}
})
$('.close_aside').on('click', function(){
	$('aside').removeClass('is-open')
})



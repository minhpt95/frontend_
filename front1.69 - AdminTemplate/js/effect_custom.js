$('.control_nav').on('click', function(){
	$('nav').toggleClass('active');
	$('.control_nav').toggleClass('active');
	$('.main_in').toggleClass('active');
	$('.close_nav').toggleClass('active');
	$('.content').toggleClass('active');
	$('.linkmenu').toggleClass('active');
	$('.itemmenu').toggleClass('active');
})
$('.close_nav').on('click', function(){
	$('nav').toggleClass('active');
	$('.control_nav').toggleClass('active');
	$('.main_in').toggleClass('active');
	$('.close_nav').toggleClass('active');
	$('.content').toggleClass('active');
	$('.linkmenu').toggleClass('active');
	$('.itemmenu').toggleClass('active');
})
$('.linkmenu').on('click', function(){
	if ($(this).hasClass('open')) {
		$('.linkmenu').removeClass('open');
		$('.itemmenu').removeClass('open');
	}else{
		$('.linkmenu').removeClass('open');
		$('.itemmenu').removeClass('open');
		$(this).toggleClass('open');
		$(this).parent().toggleClass('open');
	}
})





































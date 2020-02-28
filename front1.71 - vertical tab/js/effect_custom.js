$('.item_menu').on('click', function(){
	$('.item_menu').removeClass('active');
	$(this).addClass('active');
	$('.main_item').removeClass('active');
	$('.main_item').eq($(this).index()).addClass('active');
})
















































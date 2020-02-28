

var list_item_height;
function setup(){
	if ($(window).width() < 991) {
		list_item_height = ($('.sub_list_item').find('.task').find('.item').width() + 60 + 20 + 40) * 4;
	}else{
		list_item_height = ($('.sub_list_item').find('.task').find('.item').width() + 60 + 20) * 2;
	}
	$('.list_item').css({
		'height' : list_item_height
	})
}
setup();


var item_height = $('.sub_list_item').find('.image').width();
$('.sub_list_item').find('.image').css({
	'height' : item_height
})

$('.open_menu').on('click', function(){
	$('header').find('.menu').toggleClass('showMenu');
})

$('.image:eq(0)').on('click', function(){
	$('.choose_item').css({
		'left' : '10%'
	})
	$('.sub_list_item').css({
		'left' : '0%'
	})
})
$('.image:eq(1)').on('click', function(){
	$('.choose_item').css({
		'left' : '35%'
	})
	$('.sub_list_item').css({
		'left' : '-100%'
	})
})
$('.image:eq(2)').on('click', function(){
	$('.choose_item').css({
		'left' : '61%'
	})
	$('.sub_list_item').css({
		'left' : '-200%'
	})
})
$('.image:eq(3)').on('click', function(){
	$('.choose_item').css({
		'left' : '87%'
	})
	$('.sub_list_item').css({
		'left' : '-300%'
	})
})
$('.image').on('click', function(){
	$('.attr_shoes').removeClass('active');
	$(this).find('.attr_shoes').addClass('active');
})















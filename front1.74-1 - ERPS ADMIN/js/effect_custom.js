$('.content-form').css({
	'left': '100%'
})
$('.content-form').eq(0).css({
	'left': '0'
})

$('.page1').find('.forgotpassword').find('a').on('click', function(){
	$('.content-form').eq(0).css({
		'left': '-100%',
		'z-index': '1',
	})
	$('.content-form').eq(1).css({
		'left': '0',
		'z-index': '2',
	})
})
$('.page2').find('.titleform-back').on('click', function(){
	$('.content-form').eq(1).css({
		'left': '100%',
		'z-index': '1',
	})
	$('.content-form').eq(0).css({
		'left': '0',
		'z-index': '2',
	})
})
$('.page2').find('.forgotpassword').on('click', function(){
	$('.content-form').eq(1).css({
		'left': '-100%',
		'z-index': '1',
	})
	$('.content-form').eq(2).css({
		'left': '0',
		'z-index': '2',
	})
})
$('.page3').find('.titleform-back').on('click', function(){
	$('.content-form').eq(2).css({
		'left': '100%',
		'z-index': '1',
	})
	$('.content-form').eq(1).css({
		'left': '0',
		'z-index': '2',
	})
})
$('.page3').find('.modification-password').on('click', function(){
	$('.content-form').eq(2).css({
		'left': '-100%',
		'z-index': '1',
	})
	$('.content-form').eq(3).css({
		'left': '0',
		'z-index': '2',
	})
})
$('.page4').find('.titleform-back').on('click', function(){
	$('.content-form').eq(3).css({
		'left': '100%',
		'z-index': '1',
	})
	$('.content-form').eq(2).css({
		'left': '0',
		'z-index': '2',
	})
})
$('.page4').find('.edit-password').on('click', function(){
	$('.content-form').eq(3).css({
		'left': '-100%',
		'z-index': '1',
	})
	$('.content-form').eq(4).css({
		'left': '0',
		'z-index': '2',
	})
})
$('.page5').find('.goto-login').on('click', function(){
	$('.content-form').eq(0).css({
		'left': '0',
		'z-index': '2',
	})
	$('.content-form').eq(1).css({
		'left': '100%',
		'z-index': '1',
	})
	$('.content-form').eq(2).css({
		'left': '100%',
		'z-index': '1',
	})
	$('.content-form').eq(3).css({
		'left': '100%',
		'z-index': '1',
	})
	$('.content-form').eq(4).css({
		'left': '100%',
		'z-index': '1',
	})
})




















































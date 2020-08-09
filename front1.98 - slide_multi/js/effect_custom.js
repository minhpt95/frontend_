var size = $('.sub_image').length

// for (var i = 0; i < size; i++) {
// 	var X = 20 * i;
// 	var index = i - size;
// 	$('.sub_image').eq(i).css({
// 		'transform': 'translateX('+X+'%)',
// 		'z-index'	: index
// 	})
// }

$('.I-carousel').on('click', function(){
	$('.sub_image').toggleClass('active')
})
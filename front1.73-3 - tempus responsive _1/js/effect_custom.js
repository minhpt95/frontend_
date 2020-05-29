$('.open_nav_wrapper').on('click', function(){
	$('.nav_wrapper').toggleClass('is-open')
})
$('.I-stone_list').find('.I-stone').on('click', function(){
	var index = $(this).index()
	var parent = $(this).parent().parent()
	if(parent.find('.I-detail_stone').eq(index).hasClass('is-open')){
		parent.find('.I-detail_stone').eq(index).removeClass('is-open')
		$(this).removeClass('is-open')
		parent.find('.I-stone').find('.name_stone').removeClass('is-close')
		parent.find('.I-stone').find('.detail_stone').removeClass('is-close')
	}else{
		parent.find('.I-detail_stone').removeClass('is-open')
		parent.find('.I-detail_stone').eq(index).addClass('is-open')
		$('.I-stone').removeClass('is-open')
		$(this).addClass('is-open')
		parent.find('.I-stone').find('.name_stone').removeClass('is-close')
		parent.find('.I-stone').find('.detail_stone').removeClass('is-close')
		parent.find('.I-stone').find('.name_stone').addClass('is-close')
		parent.find('.I-stone').find('.detail_stone').addClass('is-close')
	}
	// parent.find('.I-stone').find('.name_stone').removeClass('is-close')
	// parent.find('.I-stone').find('.detail_stone').removeClass('is-close')
	// parent.find('.I-stone').find('.name_stone').addClass('is-close')
	// parent.find('.I-stone').find('.detail_stone').addClass('is-close')
})
$('.I-stone_respon').find('.I-stone').on('click', function(){
	if($(this).hasClass('is-open')){
		$(this).removeClass('is-open')
	}else{
		$('.I-stone').removeClass('is-open')
		$(this).addClass('is-open')
	}
})











































$(".chosen-select").chosen({
	allow_single_deselect: true,
	width: '100%',
  	no_results_text: "Không tìm thấy kết quả :"
})
$('.search-respon').on('click', function(){
	$('.I-header').find('.search').toggleClass('is-active')
})
$('.menu-respon').on('click', function(){
	$('.I-header').find('.menu').toggleClass('is-active')
	$(this).toggleClass('is-active')
})
$('.I-stoneitem').find('.item').on('click', function(){
	if ($(this).hasClass('is-select')) {
		$(this).removeClass('is-select')
	}else{
		$('.item').removeClass('is-select')
		$(this).addClass('is-select')
	}
})
//////////////// stone item








































$('.I-header').find('.input_wrapper').find('input').on('focusin', function(){
    $('.I-header').find('.action_wrapper').addClass('is-open')
})
$('.I-header').find('.input_wrapper').find('input').on('focusout', function(){
    $('.I-header').find('.action_wrapper').removeClass('is-open')
})
$('.menu_button').on('click', function(){
	$('.I-main').toggleClass('side-open')
})

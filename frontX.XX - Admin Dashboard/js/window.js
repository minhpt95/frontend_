$("input:checked").parent().find('label').addClass('is-checked')
$(".input-checkbox").on('click', function(){
	$(this).toggleClass('is-checked')
})
$('.nav-control').on('click', function(){
	$('.logo-full').toggleClass('show')
	$('.logo-sub').toggleClass('show')
	$('header').toggleClass('is-sub')
	$('nav').toggleClass('is-sub')
	$('.navigation-item').toggleClass('align-center')
	$('.navigation-item').toggleClass('align-justify-center')
	$('.panel-main').toggleClass('is-open')
})
$('.bar-value').each(function( index ) {
  	$(this).css({
  		'width' : $(this).attr('value') + '%'
  	})
});
$('.item-bar-value').each(function( index ) {
  	$(this).css({
  		'height' : $(this).attr('value') + '%'
  	})
});





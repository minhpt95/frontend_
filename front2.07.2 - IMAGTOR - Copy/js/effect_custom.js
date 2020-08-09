
$('.control_aside').on('click', function(){
    $('.I-aside').toggleClass('is-close')
    $('.I-content').toggleClass('is-open')
    $('.I-data').toggleClass('is-open')
})

$('.tCol.checkbox').find('label').on('click', function(){
	if($(this).parent().find('input').prop("checked") == false){
		$(this).parent().find('input').prop("checked", true)
		$(this).find('.circle').addClass('is-active')
	}else{
		$(this).parent().find('input').prop("checked", false)
		$(this).find('.circle').removeClass('is-active')
	}
})
$('.notification').on('click', function(){
    $(this).toggleClass('is-select')
    $('.I-notification').toggleClass('is-open')
})
$('.select_wrapper').on('click', function(){
    $(this).find('.select_list').toggleClass('is-open')
    $(this).find('.icon').toggleClass('is-open')
})

$('.component_bottom').each(function( index ) {
	var parent = $(this)
  	parent.find('select').each(function( index ) {
  		var chill = $(this)
	  	$(this).find("option").each(function( index ) {
	  		var html = $(this).html()
		  	chill.parent().find('.select_list').append(
		  		'<div class="select_item">'+
					html +
				'</div>'
		  	)
		})
	})
	$('.select_item').on('click', function(){
		var word = $(this).html();
		$(this).parent().parent().find('.select_title').html(word)
	    // console.log(word)
	})
})
$(function () {
  	$('[data-toggle="tooltip"]').tooltip()
})
$('.control_aside').on('click', function(){
	$('main').toggleClass('open_aside')
	$('.control_aside').find('i').toggleClass('fa-arrow-left')
	$('.control_aside').find('i').toggleClass('fa-arrow-right')
})
$('section.content').on('click', function(){
	if ($('main').hasClass('open_aside')) {
		$('main').toggleClass('open_aside')
		$('.control_aside').find('i').toggleClass('fa-arrow-left')
		$('.control_aside').find('i').toggleClass('fa-arrow-right')
	}
})
$(".chosen-select").chosen({
	width: '100%',
  	no_results_text: "Không tìm thấy kết quả :"
})





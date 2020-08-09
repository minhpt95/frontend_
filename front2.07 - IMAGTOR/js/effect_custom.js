
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

$('.I-content').find('button').on('mousedown', function(){
	$(this).addClass('on-click')
})
$('.I-content').find('button').on('mouseup', function(){
	$(this).removeClass('on-click')
})







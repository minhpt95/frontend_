var item_search_li = $('.I-store_index').find('.sidebar_item').find('.item-content').find('li')
var item_search_li_modal = $('#search_guild-modal').find('.main_modal').find('li')


// Custom toggle button
$('.toggle-button').find('input').css({ 'display': 'none' })
$('.toggle-button.single_button').find('.tg-btn').on('click', function() {
    $(this).toggleClass('active')
})
$('.toggle-button').find('.tg-btn').on('click', function() {
})
$('.toggle-button').on('mouseenter', function() {
    if ($(this).find('.tg-btn').hasClass('active')) {
        $(this).find('.tg-btn').addClass('remove');
    } else {
        $(this).find('.tg-btn').addClass('select');
    }
})
$('.toggle-button').on('mouseleave', function() {
    $(this).find('.tg-btn').removeClass('remove');
    $(this).find('.tg-btn').removeClass('select');
})

// action select toggle button
$('.toggle-button').find('.tg-btn').on('click', function(){
	// console.log($(this))
	$('.'+$(this).parent().attr('data-name')).toggleClass('active')
	if (!$(this).hasClass('active')) {
		$('.list_selected_item').find('#'+$(this).parent().attr('data-name')).parent().parent().remove();
	}else{
		$('.list_selected_item').append(
			'<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 custom-pd">'+
				'<div class="item-selected">'+
					'<div class="text">'+
						$(this).text() +
					'</div>'+
					'<div class="remove_item" id="'+ $(this).parent().attr('data-name') +'"">'+
						'<img src="images/icon_48.png">'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$('#'+$(this).parent().attr('data-name')).on('click', function(){
			$('.'+$(this).attr('id')).removeClass('active');
			$(this).parent().parent().remove();
			count_search_index();
		})
	}
	count_search_index()
})


// open sidebar
$('.I-store_index').find('.sidebar_item').find('.item-title').on('click', function(){
	$(this).parent().toggleClass('is-select')
})
$('#search_guild-modal').on('mouseenter', function(){
	count_search_index()
})
$('.reset_button').on('click', function(){
	$('.toggle-button').find('.tg-btn').removeClass('active')
	$('.list_selected_item').find('.custom-pd').remove()
	count_search_index()
})
$('.action-reset').on('click', function(){
	$('.toggle-button').find('.tg-btn').removeClass('active')
	$('.list_selected_item').find('.custom-pd').remove()
	count_search_index()
})

function count_search_index(){
	var count = $('.I-store_index').find('.sidebar_menu').find('.active').length
	var count2 = $('#search_guild-modal').find('.main_modal').find('.active').length
	console.log('count = ' + count)
	if (count == 0 && count2  == 0) {
		$('.none-object').addClass('active')
		$('.have-object').removeClass('active')
		$('.search_button').removeClass('active')
		$('.I-store_index').find('.store_index').addClass('is-active')
		$('.I-store_index').find('.store_list').removeClass('is-active')
	}else{
		$('.none-object').removeClass('active')
		$('.have-object').addClass('active')
		$('.search_button').addClass('active')
		$('.I-store_index').find('.store_index').removeClass('is-active')
		$('.I-store_index').find('.store_list').addClass('is-active')
		// return count
		$('#search_guild-modal').find('.action_modal').find('.text').find('.count').text("12345");
	}
}

// open Navbar User
$('.wrapper-nav-user').on('click', function(){
	$(this).parent().toggleClass('is-open')
	$('.navibar-nav-notification').removeClass('is-open')
})
$('.information-header-close').on('click', function(){
	$('.navibar-nav-user').removeClass('is-open')
	$('.navibar-nav-notification').removeClass('is-open')
})
$('.wrapper-nav-notification').on('click', function(){
	$(this).parent().toggleClass('is-open')
	$('.navibar-nav-user').removeClass('is-open')
})
$('.remove-item').on('click', function(){
	$(this).parent().parent().addClass('is-remove');
	$('.cache-item').addClass('is-removing');
	$(this).parent().remove();
})
$('.information-content-action').find('.remove').on('click', function(){
	$('.information-item').addClass('is-remove');
	$('.information-content-item').find('.item-wrapper').remove();
})

// SELECT CUSTOM
$('.select-wrapper').on('click', function(){
	$(this).toggleClass('is-open')
})
$('.custom_select').css({'display': 'none'})


$( ".custom_select" ).each(function( index ) {
  	let name = $(this).attr('select-name');
  	let text = $(this).attr('view-name');
  	$(this).next().attr('type', name).append(
	  	'<label class="" for="select-custom"><div class="text">'+text+'</div><i class="fas fa-sort-down"></i></label>'
	  	+ '<input type="hidden" id="select-custom" value="" name="' + name +'">' 
	  	+ '<div class="option-wrapper">'
	  	+ '</div>'
  	);
  	var option = []; 
  	$(this).find('option').each(function(i, selected){ 
        option[i] = $(selected).text(); 
    });
  	for (var i = 0; i < option.length; i++) {
  		$(this).parent().find('.option-wrapper').append(
			'<div class="option-item" value="' + option[i] + '">'
			+ option[i]
			+ '</div>'
  		)
  	}
  	$('.option-item').on('click', function(){
  		$(this).parent().parent().find('.text').html($(this).attr('value'))
  		$(this).parent().parent().find('input').val($(this).attr('value'))
  	})
});

// read more modal
$('.show_detail_button').on('click', function(){
	$(this).parent().parent().find('.text-wrapper').toggleClass('is-open')
	if($('.app_header_detail').find('.text-wrapper').hasClass('is-open')){
		$('.show_detail_button').find('button').html('Hide')
	}else{
		$('.show_detail_button').find('button').html('Read More')
	}
})


// show image
var drag_image = false;	// xác định đã bấm chuột
var pressY = 0;			// vị trí bấm chuột
var top_image = 0;		// vị trí hiện tại
var move_image = 0;		// khoảng cách di chuyển
var height_image = 0; 	// độ cao của hình ảnh
var min_drug = 0;		// độ di chuyển tối thiểu
var max_drug = 0;		// độ di chuyển tối đa
var value_drug = 3; 	// hệ số di chuyển
function refresh(){
	$('.wrapper_image').css({
		'top': 0
	})
	top_image = 0;
	height_image = $('.wrapper_image').height()
	min_drug = 0;
	max_drug = -(height_image - $('.image_viewer').height())
	$('.wrapper_image').css({
		'top': top_image
	})
}
refresh();
$('.slider_image').find('.item').on('click', function(){
	var source_image = $(this).find('img').attr('src');
	$('.wrapper_image').find('img').attr('src', source_image)
	refresh();
})
$('.top').on('mousedown', function(event){
	drag_image = true;
	pressY = event.pageY
	height_image = $('.wrapper_image').height()
	min_drug = 0;
	max_drug = -(height_image - $('.image_viewer').height())
})
$('.top').on('mouseup', function(){
	drag_image = false;
	pressY = 0;
	top_image = top_image + move_image;
	console.log(top_image)
	move_image = 0;
})
$('.top').on('mousemove', function(event){
	if(drag_image) {
		move_image = (event.pageY - pressY)*value_drug;
		top_now = top_image + move_image;
		if (top_now < max_drug) {
			top_now = max_drug
		}
		if (top_now > min_drug) {
			top_now = 0
		}
		move_image = top_now - top_image
		$('.wrapper_image').css({
			'top': top_now
		})
	}
})

$('.image_viewer').find('.control_prev').on('click', function(){
    $('.slider_image').trigger('prev.owl.carousel');
})
$('.image_viewer').find('.control_next').on('click', function(){
    $('.slider_image').trigger('next.owl.carousel');
})
$('.app_content_viewimage').find('.control_prev').on('click', function(){
    $('.slider_image').trigger('prev.owl.carousel');
})
$('.app_content_viewimage').find('.control_next').on('click', function(){
    $('.slider_image').trigger('next.owl.carousel');
})
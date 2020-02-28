// $('.indicators-listitem').find('li').on('click', function(){
// 	$('.indicators-listitem').find('li').removeClass('active')
// 	$(this).addClass('active')
// })

var item_search = $('.I-store_index').find('.sidebar_item').find('.item-content').find('li').find('.text')
var item_search_modal = $('#search_guild-modal').find('.main_modal').find('li').find('.text')
var item_search_li = $('.I-store_index').find('.sidebar_item').find('.item-content').find('li')
var item_search_li_modal = $('#search_guild-modal').find('.main_modal').find('li')
item_search.on('click', function(){
	var item_active = $(this).attr('control-data');
	$('.'+item_active).toggleClass('active');
	if (!$(this).parent().find('.btn').hasClass('active')) {
		$('.list_selected_item').find('#'+$(this).attr('control-data')).parent().parent().remove();
	}else{
		$('.list_selected_item').append(
			'<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 custom-pd">'+
				'<div class="item-selected">'+
					'<div class="text">'+
						$(this).text() +
					'</div>'+
					'<div class="remove_item" id="'+ $(this).attr('control-data') +'"">'+
						'<img src="images/icon_48.png">'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$('#'+$(this).attr('control-data')).on('click', function(){
			$('.'+$(this).attr('id')).removeClass('active');
			$(this).parent().parent().remove();
			count_search_index();
		})
	}
	count_search_index();
})
item_search_modal.on('click', function(){
	var item_active = $(this).attr('control-data');
	$('.'+item_active).toggleClass('active');
	if (!$(this).parent().find('.btn').hasClass('active')) {
		$('.list_selected_item').find('#'+$(this).attr('control-data')).parent().parent().remove();
	}else{
		$('.list_selected_item').append(
			'<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 custom-pd">'+
				'<div class="item-selected">'+
					'<div class="text">'+
						$(this).text() +
					'</div>'+
					'<div class="remove_item" id="'+ $(this).attr('control-data') +'"">'+
						'<img src="images/icon_48.png">'+
					'</div>'+
				'</div>'+
			'</div>'
		)
		$('#'+$(this).attr('control-data')).on('click', function(){
			$('.'+$(this).attr('id')).removeClass('active');
			$(this).parent().parent().remove();
			count_search_index();
		})
	}
	count_search_index();
})

item_search_li.on('mouseenter', function(){
	if($(this).find('.btn').hasClass('active')){
		$(this).find('.btn').addClass('remove');
	}else{
		$(this).find('.btn').addClass('select');
	}
})
item_search_li.on('mouseleave', function(){
	$(this).find('.btn').removeClass('remove');
	$(this).find('.btn').removeClass('select');
})
item_search_li_modal.on('mouseenter', function(){
	if($(this).find('.btn').hasClass('active')){
		$(this).find('.btn').addClass('remove');
	}else{
		$(this).find('.btn').addClass('select');
	}
})
item_search_li_modal.on('mouseleave', function(){
	$(this).find('.btn').removeClass('remove');
	$(this).find('.btn').removeClass('select');
})
$('.I-store_index').find('.sidebar_item').find('.item-title').on('click', function(){
	$(this).parent().toggleClass('is-select')
})
$('#search_guild-modal').on('mouseenter', function(){
	count_search_index()
})
$('.reset_button').on('click', function(){
	$('.I-store_index').find('.btn').removeClass('active')
	$('#search_guild-modal').find('.btn').removeClass('active')
	$('.list_selected_item').find('.custom-pd').remove()

	count_search_index()
})
$('.action-reset').on('click', function(){
	$('.I-store_index').find('.btn').removeClass('active')
	$('#search_guild-modal').find('.btn').removeClass('active')
	$('.list_selected_item').find('.custom-pd').remove()
	count_search_index()
})

function count_search_index(){
	var count = $('.I-store_index').find('.sidebar_menu').find('.active').length
	var count2 = $('#search_guild-modal').find('.main_modal').find('.active').length
	// console.log(count)
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


// $('.custom_select').parent().find('.select-wrapper').append(
// 	'<label class="" for="select-custom">Sort by<i class="fas fa-sort-down"></i></label>'+
// 	'<input type="hidden" id="select-custom" value="" name="' + console.log($(this).parent().find('.select-wrapper')) +'">'+
// 	'<div class="option-wrapper">'+
// 	'</div>'
// )
$('.select-wrapper').on('click', function(){
	$(this).toggleClass('is-open')
})
$('.custom_select').css({'display': 'none'})


$( ".custom_select" ).each(function( index ) {
  	let name = $(this).attr('select-name');
  	$(this).next().attr('type', name).append(
	  	'<label class="" for="select-custom"><div class="text">Sort by</div><i class="fas fa-sort-down"></i></label>'
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
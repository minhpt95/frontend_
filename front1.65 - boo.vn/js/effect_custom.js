$('.open_nav_respon').on('click', function(){
	$('.I-respon_nav').toggleClass('is-open')
})
$('.open_subnav').on('click', function(){
	$(this).parent().toggleClass('is-open')
})

$('.I-item_detail').find('.val_calc').html($('.I-item_detail').find('.value_input').val())
$('.I-item_detail').find('.down_calc').on('click', function(){
	var data = $(this).parent().find('.value_input').val()
	if (data > 1) data = data - 1;
	$(this).parent().find('.value_input').val(data)
	$(this).parent().find('.val_calc').html($(this).parent().find('.value_input').val())
})
$('.I-item_detail').find('.up_calc').on('click', function(){
	var data = $(this).parent().find('.value_input').val()
	data = data - -1;
	$(this).parent().find('.value_input').val(data)
	$(this).parent().find('.val_calc').html($(this).parent().find('.value_input').val())
})



$('.item_amount').find('.val_calc').html($('.item_amount').find('.value_input').val())
$('.item_amount').find('.down_calc').on('click', function(){
	var data = $(this).parent().find('.value_input').val()
	if (data > 1) data = data - 1;
	$(this).parent().find('.value_input').val(data)
	$(this).parent().find('.val_calc').html($(this).parent().find('.value_input').val())
})
$('.item_amount').find('.up_calc').on('click', function(){
	var data = $(this).parent().find('.value_input').val()
	data = data - -1;
	$(this).parent().find('.value_input').val(data)
	$(this).parent().find('.val_calc').html($(this).parent().find('.value_input').val())
})



$('.I-checkbox').each(function(index){
    if($(this).find('input').prop("checked")){
		$(this).parent().find('label').addClass('is-select')
	}
});
$('.I-checkbox.checkbox').find('label').on('click', function(){
	if($(this).parent().find('input').prop("checked") == false){
		$(this).addClass('is-select')
		$(this).parent().find('input').prop("checked", true)
	}else{
		$(this).parent().find('input').prop("checked", false)
		$(this).removeClass('is-select')
	}
})
$('.I-checkbox.radio').find('label').on('click', function(){
	$(this).parent().parent().parent().find('input').prop("checked", false);
	$(this).parent().parent().parent().find('label').removeClass('is-select')
	
	if($(this).parent().find('input').prop("checked") == false){
		console.log($(this))
		$(this).parent().find('input').prop("checked", true)
		$(this).addClass('is-select')
	}else{
		console.log(2)
		$(this).parent().find('input').prop("checked", false)
		$(this).removeClass('is-select')
	}
})

$('.open_cart').on('click', function(){
	$('.I-shoping_cart').toggleClass('is-open')
})
$('.close_cart').on('click', function(){
	$('.I-shoping_cart').toggleClass('is-open')
})



















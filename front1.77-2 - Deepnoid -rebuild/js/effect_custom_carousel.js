var father = $('.carousel-container')
var item_visible = 4;								// item hiển thị
var padding = 15;									// khoảng cách 2 phía giữa đối tượng
var item_count = father.find('.carousel-col').length;
// var width_wrapper = father.parent().width();
if (screen.width <=1920) {
	var width_wrapper = 1000;
}else{
	var width_wrapper = 1530;
}
var item_width = width_wrapper / item_visible;

// var item_width = 240;
var index = father.attr('index')
var jump = 4 										// bước nhảy khi chuyển slide
console.log($('.app_content').width())
father.find('.carousel-col').each(function(){
	var left = $(this).index() * item_width;
	$(this).css({
		'padding-left': padding + 'px',
		'padding-right': padding + 'px',
		'width': item_width + 'px',
		'left': left + 'px'
	})
})
$('.carousel-control_slide').find('.slide_prev').on('click', function(){
	var index = father.attr('index');
	if(index < jump){
		index = 0
		set_index(index)
	}else{
		index = father.attr('index') - jump
		set_index(index)
	}
})
$('.carousel-control_slide').find('.slide_next').on('click', function(){
	var index = father.attr('index');
	if(item_count - index - jump < jump){
		index = item_count - jump
		set_index(index)
	}else{
		index = father.attr('index') - -jump
		set_index(index)
	}
})

$('.carousel-control_item').find('.slide_prev').on('click', function(){
	var select = father.attr('select') - 1;
	var index = father.attr('index');
	if (select < 0) {
		select = 0
	}else{
		if(select < index){
			if(index < jump){
				index = 0
				set_index(index)
			}else{
				index = father.attr('index') - jump
				set_index(index)
			}
			set_item(select)
		}else{
			set_item(select)
		}
	}
})
$('.carousel-control_item').find('.slide_next').on('click', function(){
	var select = father.attr('select') - -1;
	var index = father.attr('index');
	if (select > item_count-1) {
		select = item_count-1
	}else{
		if(select >= index - -4){
			if(item_count - index - jump < jump){
				index = item_count - jump
				set_index(index)
			}else{
				index = father.attr('index') - -jump
				set_index(index)
			}
			set_item(select)
		}else{
			set_item(select)
		}
	}
})

// chọn 1 item
$('.carousel-item').on('click', function(){
	set_item($(this).parent().index())
})


function set_item(index){
	var image = $('.carousel-item').eq(index).find('img').attr('src')
	father.attr('select', index);
	$('.carousel-item').removeClass('is-active')
	$('.carousel-item').eq(index).addClass('is-active')
	$('.image_viewer').find('img').attr('src', image)
}
function set_index(index){
	father.find('.carousel-col').removeClass('is-select')
	father.find('.carousel-col').eq(index).addClass('is-select')
	var move = index * item_width * -1;
	father.attr('index', index);
	father.find('.carousel-row').css({
        'transform': 'translateX(' + move + 'px)'
    })
}

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

$('.carousel-col').on('click', function(){
	$(this).parent().parent().parent().find('.image_viewer').addClass('is-active')
})
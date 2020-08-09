var positionX = 0;
var positionY = 0;
var width = 1000;
var height = 0;
var margin = 1;
var span_width = 100;

$( document ).ready(function() {
    setup()
});

function setup(){
	height = $('.bg').height();
	// console.log(height)
	update()
}
function calc_X(X ,span_width, margin){
	return -margin - ((X-1)*span_width + margin*2*X);
}
function calc_Y(Y ,height){
	return -( height - Y )/ 2;
}

function update(){
	$('.bg').find('span').css({
		'background-size': width + 'px',
		'margin':  '0 '+margin+'px',
	})
	var span_x_01 = calc_X(1, span_width, margin)
	var span_y_01 = calc_Y(100, height)

	var span_x_02 = calc_X(2, span_width, margin)
	var span_y_02 = calc_Y(200, height)

	var span_x_03 = calc_X(3, span_width, margin)
	var span_y_03 = calc_Y(300, height)

	var span_x_04 = calc_X(4, span_width, margin)
	var span_y_04 = calc_Y(400, height)

	var span_x_05 = calc_X(5, span_width, margin)
	var span_y_05 = calc_Y(500, height)

	var span_x_06 = calc_X(6, span_width, margin)
	var span_y_06 = calc_Y(600, height)

	var span_x_07 = calc_X(7, span_width, margin)
	var span_y_07 = calc_Y(700, height)

	var span_x_08 = calc_X(8, span_width, margin)
	var span_y_08 = calc_Y(800, height)

	var span_x_09 = calc_X(9, span_width, margin)
	var span_y_09 = calc_Y(900, height)

	// console.log(span_y_01)
	$('.bg').find('span').eq(0).css({
	  	'background-position' : span_x_01 + 'px, '+ span_y_01 + 'px',
		'height' : 250 + 'px',
	})
	$('.bg').find('span').eq(1).css({
	  	'background-position' : span_x_02 + 'px, '+ span_y_02 + 'px',
		'height' : 350 + 'px',
	})
	$('.bg').find('span').eq(2).css({
	  	'background-position' : span_x_03 + 'px, '+ span_y_03 + 'px',
		'height' : 450 + 'px',
	})
	$('.bg').find('span').eq(3).css({
	  	'background-position' : span_x_04 + 'px, '+ span_y_04 + 'px',
		'height' : 550 + 'px',
	})
	$('.bg').find('span').eq(4).css({
	  	'background-position' : span_x_05 + 'px, '+ span_y_05 + 'px',
		'height' : 650 + 'px',
	})
	$('.bg').find('span').eq(5).css({
	  	'background-position' : span_x_06 + 'px, '+ span_y_06 + 'px',
		'height' : 550 + 'px',
	})
	$('.bg').find('span').eq(6).css({
	  	'background-position' : span_x_07 + 'px, '+ span_y_07 + 'px',
		'height' : 450 + 'px',
	})
	$('.bg').find('span').eq(7).css({
	  	'background-position' : span_x_08 + 'px, '+ span_y_08 + 'px',
		'height' : 350 + 'px',
	})
	$('.bg').find('span').eq(8).css({
	  	'background-position' : span_x_09 + 'px, '+ span_y_09 + 'px',
		'height' : 250 + 'px',
	})
}


$('#myRange1').on('input', function(){
	x = $(this).val()
	console.log(x)
	margin = x;
	update()
})



$('.bt_width').on('keyup', function(){
	$('.bt_output').css({
		'width': $('.bt_width').val() + 'px',
	})
})
$('.bt_height').on('keyup', function(){
	$('.bt_output').css({
		'height': $('.bt_height').val() + 'px',
	})
})
$('.bt_radius').on('keyup', function(){
	$('.bt_output').css({
		'border-radius': $('.bt_radius').val() + 'px',
	})
})
$('.color_value').on('click', function(){
	$('.color_value').removeClass('color_now')
	$(this).addClass('color_now')
})
$('.code_output_button').on('click', function(){
	$('.code_output').val($('.bt_output').attr('style'))	
})

var color_active = 2;
$('.create_color').on('click', function(){
	if (color_active < 9) {
		$('.wrapper_color').eq(color_active).addClass('wrapper_color-active');
		color_active += 1;
	}else{
		$('.wrapper_color').eq(color_active).addClass('wrapper_color-active');
		color_active += 1;
		$(this).addClass('is-dispose')
	}
})

$('.close_this').on('click', function(){
	var father = $(this).parent();
	color_active -= 1;
	father.removeClass('wrapper_color-active');
	var index = father.index();
	for (var i = index; i < 9; i++) {
		var new_index = $('.wrapper_color').eq(i+1).attr('index') - 1;
		$('.wrapper_color').eq(i+1).attr('index', new_index)
	}
	father.attr('index', 20)
	sortListDir()
	$('.create_color').removeClass('is-dispose')
})
function sortListDir() {
	var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
	list = $('.color_list');
	switching = true;
	dir = "asc";
	while (switching) {
		switching = false;
		b = list.find('li');
		for (i = 0; i < (b.length - 1); i++) {
			shouldSwitch = false;
			if (dir == "asc") {
				if ($(b).eq(i).attr('index') > $(b).eq(i+1).attr('index')) {
	      			shouldSwitch = true;
	      			break;
				}
  			} 
		}
		if (shouldSwitch) {
			b[i].parentNode.insertBefore(b[i + 1], b[i]);
			switching = true;
			switchcount ++;
		} 
	}
}

var parentOffset, width, X, Y;
var drag_rotate;
var deg_string = "";
var string;
var replace_string;
$('.wrapper_output').on('mousedown', function(event) {
   	parentOffset = $(this).offset(); 
   	width = $(this).width();
	drag_rotate = true;
	replace_string = ""
	try{ string = $('.bt_output').attr('style') }catch(err){}
}); 
$('.wrapper_output').on('mouseup', function(event) {
	drag_rotate = false;
	$('.bt_output').attr('style')
}); 
$('.wrapper_output').on('mousemove', function(event) {
	if (drag_rotate) {
		X = event.pageX - parentOffset.left - 0.5 - width;
		Y = (event.pageY - parentOffset.top - 0.5 - width) * -1;
		var tan = Y / X;
		var rad = Math.round(Math.atan(tan))
		var deg = Math.round(Math.atan(tan) * (180/Math.PI))
		console.log(X)
		console.log(Y)
		var calc_deg;
		if (X < 0 && Y > 0) {
			calc_deg = -deg
		}else if( X > 0 && Y > 0){
			calc_deg = 180 - deg;
		}else if( X > 0 && Y < 0){
			calc_deg = -deg + 180;
		}else if( X < 0 && Y < 0){
			calc_deg = 360 - deg;
		}
		console.log(calc_deg)
		$('.control').css({
			'transform': 'rotate('+ calc_deg +'deg)',
		})
		deg_string = "";
		var open = string.indexOf('(');
		var close = string.indexOf('deg') - -3;
		for (var i = open; i < close; i++) {
			deg_string += string[i];
		}
		replace_string = string.replace(deg_string, '(' + calc_deg +'deg')
		$('.wrapper_output').attr('rotate', calc_deg)
		$('.bt_output').attr('style', replace_string)
		// console.log(replace_string)
	}
	$('.css_output').text(replace_string)
});       
$('.css_output').on('click', function(){
	// console.log($(this).html())
	copyDivToClipboard()
})    
$('.color_copy').on('click', function(){
	// console.log($(this).html())
	copyDivToClipboard()
	$('.top').addClass('is-copy')
})
function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("css_output"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
// console.log(Math.round(Math.asin(0.5) * (180/Math.PI)))


$('.color_wrapper').on('click', function(){
	var color = $(this).attr('style')
	$('.top').removeClass('is-copy')
	console.log(color)
	$('.color_modal_wrapper').attr('style', color)
	$('.color_copy').html(color + '<div class="top"></div>')
})

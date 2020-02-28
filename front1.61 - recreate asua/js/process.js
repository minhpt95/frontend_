
// TASK 1
// var process_width = $('.process_bar').width();
// // var point_process_width = $('.point_bar').width();
// var point_bar_width;
// var task = 8;
// var in_task = 1;


// $('#next').click(function(){
// 	in_task++;
// 	point_bar_width = Math.ceil(process_width / task * in_task);
// 	$('.point_bar').css({'width' : point_bar_width});
// })
// $('#back').click(function(){
// 	in_task--;
// 	point_bar_width = Math.ceil(process_width / task * in_task);
// 	$('.point_bar').css({'width' : point_bar_width});
// })
// End TASK 1



var process_width = $('.process_bar').width(); 	// độ rộng của thanh bar
var point_bar_left;
var point_bar_width;
var task = 20; 									// tổng số task của trang
var in_task = 0;								// task hiện tại
drowPoint();
function drowPoint(){
	for (var i = 0; i < task; i++) {
		$( ".process_bar" ).append(
				"<div class=\"circle_point clearBorder\">" +
					"<i class=\"fas\"></i>" +
				"</div>");
		point_bar_left = Math.ceil(process_width / (task-1) * i);
		point_bar_width = Math.ceil(process_width / task);
		$( ".circle_point:eq(" + i + ")").css({'left' : point_bar_left});
		$( ".circle_point:eq(" + i + ")").css({'width' : point_bar_width*1.5});
	}
}
updatePoint();
function updatePoint(){
	resetPoint();
	setupDonePoint();
	setupEditPoint();
	setupWaitPoint();
}
function setupDonePoint(){
	for (var i = 0; i < in_task; i++) {
		$( ".circle_point:eq(" + i + ")").toggleClass("done")
		$( ".circle_point:eq(" + i + ")").toggleClass("clearBorder")
		$( ".circle_point:eq(" + i + ")").toggleClass("hasClick")
		$( ".circle_point:eq(" + i + ")").find(".fas").toggleClass("fa-check")
	}
}
function setupEditPoint(){
	$( ".circle_point:eq(" + (in_task) + ")").toggleClass("edit")
	$( ".circle_point:eq(" + (in_task) + ")").toggleClass("hasClick")
	$( ".circle_point:eq(" + (in_task) + ")").find(".fas").toggleClass("fa-pen")
}
function setupWaitPoint(){
	for (var i = in_task+1; i < task; i++) {
		$( ".circle_point:eq(" + i + ")").toggleClass("wait")
		$( ".circle_point:eq(" + i + ")").find(".fas").toggleClass("fa-times")
	}
}
function hasClick(a){

	$( ".hasClick").removeClass("edit")
	$( ".hasClick:eq(" + (in_task) + ")").addClass("edit")
	$( ".hasClick").addClass("clearBorder")
	$( ".hasClick").find(".fas").removeClass("fa-pen")
	$( ".hasClick").find(".fas").addClass("fa-check")

	$( a ).removeClass("clearBorder")
	$( a ).addClass("edit")
	$( a ).find(".fas").removeClass("fa-check")
	$( a ).find(".fas").addClass("fa-pen")
}
function resetPoint(){
	$( ".circle_point").removeClass("done")
	$( ".circle_point").removeClass("edit")
	$( ".circle_point").removeClass("wait")
	$( ".circle_point").removeClass("clearBorder")
	$( ".circle_point").removeClass("hasClicked")
	$( ".circle_point").removeClass("hasClick")
	$( ".circle_point").find(".fas").removeClass("fa-check")
	$( ".circle_point").find(".fas").removeClass("fa-times")
	$( ".circle_point").find(".fas").removeClass("fa-pen")
}

function addEvent(){
	$('.hasClick').click(function(){
		hasClick(this);
	})
}


$('#next').click(function(){
	if (in_task >= task) {
		in_task = task;
	}else{
		in_task++;
	}
	updatePoint();
	addEvent();
})
$('#back').click(function(){
	if (in_task <= 0) {
		in_task = 0;
	}else{
		in_task--;
	}
	updatePoint();
	addEvent();
})






















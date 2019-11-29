var bool = false; // va chạm
var bool_transform = false;
var bool_transform2 = false;
var bool_transform3 = false;
var bool_transform4 = false;
var bool_transform5 = false;
var bool_transform6 = false;
var bool_transform7 = false;
var bool_transform8 = false;

var X = 0;
var Y = 0;

var WIDTH = 200;
var HEIGHT = 100;

var Xz2 = 0;
var Yz2 = 0;

$("#item").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaX = X;
	var deltaY = Y;

	var deltaX2 = Xz2;
	var deltaY2 = Yz2;

	bool = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool){
			$( ".bound_top" ).css({"top" : deltaY + event.clientY - y + "px", "left": deltaX +  event.clientX - x + "px"});
			$( ".bound_bot" ).css({"top" : deltaY + event.clientY - y - 2 + "px", "left": deltaX +  event.clientX - x - 2 + "px"});
			Y = deltaY + event.clientY - y;
			X = deltaX + event.clientX - x;



    //         $('.zoom2').each(function(){        
    //             $( this ).css({"top" : deltaY2 - (event.clientY - y) + "px", "left": deltaX2 - (event.clientX - x) + "px"});
				// Yz2 = deltaY2 - (event.clientY - y);
				// Xz2 = deltaX2 - (event.clientX - x);
    //         });

			$( ".zoom2" ).css({"top" : deltaY2 - (event.clientY - y) + "px", "left": deltaX2 - (event.clientX - x) + "px"});
			Yz2 = deltaY2 - (event.clientY - y);
			Xz2 = deltaX2 - (event.clientX - x);
		}
	});
});
$("#item").mouseup(function(){
	bool = false;
});
$("#item").mouseover(function(){
	$("#border_canvas").css('cursor', 'move');
});

$("#in_top").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	var deltaX2 = Xz2;
	var deltaY2 = Yz2;
	bool_transform = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform){
			$( ".bound_top" ).css({"height" : deltaHEIGHT - (event.clientY - y) - 4 + "px", "top" : deltaY + (event.clientY - y) + "px"});
			$( ".bound_bot" ).css({"height" : deltaHEIGHT - (event.clientY - y) + "px", "top" : deltaY + (event.clientY - y) - 2 + "px"});
			HEIGHT = deltaHEIGHT - (event.clientY - y);
			Y = deltaY + event.clientY - y;

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});

			$( ".zoom2" ).css({"top" : deltaY2 - (event.clientY - y) + "px"});
			Yz2 = deltaY2 - (event.clientY - y);
		}
	});
});
$("#in_top").mouseup(function(){
	bool_transform = false;
});

$("#in_bot").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	bool_transform2 = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform2){
			$( ".bound_top" ).css({"height" : deltaHEIGHT + (event.clientY - y) - 4 + "px"});
			$( ".bound_bot" ).css({"height" : deltaHEIGHT + (event.clientY - y) + "px"});
			HEIGHT = deltaHEIGHT + (event.clientY - y);

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});
		}
	});
});
$("#in_bot").mouseup(function(){
	bool_transform2 = false;
});

$("#in_right").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	bool_transform3 = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform3){
			$( ".bound_top" ).css({"width" : deltaWIDTH + (event.clientX - x) - 4 + "px"});
			$( ".bound_bot" ).css({"width" : deltaWIDTH + (event.clientX - x) + "px"});
			WIDTH = deltaWIDTH + (event.clientX - x);

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});
		}
	});
});
$("#in_right").mouseup(function(){
	bool_transform3 = false;
});

$("#in_left").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	var deltaX2 = Xz2;
	var deltaY2 = Yz2;
	bool_transform4 = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform4){
			$( ".bound_top" ).css({"width" : deltaWIDTH - (event.clientX - x) - 4 + "px", "left" : deltaX + (event.clientX - x) + "px"});
			$( ".bound_bot" ).css({"width" : deltaWIDTH - (event.clientX - x) + "px", "left" : deltaX + (event.clientX - x) - 2 + "px"});
			WIDTH = deltaWIDTH - (event.clientX - x);
			X = deltaX + event.clientX - x;

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});

			$( ".zoom2" ).css({"left" : deltaX2 - (event.clientX - x) + "px"});
			Xz2 = deltaX2 - (event.clientX - x);
		}
	});
});
$("#in_left").mouseup(function(){
	bool_transform4 = false;
});

$("#in_BR").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	bool_transform5 = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform5){
			$( ".bound_top" ).css({"width" : deltaWIDTH + (event.clientX - x) - 4 + "px","height" : deltaHEIGHT + (event.clientY - y) - 4 + "px"});
			$( ".bound_bot" ).css({"width" : deltaWIDTH + (event.clientX - x) + "px","height" : deltaHEIGHT + (event.clientY - y) + "px"});
			WIDTH = deltaWIDTH + (event.clientX - x);
			HEIGHT = deltaHEIGHT + (event.clientY - y);

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});

		}
	});
});
$("#in_BR").mouseup(function(){
	bool_transform5 = false;
});

$("#in_BL").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	var deltaX2 = Xz2;
	var deltaY2 = Yz2;
	bool_transform6 = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform6){
			$( ".bound_top" ).css({	"width" : deltaWIDTH - (event.clientX - x) - 4 + "px",
									"height" : deltaHEIGHT + (event.clientY - y) - 4 + "px",
								 	"left" : deltaX + (event.clientX - x) + "px",
								 });
			$( ".bound_bot" ).css({	"width" : deltaWIDTH - (event.clientX - x) + "px",
									"height" : deltaHEIGHT + (event.clientY - y) + "px",
									"left" : deltaX + (event.clientX - x) - 2 + "px"});
			WIDTH = deltaWIDTH - (event.clientX - x);
			HEIGHT = deltaHEIGHT + (event.clientY - y);
			X = deltaX + event.clientX - x;

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});

			$( ".zoom2" ).css({"left" : deltaX2 - (event.clientX - x) + "px"});
			Xz2 = deltaX2 - (event.clientX - x);
		}
	});
});
$("#in_BL").mouseup(function(){
	bool_transform6 = false;
});

$("#in_TR").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	var deltaX2 = Xz2;
	var deltaY2 = Yz2;
	bool_transform7 = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform7){
			$( ".bound_top" ).css({	"height" : deltaHEIGHT - (event.clientY - y) - 4 + "px", 
									"top" : deltaY + (event.clientY - y) + "px",
									"width" : deltaWIDTH + (event.clientX - x) - 4 + "px" });
			$( ".bound_bot" ).css({	"height" : deltaHEIGHT - (event.clientY - y) + "px", 
									"top" : deltaY + (event.clientY - y) - 2 + "px",
									"width" : deltaWIDTH + (event.clientX - x) + "px"});
			HEIGHT = deltaHEIGHT - (event.clientY - y);
			WIDTH = deltaWIDTH + (event.clientX - x);
			Y = deltaY + event.clientY - y;

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});
			
			$( ".zoom2" ).css({"top" : deltaY2 - (event.clientY - y) + "px"});
			Yz2 =  deltaY2 - (event.clientY - y);
		}
	});
});
$("#in_TR").mouseup(function(){
	bool_transform7 = false;
});

$("#in_TL").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaWIDTH = WIDTH;
	var deltaHEIGHT = HEIGHT;
	var deltaX = X;
	var deltaY = Y;
	var deltaX2 = Xz2;
	var deltaY2 = Yz2;
	bool_transform8 = true;
	$( "#border_canvas" ).mousemove(function(){
		if(bool_transform8){
			$( ".bound_top" ).css({	"height" : deltaHEIGHT - (event.clientY - y) - 4 + "px", 
									"top" : deltaY + (event.clientY - y) + "px",
									"width" : deltaWIDTH - (event.clientX - x) - 4 + "px", 
									"left" : deltaX + (event.clientX - x) + "px" });
			$( ".bound_bot" ).css({	"height" : deltaHEIGHT - (event.clientY - y) + "px", 
									"top" : deltaY + (event.clientY - y) - 2 + "px",
									"width" : deltaWIDTH - (event.clientX - x) + "px", 
									"left" : deltaX + (event.clientX - x) - 2 + "px"});
			HEIGHT = deltaHEIGHT - (event.clientY - y);
			WIDTH = deltaWIDTH - (event.clientX - x);
			Y = deltaY + event.clientY - y;
			X = deltaX + event.clientX - x;

			$( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});

			$( ".zoom2" ).css({"top" : deltaY2 - (event.clientY - y) + "px", "left" : deltaX2 - (event.clientX - x) + "px" });
			Yz2 =  deltaY2 - (event.clientY - y);
			Xz2 =  deltaX2 - (event.clientX - x);
		}
	});
});
$("#in_TL").mouseup(function(){
	bool_transform8 = false;
});



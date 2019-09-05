
var drag = document.getElementsByClassName("draggable");

update();
function update(){
	for (var i = 0; i < drag.length; i++) {
		drag[i].setAttribute("id", "drag_"+i);
	}
	var ID = new Array();
	for (var i = 0; i < drag.length; i++) {
		ID.push("drag_"+i);
	}
}
var x = 0;
var y = 0;

var value = false;
var value2 = false;

$('#multidraggable').mousedown(function(e){
	value = true;
	x = e.pageX;
	y = e.pageY;
});
$('#multidraggable').mouseup(function(){
	value = false;
});
$('#multidraggable').mousemove(function(e){
	if (value) {
		// x = e.pageX;
		// y = e.pageY;

		// console.log(e.pageX);
		// console.log(e.pageY);
	}
});




var ax = 0;
var ay = 0;
$('.draggable').mouseup(function(e){
	// this.style.left = e.pageX - x;
	// this.style.top = e.pageY - y;
	// this.style.width = 100 + "px";
	// console.log(e.pageX);
	// e.pageX

	// value = false;

	// var id = $(this).attr('id')
	// echo(id, e)
	 // hello();
	ax = this.style.left.substr(0,this.style.left.length-2) - 0;
	ay = this.style.top.substr(0,this.style.top.length-2) - 0;
	console.log(ax);
	// console.log(this.style.left.substr(0,this.style.left.length-2));
});
$('.draggable').mousedown(function(e){
	// this.style.left = e.pageX - x;
	// this.style.top = e.pageY - y;
	// this.style.width = 100 + "px";
	// console.log(e.pageX);
	// e.pageX

 	// value = true;


	// var id = $(this).attr('id')
	// echo(id, e)
	 // hello();
	ax = this.style.left.substr(0,this.style.left.length-2) - 0;
	ay = this.style.top.substr(0,this.style.top.length-2) - 0;
});
$('.draggable').mousemove(function(e){
	// this.style.left = e.pageX - x;
	// this.style.top = e.pageY - y;
	// this.style.width = 100 + "px";
	// console.log(e.pageX);
	// e.pageX
	if(value){
		console.log(x);
		console.log(e.pageX);
		this.style.left = ax + e.pageX - x + "px";
		this.style.top = ay + e.pageY - y + "px";
		// var id = $(this).attr('id')
		// echo(id, e)
	}
	
	 // hello();
});
function echo(id, e){
	var ID             = document.getElementById(id);
	console.log(e.pageX);
	// console.log(ID);
	// ID.style.width = 100 + "px";
	// console.log(ID.style.width);
}
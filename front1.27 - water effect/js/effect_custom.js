var c = document.getElementById("[TOP]");
var ctx = c.getContext("2d");
var x = screen.width;
var y = screen.height;
var rX = parseInt(x / 10 + 1);
var rY = parseInt(y / 10 + 1);
console.log(rX);
for (var i = 0; i < rX; i++) {
	for (var j = 0; j < rY; j++) {
		ctx.fillStyle = "white";
		ctx.fillRect(i * 10 - .4, j * 10 - .4, .8, .8);


		// Math.floor(Math.random() * 9); 
		ctx.fillStyle = "rgba(0, 0, 0, ." + Math.floor(Math.random() * 3)*10  + Math.floor(Math.random() * 9); +")";
		ctx.fillRect(i * 10, j * 10, 10, 10);
		ctx.stroke();
	}
}
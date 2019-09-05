var x = 0;

function setup() {
  	var myCanvas = createCanvas(600, 400);
  	myCanvas.parent('myContainer');
}

function draw() {
  	ellipse(x, height/2, 20, 20);
  	x = x + 1;
}
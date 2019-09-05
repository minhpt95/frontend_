
var x = 100;
var y = 100;

var mLEFT = false;
var mRIGHT = false;
var mUP = false;
var mDOWN = false;

var map = [
			[0,0,0,0,0,0,0,0],
			[0,1,1,1,1,1,1,1],
			[0,1,1,1,1,1,1,1],
			[0,1,1,0,0,1,1,1],
			[0,1,1,1,1,1,0,1],
			[0,1,1,1,1,1,1,1],
			[0,1,1,1,1,1,1,1],
			[0,0,0,0,0,0,0,0],
			]

function setup() {
  	var myCanvas = createCanvas(1200, 600);
  	myCanvas.parent('myContainer');
}

function draw() {

	background(255, 255, 255);
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if (map[i][j] == 0) {
				alert('true');
				m = new MAP(i, j, 0);
				m.display();
			}else{
				alert('false');
				m = new MAP(i, j, 1);
				m.display();
			}
		}
	}
  	// ellipse(x, y, 20, 20);

  	main = new MAIN(x, y);
  	main.update();
  	main.draw();

}


function keyPressed() {
	if (keyCode == LEFT_ARROW) {  mLEFT 	= true; }
	if (keyCode == RIGHT_ARROW) { mRIGHT 	= true; }
	if (keyCode == UP_ARROW) { mUP = true; }
	if (keyCode == DOWN_ARROW) { mDOWN 	= true; }
}
function keyReleased() {
	if (keyCode == LEFT_ARROW) { mLEFT = false; } 
	if (keyCode == RIGHT_ARROW) {  mRIGHT = false; }
	if (keyCode == UP_ARROW) { mUP = false; }
	if (keyCode == DOWN_ARROW) {  mDOWN = false; }
}

function moveUP(y){
	return y -= 5;
}

function moveDOWN(y){
	return y += 5;
}

function moveLEFT(x){
	return x -= 5;
}

function moveRIGHT(x){
	return x += 5;
}
class MAIN{
	constructor(x, y){
	    this.x = x;
	    this.y = y;
	}
	draw() {
  		let c = color(0, 0, 0);
		fill(c);
  		ellipse(x, y, 20, 20);
	}
	update(){
		if (mUP) { this.y = moveUP(this.y); }
		if (mDOWN) { this.y = moveDOWN(this.y); }
		if (mLEFT) { this.x = moveLEFT(this.x); }
		if (mRIGHT) { this.x = moveRIGHT(this.x); }
	}
}

class MAP{
	constructor(x, y, color) {
	    this.x = x;
	    this.y = y;
	    this.color = color;
	}

	display() {
		if (this.color == 1) {
	  		let c = color(0, 0, 0);
			fill(c);
		}else{
	  		let c = color(255, 255, 255);
			fill(c);
		}
	    rect(this.x*20, this.y*20, 20, 20);
	}
}
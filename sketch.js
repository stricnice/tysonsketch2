var spot = {
	x:100,
	y:50
}

var col = {
	r:255,
	g:0,
	b:0
}


function setup() {
  createCanvas(2000,2000);
	background(0);
}

function draw() {
	noStroke();
	spot.x=random(0,width);
	spot.y=random(0,height);
	col.r=random(0,40);
	col.g=random(0,1);
	col.b=random(0,255);
  fill(col.r,col.g,col.b,175);
	ellipse(spot.x,spot.y, 28,28);
}

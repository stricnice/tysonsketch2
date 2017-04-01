//var x = random(0,width);
//var y = random(0, height);



function setup() {
	
	createCanvas(400,400);
	background(200);
	
}

function draw () {
	x=random(0,width);
	y=random(0,height);
	noStroke();
	fill(0,x,random(100,250),130);
	ellipse(x,y,30,30);
	
	
	
	
}

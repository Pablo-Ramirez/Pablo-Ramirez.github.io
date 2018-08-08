var heart;

function setup() {
	createCanvas(900, windowHeight);
	heart = new LeftHeart();
}

function draw() {
	heart.drawleft();
}

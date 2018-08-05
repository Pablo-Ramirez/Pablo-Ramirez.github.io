var heart;

function setup() {
	createCanvas(windowWidth, windowHeight);
	heart = new LeftHeart();
}

function draw() {
	heart.drawleft();
}

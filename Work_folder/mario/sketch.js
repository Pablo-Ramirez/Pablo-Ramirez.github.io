var square;
var moveThis = 60;
function setup() {
	createCanvas(970, 970);
}
function draw() {
	for(var x = 0; x < 970; x += 60){
		for(var y = 0; y < 970; y+= 60){
			line(0, x, 960, x);
			line( y, 0, y, 960);
		}
	}
	drawSquares();
}
class Square{
	constructor(x,y){
		this.width = 60;
		this.height = 60;
		this.x = x,
		this.y = y;
			rect(x,y,this.width, this.height)
		}
	}
	function drawSquares(){
		noStroke()
		fill('red')
		//First row
		square = new Square(240 + moveThis, 0)
		square = new Square(300 + moveThis, 0)
		square = new Square(360 + moveThis, 0)
		square = new Square(420 + moveThis, 0)
		square = new Square(480 + moveThis, 0)
		//Second row
		square = new Square(180 + moveThis, 60)
		square = new Square(240 + moveThis, 60)
		square = new Square(300 + moveThis, 60)
		square = new Square(360 + moveThis, 60)
		square = new Square(420 + moveThis, 60)
		square = new Square(480 + moveThis, 60)
		square = new Square(540 + moveThis, 60)
		square = new Square(600 + moveThis, 60)
		square = new Square(660 + moveThis, 60)
		//Third row
		fill('brown')
		square = new Square(180 + moveThis, 120)
		square = new Square(240 + moveThis, 120)
		square = new Square(300 + moveThis, 120)
		fill('yellow')
		square = new Square(360 + moveThis, 120)
		square = new Square(420 + moveThis, 120)
		fill('black')
		square = new Square(480 + moveThis, 120)
		fill('yellow')
		square = new Square(540 + moveThis, 120)
		//Forth row
		fill('brown')
		square = new Square(120 + moveThis, 180)
		fill('yellow')
		square = new Square(180 + moveThis, 180)
		fill('brown')
		square = new Square(240 + moveThis, 180)
		fill('yellow')
		square = new Square(300 + moveThis, 180)
		square = new Square(360 + moveThis, 180)
		square = new Square(420 + moveThis, 180)
		fill('black')
		square = new Square(480 + moveThis, 180)
		fill('yellow')
		square = new Square(540 + moveThis, 180)
		square = new Square(600 + moveThis, 180)
		square = new Square(660 + moveThis, 180)
		//Fifth row
		fill('brown')
		square = new Square(120 + moveThis, 240)
		fill('yellow')
		square = new Square(180 + moveThis, 240)
		fill('brown')
		square = new Square(240 + moveThis, 240)
		fill('yellow')
		square = new Square(300 + moveThis, 240)
		square = new Square(360 + moveThis, 240)
		square = new Square(420 + moveThis, 240)
		square = new Square(480 + moveThis, 240)
		fill('black')
		square = new Square(540 + moveThis, 240)
		fill('yellow')
		square = new Square(600 + moveThis, 240)
		square = new Square(660 + moveThis, 240)
		square = new Square(720 + moveThis, 240)
		//Sixth row
		fill('brown')
		square = new Square(180 + moveThis, 300)
		fill('yellow')
		square = new Square(240 + moveThis, 300)
		square = new Square(300 + moveThis, 300)
		square = new Square(360 + moveThis, 300)
		square = new Square(420 + moveThis, 300)
		fill('black')
		square = new Square(480 + moveThis, 300)
		square = new Square(540 + moveThis, 300)
		square = new Square(600 + moveThis, 300)
		square = new Square(660 + moveThis, 300)
		//Seventh row
		fill('yellow')
		square = new Square(240 + moveThis, 360)
		square = new Square(300 + moveThis, 360)
		square = new Square(360 + moveThis, 360)
		square = new Square(420 + moveThis, 360)
		square = new Square(480 + moveThis, 360)
		square = new Square(540 + moveThis, 360)
		//Eight row
		fill('red')
		square = new Square(180 + moveThis, 420)
		square = new Square(240 + moveThis, 420)
		fill('blue')
		square = new Square(300 + moveThis, 420)
		fill('red')
		square = new Square(360 + moveThis, 420)
		square = new Square(420 + moveThis, 420)
		fill('blue')
		square = new Square(480 + moveThis, 420)
		fill('red')
		square = new Square(540 + moveThis, 420)
		square = new Square(600 + moveThis, 420)
		//Ninth row
		fill('red')
		square = new Square(120 + moveThis, 480)
		square = new Square(180 + moveThis, 480)
		square = new Square(240 + moveThis, 480)
		fill('blue')
		square = new Square(300 + moveThis, 480)
		fill('red')
		square = new Square(360 + moveThis, 480)
		square = new Square(420 + moveThis, 480)
		fill('blue')
		square = new Square(480 + moveThis, 480)
		fill('red')
		square = new Square(540 + moveThis, 480)
		square = new Square(600 + moveThis, 480)
		square = new Square(660 + moveThis, 480)
		//Tenth row
		fill('red')
		square = new Square(60 + moveThis, 540)
		square = new Square(120 + moveThis, 540)
		square = new Square(180 + moveThis, 540)
		square = new Square(240 + moveThis, 540)
		fill('blue')
		square = new Square(300 + moveThis, 540)
		square = new Square(360 + moveThis, 540)
		square = new Square(420 + moveThis, 540)
		square = new Square(480 + moveThis, 540)
		fill('red')
		square = new Square(540 + moveThis, 540)
		square = new Square(600 + moveThis, 540)
		square = new Square(660 + moveThis, 540)
		square = new Square(720 + moveThis, 540)
		//Eleventh row
		fill('yellow')
		square = new Square(60 + moveThis, 600)
		square = new Square(120 + moveThis, 600)
		fill('red')
		square = new Square(180 + moveThis, 600)
		fill('blue')
		square = new Square(240 + moveThis, 600)
		fill('yellow')
		square = new Square(300 + moveThis, 600)
		fill('blue')
		square = new Square(360 + moveThis, 600)
		square = new Square(420 + moveThis, 600)
		fill('yellow')
		square = new Square(480 + moveThis, 600)
		fill('blue')
		square = new Square(540 + moveThis, 600)
		fill('red')
		square = new Square(600 + moveThis, 600)
		fill('yellow')
		square = new Square(660 + moveThis, 600)
		square = new Square(720 + moveThis, 600)
		//Twelvth row
		fill('yellow')
		square = new Square(60 + moveThis, 660)
		square = new Square(120 + moveThis, 660)
		square = new Square(180 + moveThis, 660)
		fill('blue')
		square = new Square(240 + moveThis, 660)
		square = new Square(300 + moveThis, 660)
		square = new Square(360 + moveThis, 660)
		square = new Square(420 + moveThis, 660)
		square = new Square(480 + moveThis, 660)
		square = new Square(540 + moveThis, 660)
		fill('yellow')
		square = new Square(600 + moveThis, 660)
		square = new Square(660 + moveThis, 660)
		square = new Square(720 + moveThis, 660)
		//Thirteenth row
		fill('yellow')
		square = new Square(60 + moveThis, 720)
		square = new Square(120 + moveThis, 720)
		fill('blue')
		square = new Square(180 + moveThis, 720)
		square = new Square(240 + moveThis, 720)
		square = new Square(300 + moveThis, 720)
		square = new Square(360 + moveThis, 720)
		square = new Square(420 + moveThis, 720)
		square = new Square(480 + moveThis, 720)
		square = new Square(540 + moveThis, 720)
		square = new Square(600 + moveThis, 720)
		fill('yellow')
		square = new Square(660 + moveThis, 720)
		square = new Square(720 + moveThis, 720)
		//Fourteenth row
		fill('blue')
		square = new Square(180 + moveThis, 780)
		square = new Square(240 + moveThis, 780)
		square = new Square(300 + moveThis, 780)
		square = new Square(480 + moveThis, 780)
		square = new Square(540 + moveThis, 780)
		square = new Square(600 + moveThis, 780)
		//Fifteenth row
		fill('brown')
		square = new Square(180 + moveThis, 840)
		square = new Square(240 + moveThis, 840)
		square = new Square(120 + moveThis, 840)
		square = new Square(540 + moveThis, 840)
		square = new Square(600 + moveThis, 840)
		square = new Square(660 + moveThis, 840)
		//Sixteenth row
		fill('brown')
		square = new Square(60 + moveThis, 900)
		square = new Square(120 + moveThis, 900)
		square = new Square(180 + moveThis, 900)
		square = new Square(240 + moveThis, 900)
		square = new Square(540 + moveThis, 900)
		square = new Square(600 + moveThis, 900)
		square = new Square(660 + moveThis, 900)
		square = new Square(720 + moveThis, 900)
	}

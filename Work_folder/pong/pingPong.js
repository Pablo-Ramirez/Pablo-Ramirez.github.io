var x = 100;
var y = 0;
var speedX= 3;
var speedY = 3;
var sizeOfBall = {
  width: 50,
  height:50
}

function setup(){
  createCanvas(600, 600);
  x = random(300, 300);
  y = random(height)
}

function draw(){
  background(0);
  balls();
  rightPaddle();
  leftPaddle();
  leftScore();
  rightScore();
  textSize(34);
  if(ls == 2 || rs == 2 ){
    text("GAME OVER", 200, 200)
    x = width/2;
    y = height/2;
  };
  if(x === y || x === y){
    speedX = speedX * -1
  };
  if(x == rightPaddle || x == leftPaddle){
    speedX = speedX * -1
  }
}

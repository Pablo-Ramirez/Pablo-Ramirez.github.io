function setup(){
  createCanvas(windowWidth, windowHeight)
  background(0);
}
var p1, p2;
var ls = 0;
function draw(){
  //paddle one
  rect(0, width/2, 30, 100);
  //paddle two
  rect(height, width/2, 30, 100);
  //draw ball
  ellipse(height/2, width/2, 30,30);
  //left score
  textSize(32);
  fill('white')
  text(ls , width/3, 30);



}

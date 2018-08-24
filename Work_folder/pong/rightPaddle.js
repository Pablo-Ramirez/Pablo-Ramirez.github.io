var rightPaddleMove = 300;
function rightPaddle(){
  fill('white')
  rect( width - 40, rightPaddleMove, 30, 150,);

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    rightPaddleMove = rightPaddleMove - 30;
  }else if(keyCode === DOWN_ARROW){
    rightPaddleMove = rightPaddleMove + 30;
  }
}

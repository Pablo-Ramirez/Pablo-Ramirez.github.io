var leftPaddleMove = 300;

function leftPaddle(){
  fill('white');
  rect(10, leftPaddleMove , 30, 150,)
}
function keyTyped(){
  if(key === 'q'){
    leftPaddleMove = leftPaddleMove - 30;
  }else if(key === 'a'){
    leftPaddleMove = leftPaddleMove + 30;
  }else{
    return
  }
}

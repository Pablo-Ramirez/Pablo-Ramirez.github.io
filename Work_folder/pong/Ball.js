function balls(){
  fill('white');
  ellipse(x, y, sizeOfBall.width, sizeOfBall.height);
  if(x > width + 30 || x < -30){
    speedX = speedX * -1;
    x = random(300, 300);
  }
  if(y > height || y < 0){
    speedY = speedY * -1;

  }
  y = y + speedY;
  x = x + speedX;
  if(x === rightPaddle()){
    speedX = speedX * -1
  }
}

var ls = 0;
var rs = 0
function leftScore(){
  textSize(32);
  fill('white')
  text(ls , width/3, 30);
  if(x > width + 30){
    ls++
  }
  if(ls == 2){
    fill('red')
  };
}

function rightScore(){
  textSize(32);
  fill('white')
  text(rs , 400, 30);
  if(x < -30){
    rs ++
  }
  if(rs == 2 ){
    fill('red')
  };
}

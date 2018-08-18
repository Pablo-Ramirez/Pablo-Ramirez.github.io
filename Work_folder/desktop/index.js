function onOff(){
  turnScreenOffOn();
}
function turnScreenOffOn(){
  var el = document.getElementById('video');
  var button = document.getElementById('power-on-off');
  el.classList.toggle('off-on');
  if(el.classList.contains('off-on')){
    button.classList.remove('green')
    button.classList.add('red')
    el.muted = true;
    el.pause()
  }
  else{
    button.classList.remove('red');
    button.classList.add('green');
    el.muted = false;
    el.play();
  }
}

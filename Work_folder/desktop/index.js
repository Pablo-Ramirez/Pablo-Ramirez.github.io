function onOff(){
  turnScreenOffOn();
  changeButtonMode();
}
function turnScreenOffOn(){
  var el = document.getElementById('video');
  el.classList.toggle('off-on');
}
function changeButtonMode(){
  var button = document.getElementById('power_on_off');
  button.classList.toggle('red');
}

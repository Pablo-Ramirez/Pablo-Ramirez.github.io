//display current time
function timeDisplay(){
  var time = new Date();
  var am_Pm = 'AM'
  var hour = time.getHours();
  //changes am to pm
   if(hour>=12){
        am_Pm = "PM";
     //If hour is greater than 12 makes it 12
        hour = hour-12;
    }
  var min = time.getMinutes();
  //gives a zero in from if there is 9 or less
  if(min < 10){
    min = "0" + min;
  }
  var currentTime = hour + ":" + min + ' ' + am_Pm;
  document.getElementById('time').innerHTML = currentTime;
}
setInterval(timeDisplay, 1000);
//time ends here
var currentDate = new Date();
//Gets current Day
var day = currentDate.getDate();
//Gets current Month
var month = currentDate.getMonth() + 1;
//Gets current Year
var year = currentDate.getFullYear();
//display the time
var newCurrentDate = month + "/" + day + "/" + year;
document.getElementById('date').innerHTML = newCurrentDate;

//Turns on vibration
function vibrateOn(){
  alert('Vibration Turn On')
}
//Inceases volume
function volumeUp(){
  alert('Volume Increased')
}
//Decreases volume
function volumeDown(){
  alert('Volume Decreased')
}
//Turnes Power On and Off
function powerOnOff(){
  var off = document.getElementById("screen").classList.toggle('unlock');
  document.getElementById("home_page").classList.toggle('turn_off');
}
//Turns flashlight On
function flashlightOn(){
  alert('Flashlight Turn On')
}
//Opens Camera
function cameraOpen(){
    var onFailSoHard = function(e) {
    console.log('Reeeejected!', e);
  };

  // Not showing vendor prefixes.
  navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
    var video = document.querySelector('.video');
    video.src = window.URL.createObjectURL(localMediaStream);

    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function(e) {
      // Ready to go. Do some stuff.
    };
  }, onFailSoHard);
}
//Unlockes Phone
function screenOpen(){
  document.getElementById("screen").classList.toggle('turn_off')
}

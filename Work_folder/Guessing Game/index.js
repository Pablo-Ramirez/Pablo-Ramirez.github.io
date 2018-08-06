var randomNumber;

function init() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
}

function compareGuess() {
  var userGuess = document.getElementById("inputBox").value;
  var guessLists = [];
  //IF ELSE STATEMENTS
  if (userGuess > randomNumber) {
    document.getElementById("highLow").innerHTML = "Your guess is to high";
    document.getElementById("inputBox").value = "";
  } else if (userGuess < randomNumber) {
    document.getElementById("highLow").innerHTML = "Your guess is to low";
    document.getElementById("inputBox").value = "";
  } else {
    document.getElementById("highLow").innerHTML = "You guessed correct";
    document.getElementById("inputBox").value = randomNumber;
    var wordChange = document.getElementById("wordChange");
    wordChange.innerHTML = 'Click the button above to play a new game';
  }
  if(userGuess !== randomNumber){
    document.getElementById('guessList').innerHTML = userGuess;
  }
}

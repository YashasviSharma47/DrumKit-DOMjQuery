//A SAPERATE FUNCTION THAT PLAYS THE SOUNDS
var key = 0;

function awaaz(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "w":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "s":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      alert("Please press the keys mentioned on the instrument.")
  }
}





// THIS EVENT LISTENER LISTENS TO ANY ONSCREEN CLICKS
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var btninnerHTML = this.innerHTML;
    awaaz(btninnerHTML);
  });
}





//THIS EVENT LISTENER LISTENS TO ANY KEYSTROKES ON THE KEYBOARD
document.addEventListener('keydown', function(event) {
  awaaz(event.key);
  addAnimation(event.key);
});




//THIS FUNCTION ADDS AN ANIMATION TO THE PRESSED BUTTONS
function addAnimation(usedKey) {
  var pressedButton = document.querySelector("." + usedKey);
  pressedButton.classList.add("pressed");
  setTimeout(function() {
    pressedButton.classList.remove("pressed");
  }, 300);
}

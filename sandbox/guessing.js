
var index = 0;
function guessGame() {
guess();

var guesses = []
var guessNum = "";
guessNum = document.getElementById("guess").value;

var num = document.getElementById("guess").value;
const array = num.split(',');

var num = array.length;
for (var i = 0; i < num; i ++) {
guesses[i] = array[i];
index = index + 1;
}

for (var i = 0; i < num; i++) {
document.getElementById("guessCounter").innerHTML = index;
}
}

var myNumber = Math.round(Math.random()*100);
function guess() {
var guess = document.getElementById("guess").value;
if (myNumber == parseInt(guess)) {
document.getElementById("result").innerHTML = "Congratulations, you've guessed my number! It took you " + index + " times to guess the correct number";
} else if (myNumber <= parseInt(guess)) {
document.getElementById("result").innerHTML = "Try again, you're too high";
} else { (myNumber >= parseInt(guess))
document.getElementById("result").innerHTML = "Try again";
 }}
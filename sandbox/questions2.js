function questions() {
var names = document.getElementById("names").value;
var age = document.getElementById("age").value;
var school = document.getElementById("school").value;
var food = document.getElementById("food").value;
var game = document.getElementById("game").value;
var result = "Your name is " + names + "," + "\n" + "and you're " + age + " years old." + "\n" + "You attend " + school + "." + "\n" +"You like to eat " + food + " and your favorite game is " + game + ".";

document.getElementById("result").innerHTML = result;
}
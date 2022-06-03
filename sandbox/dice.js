var rolls = "";

function rollDie() {
  // get a random number from 1 to 6

 var die = Math.round(Math.random()*5) + 1; 

 //create a string with path to the correct die image 

 var image = "images/die" + die + ".jpg";
console.log(image);

document.getElementById("dieHolder").src = image;
rolls += die;
document
console.log(rolls);
document.getElementById("rolls").innerHTML = rolls;
}
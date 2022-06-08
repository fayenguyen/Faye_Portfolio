var topic = "Computer Science";
var showing = false;
var index = 0;
var words = ["Algorithm", "Boolean", "Array", "Index", "Parameters", "Variable"];
var definitions = ["a specific procedure for solving a well-defined computational problem", "a data type with two possible values: true or false", "a data structure that holds similar, related data", "used to point at a data element within an array", "a special kind of variable used in a subroutine to refer to one of the pieces of data provided as input to the subroutine", "a value that can change, depending on conditions or on information passed to the program."];

var images = []

updateScreen();
setText("title", topic + " Flashcards")

function updateScreen() {

  if (words.length > 0) {
    setText("word", words[index].toUpperCase());

    if (showing) {
      setText("definition", definitions[index]);
    } else {
      setText("definition", "");
    } 

  } else {
    setText("word", "You learned all the words!");
    setText("definition", "");
  }

  displayMessage("Total words to learn: " + words.length);
}

function toggle() {
  if (showing) {
    showing = false;
    setText("toggleBtn", "Show")
  } else {
    showing = true;
    setText("toggleBtn", "Hide")
  }

  updateScreen();

}

function nextWord() {
  // write code here
  console.log("nextWord btn clicked!")
}

function previousWord() {
  // write code here
  console.log("previousWord clicked!");
}

function learnedWord() {
  // write code here
  console.log("learned word btn clicked!");
}

function displayMessage(msg) {
  setText("message", msg);
}

function getText(id) {
  return document.getElementById(id).value;
}

function setText(id, value) {
   document.getElementById(id).innerHTML = value;
}
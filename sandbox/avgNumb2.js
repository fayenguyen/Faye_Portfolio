function average() {
var values = [];

var text = document.getElementById("average").value;
const array = text.split(',');

var totalValues = array.length;
for (var i = 0; i < totalValues; i ++) {
values[i] = array[i];
}

var sum = 0;
for (var i = 0; i < totalValues; i++) {
sum += parseInt(values[i]);
}

console.log(text);
console.log(array);
console.log(values);
var result = (sum/totalValues);
document.getElementById("result").innerHTML = "The average of your values is: " + result;
}
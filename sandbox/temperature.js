
function convertTemperature() { 

var getChoice= document.getElementById("temp").value;

if(getChoice =="toF"){
calculateToF(getChoice);
} else{
calculateToC(getChoice);
}
  
}

function calculateToF(c){

    c=document.getElementById("temperature").value
    var f = c*9/5+32;      
  document.getElementById("result").innerHTML="Farenheit: " + f ;
}

function calculateToC(f){
  f=document.getElementById("temperature").value
  var c = (5/9) * (f - 32);
  document.getElementById("result").innerHTML = "Celsius: " + c;
}
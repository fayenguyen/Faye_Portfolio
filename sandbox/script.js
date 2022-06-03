
function calculateAverage() {
    var values = [];
    
    var totalValues = prompt("How many numbers do you want to average?");
    for (var i=0; i<totalValues;i++){
      values[i] = prompt("Enter value #" + (i+1))
    }
          
    var sum = 0;
      
    for (var i=0; i<totalValues; i++){
      sum += parseInt(values[i]);
    }
      
    var result = (sum/totalValues);

    document.getElementById("result").innerHTML = result;

}


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  allDone++;
  document.getElementById("demo").innerHTML = allDone;
}

function myStopFunction() {
  clearInterval(myVar);
}
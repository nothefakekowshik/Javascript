var redObj = document.getElementById("red");
var greenObj = document.getElementById("green");
var blackObj = document.getElementById("black");
var yellowObj = document.getElementById("yellow");

function checker() {
  if (document.body.style.backgroundColor === "red") {
    document.getElementById("result").innerHTML = "<h2>Red</h2>";
    document.getElementById("main").style.color = "black";
  } else if (document.body.style.backgroundColor === "green") {
    document.getElementById("result").innerHTML = "<h2>Green</h2>";
    document.getElementById("main").style.color = "black";
  } else if (document.body.style.backgroundColor === "black") {
    document.getElementById("result").innerHTML = "<h2>Black</h2>";
    document.getElementById("main").style.color = "red";
  } else if (document.body.style.backgroundColor === "yellow") {
    document.getElementById("result").innerHTML = "<h2>Yellow</h2>";
    document.getElementById("main").style.color = "black";
  } else {
    document.getElementById("result").innerText = "";
  }
}
redObj.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  checker();
});

greenObj.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  checker();
});
blackObj.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  checker();
});

yellowObj.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
  checker();
});

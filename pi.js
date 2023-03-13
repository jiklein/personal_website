var answer = "1013";

var t = null;
var speed = 1000;
var pi = 0.0;
var x = 1;
var i = 0;


function clean() {
  document.getElementById("my-div").innerHTML = "";
  pi = 0.0;
  x = 1;
  i = 0;
}

function set() {
  speed = document.getElementById("xx").value;
  document.getElementById("my-div4").innerHTML = speed;
}


function start() {

    document.getElementById("my-div3").innerHTML =
    "<button onclick=\"stop()\">Stop</button><br>";
  t = setInterval(run, speed);
}


function run() {


  pi += ((i % 2 == 0) ? 1 : -1) / x;
  i = (i + 1) % 2;
  x += 2;

  document.getElementById("my-div").innerHTML = "" + (4*pi) + "<br>" +
    document.getElementById("my-div").innerHTML;

}

function stop() {
  clearInterval(t);
    document.getElementById("my-div3").innerHTML =
    "<button onclick=\"start()\">Start</button><br>";
}



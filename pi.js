var timer = null;
var delay = 1000;
var pi = 0.0;
var x = 1;
var i = 0;

function clean() {
  document.getElementById("pi").innerHTML = "";
  pi = 0.0;
  x = 1;
  i = 0;
}

function set() {
  delay = document.getElementById("delayInput").value;
  document.getElementById("delay").innerHTML = delay;
}

function start() {
  document.getElementById("start").innerHTML =
    "<button onclick=\"stop()\">Stop</button><br>";
  timer = setInterval(run, delay);
}

function run() {
  pi += ((i % 2 == 0) ? 1 : -1) / x;
  i = (i + 1) % 2;
  x += 2;

  document.getElementById("pi").innerHTML += (4*pi) + "<br>";
}

function stop() {
  clearInterval(timer);
  document.getElementById("start").innerHTML =
    "<button onclick=\"start()\">Start</button><br>";
}

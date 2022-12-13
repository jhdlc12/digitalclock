window.onload = function () {
  digitalClock();
};

function digitalClock() {
  let d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let hour1 = "";
  let hour2 = "";
  let minute1 = "";
  let minute2 = "";

  //first digit of hour
  if (hour < 10) {
    hour1 = 0;
    hour2 = hour;
  } else {
    hour1 = Math.floor(hour / 10);
    hour2 = hour % 10;
  }

  //minute
  if (minute < 10) {
    minute1 = 0;
    minute2 = minute;
  } else {
    minute1 = Math.floor(minute / 10);
    minute2 = minute % 10;
  }

  document.getElementById("hour1").innerHTML = hour1;
  document.getElementById("hour2").innerHTML = hour2;
  document.getElementById("minute1").innerHTML = minute1;
  document.getElementById("minute2").innerHTML = minute2;

  setTimeout(function () {
    digitalClock;
  }, 1000);
}

function startBlinking() {
  window.setInterval(blinking, 1000);
}

function blinking() {
  let colon = document.getElementById("clock-colon");

  colon.innerHTML = ":";

  window.setTimeout(function () {
    colon.innerHTML = "";
  }, 500);
}

startBlinking();

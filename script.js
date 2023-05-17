let hour = 0;
let minute = 0;
let second = 0;

let flag = false;
let cnt = 0;

function start() {
  if (cnt == 0) {
    cnt = 1;
    flag = true;
    stopwatch();
  }
}

function stop() {
  cnt = 0;
  flag = false;
}

function reset() {
  flag = false;
  cnt = 0;
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
}

function stopwatch() {
  if (flag) {
    second++;

    if (second < 10) {
      document.getElementById("sec").innerHTML = "0" + second;
    } else document.getElementById("sec").innerHTML = second;

    if (second > 59) {
      document.getElementById("sec").innerHTML = "00";
      second = 0;
      minute++;
      if (minute < 10) {
        document.getElementById("min").innerHTML = "0" + minute;
      } else document.getElementById("min").innerHTML = minute;
    }

    if (minute > 59) {
      document.getElementById("min").innerHTML = "00";
      minute = 0;
      hour++;
      if (hour < 10) {
        document.getElementById("hr").innerHTML = "0" + hour;
      } else document.getElementById("hr").innerHTML = hour;
    }

    if (hour > 23) reset();

    setTimeout("stopwatch()", 1000);
  }
}

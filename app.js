let [secnods, minutes, hours] = [0, 0, 0];
let displyTime = document.getElementById("date");
let timer = null;

function stopTime() {
  secnods++;
  if (secnods == 60) {
    secnods = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = secnods < 10 ? "0" + secnods : secnods;

  displyTime.innerHTML = h + ":" + m + ":" + s;
}
function timeStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopTime, 1000);
}

function timerestart() {
  clearInterval(timer);
  [secnods, minutes, hours] = [0, 0, 0];
  displyTime.innerHTML = "00:00:00";
}

function stoptime() {
  clearInterval(timer);
  
}

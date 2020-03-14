// "use strict";

// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");

// function setClock() {
//   const currentDate = new Date();
//   const secondsRotationRatio = currentDate.getSeconds() / 60;
//   const minutesRotationRatio =
//     (secondsRotationRatio + currentDate.getMinutes()) / 60;
//   const hoursRotationRatio =
//     (minutesRotationRatio + currentDate.getHours()) / 12;
//   rotateClock(second, secondsRotationRatio);
//   rotateClock(minute, minutesRotationRatio);
//   rotateClock(hour, hoursRotationRatio);
// }

// function rotateClock(element, rotation) {
//   element.style.setProperty("--rotation", rotation * 360);
// }

// setClock();
// setInterval(setClock, 1000);

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setClock() {
  const currentDate = new Date();
  const secondsRotationRatio = currentDate.getSeconds() / 60;
  const minutesRotationRatio = currentDate.getMinutes() / 60;
  const hoursRotationRatio = currentDate.getHours() / 12;
  rotation(hour, hoursRotationRatio);
  rotation(minute, minutesRotationRatio);
  rotation(second, secondsRotationRatio);
}

function rotation(element, rotation) {
  element.style.setProperty("--rotation", rotation * 360);
}
setClock();

setInterval(setClock, 1000);

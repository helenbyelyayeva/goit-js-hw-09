function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");


let intervalColor = null;
let colorStart = false;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
function onStartBtnClick() {
  changeColor();
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function changeColor() {
  if (colorStart) {
    return;
  }
  colorStart = true;
  intervalColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

stopBtn.addEventListener('click', onStopBtnClick);
function onStopBtnClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  colorStart = false;
  clearInterval(intervalColor);
}
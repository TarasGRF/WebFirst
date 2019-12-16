import "./hw_12.scss";
import { setInterval, clearInterval } from "timers";

const buttons = document.querySelectorAll("button");

const onOff = document.querySelector("#onoff");

const onButton_green = () => {
  buttons[0].style.backgroundColor = "green";
  //   buttons[1].style.backgroundColor = "yellow";
  //   buttons[2].style.backgroundColor = "red";
};
const onButton_yellow = () => {
  //buttons[0].style.backgroundColor = "green";
  buttons[1].style.backgroundColor = "yellow";
  //   buttons[2].style.backgroundColor = "red";
};
const onButton_red = () => {
  //buttons[0].style.backgroundColor = "green";
  //buttons[1].style.backgroundColor = "yellow";
  buttons[2].style.backgroundColor = "red";
};
const offButton_green = () => {
  buttons[0].style.backgroundColor = "grey";
};
const offButton_yellow = () => {
  buttons[1].style.backgroundColor = "grey";
};
const offButton_red = () => {
  buttons[2].style.backgroundColor = "grey";
};
const blink = () => {
  onButton_green();
  setTimeout(offButton_green, 1000);
  setTimeout(onButton_yellow, 1000);
  setTimeout(offButton_yellow, 2000);
  setTimeout(onButton_red, 2000);
  setTimeout(offButton_red, 3000);
};
let flag = 0;
let id;
onOff.onclick = () => {
  console.log(flag % 2);
  if (flag % 2) {
    id = setInterval(blink, 3000);
  } else {
    clearInterval(id);
  }
  flag++;
};
// offButton();
// clearInterval(intID);
// setInterval(offButton, 1000);
// clearInterval(offButton);

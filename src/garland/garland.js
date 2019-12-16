import "./garland.scss";

const body = document.querySelector("body");
const elka = document.querySelector("div");

const btn = document.createElement("button");
btn.textContent = "Add item!";
btn.style.borderRadius = "50%";
btn.style.backgroundColor = "yellow";
btn.style.width = "100px";
btn.style.height = "50px";

body.appendChild(btn);

let getRandomNumber = max => {
  return Math.round(Math.random() * max);
};
let getRandomColor = () => {
  return `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(
    255
  )})`;
};
let create_lamp = () => {
  const l = document.createElement("div");
  l.className = "lampa";
  console.log(l);
  l.style.backgroundColor = getRandomColor();
  elka.appendChild(l);
};

btn.onclick = () => {
  create_lamp();
};

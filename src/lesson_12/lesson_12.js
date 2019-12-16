import "./lesson_12.scss";

const btn = document.createElement("button");

btn.style.background = "green";
btn.textContent = "Call button";

const body = document.querySelector("body");
body.appendChild(btn);

btn.onclick = () => {
  const b = document.createElement("div");
  b.textContent = "Hello";
  body.appendChild(b);
};

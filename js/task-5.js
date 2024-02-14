"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  text.textContent = document.body.style.backgroundColor = getRandomHexColor();
};

const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");

btn.addEventListener("click", changeColor);


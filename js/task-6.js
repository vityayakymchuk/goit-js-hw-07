"use strict";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountElements = document.querySelector ('#controls input'),
createBtn = document.querySelector ('button[data-create]'),
destroyBtn = document.querySelector ('button[data-destroy]'),
boxesElements = document.querySelector ('#boxes');

const createBoxes = () => {
  let amount = amountElements.value;
  const boxes = [];

  const createArray = amount => {
    for (let i = 0; i < amount; i++) {
      boxes.unshift ({ width: 30, heigth: 30, color: getRandomColor() });

      for (let i = 0; i < boxes.length; i++) {
        boxes[i].width += 10;
        boxes[i].heigth += 10;
      }
    }

    return boxes;
  };
  if (amount > 0 && amount <= 100) {
    createArray (amountElements.value);
    const newBoxes = boxes.reduce(
      (html, div) =>
        html +
        `<div style='width: ${div.width}px; height: ${div.heigth}px; background-color: ${div.color}; margin-top: 10px'></div>`,
      ""
    );
    boxesElements.innerHTML = newBoxes;

    amountElements.value = "";
    boxes.length = 0;
  } else {
    alert ("Please, enter a number from 1 to 100!");
    amountElements.value = "";
  }
};

const destroyBoxes = () => {
  boxesElements.innerHTML = "";
};

createBtn.addEventListener ("click", createBoxes);
destroyBtn.addEventListener ("click", destroyBoxes);
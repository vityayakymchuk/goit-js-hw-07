"use strict";

const getName = () => {
const inputForm = document.querySelector("#name-input");
const nameText = document.querySelector("#name-output");

    inputForm.addEventListener("input", (event) => {
        if (event.currentTarget.value.trim() === "") {
        nameText.textContent = "Anonymous"
        }
        else {
nameText.textContent = event.currentTarget.value.trim();}
});
};

getName();

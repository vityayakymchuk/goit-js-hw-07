"use strict";

const registerForm = document.querySelector(".login-form");
const data = {};

registerForm.addEventListener("submit", sendSubmit);

function sendSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const login = registerForm.elements.email.value.trim();
        const password = registerForm.elements.password.value.trim();

        if (login === "" || password === "") {
             alert("All form fields must be filled in!");
        } else {
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log(data);
            registerForm.reset();
        }
    };




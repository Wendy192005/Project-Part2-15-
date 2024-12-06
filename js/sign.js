"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $("#email").focus();
    $(".signup").addEventListener("click", (ev) => {
        ev.preventDefault();

        const email = $("#email").value;
        const usrName = $("#username").value;
        const passwrd = $("#passwrd").value;

        let pass = true;
        clearErrors();
        if (email === "") {
            displayError("#email", "Email must be filled in");
            pass = false;
        } else if (!emailPattern.test(email)) {
            displayError("#email", "Please enter a valid email address");
            pass = false;
        }
        if (usrName === "") {
            displayError("#username", "User name must be filled in");
            pass = false;
        }

        if (passwrd === "") {
            displayError("#passwrd", "You must enter a password");
            pass = false;
        }
        if (pass) {
            alert(`Registration Complete. Welcome ${usrName} to our website!`);
            window.location.href = ('../index.html');
        }
    });
});

const displayError = (selector, message) => {
    const id = $(selector);
    const error = document.createElement("span");
    error.className = "error";
    error.textContent = "*" + message;
    id.parentElement.appendChild(error);
};

const clearErrors = () => {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => error.remove());
};

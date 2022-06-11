import { saveToken, saveUser } from '../utilities/storage.js';
import { apiUrl } from '../utilities/api.js';

const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#adminUsername');
const password = document.querySelector('#password');
const message = document.querySelector('.message-container');

loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();


    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    console.log(usernameValue, passwordValue)

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid values", ".message-container");
    }
    doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
    const url = apiUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },

    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();



        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/account/admin.html";
        }
        if (json.error) {
            displayMessage("warning", "invalid login details", ".message-container");
        }
    } catch (error) {
        console.log(error);
    }
}
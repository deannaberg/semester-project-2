import { clearStorage } from "../utilities/storage.js";

export default function logout() {

    const logoutBtn = document.querySelector("#logout-btn");
    logoutBtn.onclick = function () {
        clearStorage();
        location.href = '/';

    }

}

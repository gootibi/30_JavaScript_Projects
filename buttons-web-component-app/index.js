import { Button } from "./components/Button.js";

customElements.define("custom-button", Button);

const btnSaveChanges = document.querySelectorAll("#btnSaveChanges");

btnSaveChanges.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("You clicked the button!");
    });
});
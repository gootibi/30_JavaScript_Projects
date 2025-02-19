import Elements from "./elements.js";

class Controller {
    constructor() {
        this.elements = new Elements();
        this.addTasks();
        this.checked();
        this.showList();
    }

    addTasks() {
        const { addButton, inputBox } = this.elements;

        addButton.addEventListener("click", () => {
            this.createTask();
        });

        inputBox.addEventListener("keypress", (event) => {
            if (event.key === "Enter") this.createTask();
        });
    };

    createTask() {
        const { inputBox, listContainer } = this.elements;

        let task = inputBox.value.trim();
        if (task === "") alert("You must write something");
        else {
            let li = document.createElement("li");
            li.textContent = task;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.textContent = "\u00d7"; // Close icon
            li.appendChild(span);
        }
        inputBox.value = "";
        this.saveData();
    };

    checked() {
        const { listContainer } = this.elements;
        listContainer.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                event.target.classList.toggle("checked");
                this.saveData();
            } else if (event.target.tagName === "SPAN") {
                event.target.parentElement.remove();
                this.saveData();
            }
        }, false);
    };

    saveData() {
        const { listContainer } = this.elements;
        localStorage.setItem("data", listContainer.innerHTML);
    };

    showList() {
        const { listContainer } = this.elements;
        listContainer.innerHTML = localStorage.getItem("data") || "";
    };
}

export default Controller;

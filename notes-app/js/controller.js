import Elements from "./elements.js";

class Controller {
    constructor() {
        this.elements = new Elements();
        this.createBtn();
        this.deleteNote();
        this.showNotes();
        this.addEnterLineBreak();
    }

    createBtn() {
        const { createBtn, notesContainer } = this.elements;
        createBtn.addEventListener('click', () => {
            let inputBox = document.createElement("p");
            let img = document.createElement("img");
            inputBox.className = "input-box";
            inputBox.setAttribute("contenteditable", "true");
            img.src = "images/delete.png";
            img.alt = "Delete";
            notesContainer.appendChild(inputBox).appendChild(img);
            this.createNotes();
        });
    };

    deleteNote() {
        let { notesContainer } = this.elements;
        notesContainer.addEventListener("click", (event) => {
            if (event.target.tagName === "IMG") {
                event.target.parentElement.remove();
                this.updateStorage();
            } else if (event.target.tagName === "P") {
                this.createNotes();
            }
        });
    };

    createNotes() {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            console.log(nt)
            nt.addEventListener("keyup", () => {
                this.updateStorage();
            });
        });
    };

    updateStorage() {
        const { notesContainer } = this.elements;
        localStorage.setItem("notes", notesContainer.innerHTML);
    };

    showNotes() {
        const { notesContainer } = this.elements;
        notesContainer.innerHTML = localStorage.getItem("notes");
    };

    addEnterLineBreak() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                document.execCommand("insertLineBreak");
                event.preventDefault();
            }
        });
    };
};

export default Controller;
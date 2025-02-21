import Elements from "./elements.js";

class Controller {
    constructor() {
        this.elements = new Elements();
        this.generatePassword();
        this.createPassword();
        this.clickCopy();
    }

    createPassword() {
        const { upperCase, lowerCase, number, symbol, lenght, allChars, passwordBox } = this.elements;
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while (lenght > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        passwordBox.value = password;
    };

    generatePassword() {
        const { generateButton } = this.elements;

        generateButton.onclick = (e) => {
            e.preventDefault();
            this.createPassword();
        };
    };

    copyPassword() {
        const { passwordBox } = this.elements;
        passwordBox.select();
        document.execCommand("copy");

    };

    clickCopy() {
        const { copyText } = this.elements;
        copyText.onclick = (e) => {
            e.preventDefault();
            this.copyPassword();
            alert("Password has been copied!");
        };
    }
};

export default Controller;
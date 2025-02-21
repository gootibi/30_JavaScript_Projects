class Elements {
    lenght = 12;
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
    number = "0123456789";
    symbol = "@#$%^&*()_+~|}{[]></-=";
    allChars = this.upperCase + this.lowerCase + this.number + this.symbol;

    constructor() {
        this.passwordBox = document.getElementById("password");
        this.generateButton = document.querySelector(".generate-btn");
        this.copyText = document.querySelector(".copyText-btn");
    };
};

export default Elements;
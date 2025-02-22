class Elements {
    constructor() {
        this.userInput = document.getElementById('date');
        this.btn = document.querySelector('.btn');
        this.result = document.getElementById('result');
        this.userMaxDate();
    };

    // Set the maximum date to today's date
    userMaxDate() {
        this.userInput.max = new Date().toISOString().split("T")[0];
    }
};

export default Elements;
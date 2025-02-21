export default class Elements {
    questions =  [
        {
            question: "Which is the largest animal in the world?",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ],
        },
        {
            question: "Which is the smallest country in the world?",
            answers: [
                { text: "Vatican City", correct: true },
                { text: "Bhutan", correct: false },
                { text: "Nepal", correct: false },
                { text: "Shri Lanka", correct: false },
            ],
        },
        {
            question: "Which is largest desert in the world?",
            answers: [
                { text: "Kalahari", correct: false },
                { text: "Gobi", correct: false },
                { text: "Sahara", correct: false },
                { text: "Antarctica", correct: true },
            ],
        },
        {
            question: "Which is the smallest continent in the world?",
            answers: [
                { text: "Asia", correct: false },
                { text: "Australia", correct: true },
                { text: "Arctic", correct: false },
                { text: "Africa", correct: false },
            ],
        },
    ];

    constructor() {
        this.questions;
        this.questionElement = document.getElementById("question");
        this.answerButtons = document.getElementById("answer-buttons");
        this.nextButton = document.getElementById("next-btn");
    };
};
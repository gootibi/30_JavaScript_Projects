import Elements from "./elements.js";

export default class Controller {
    currentQuestionInde;
    score;

    constructor() {
        this.elements = new Elements();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.startQuiz();
        
    };
    
    startQuiz() {
        // const { nextButton } = this.elements;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.elements.nextButton.textContent = "Next";
        this.showQuestion();
    };

    showQuestion() {
        this.resetState();
        const { questions, questionElement, answerButtons, nextButton } = this.elements;
        let currentQuestion = questions[this.currentQuestionIndex];
        let questionNo = this.currentQuestionIndex + 1;
        questionElement.textContent = `${questionNo}. ${currentQuestion.question}`

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", (e) => 
                this.selectAnswer(e)
            );
        });

        nextButton.addEventListener("click", () => {
            if (this.currentQuestionIndex < questions.length) {
                this.handleNextButton(this.currentQuestionIndex);
            } else {
                this.startQuiz();
            }
        });
    };

    resetState() {
        const { answerButtons, nextButton } = this.elements;
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    };

    selectAnswer(e) {
        const { nextButton, answerButtons } = this.elements;
        const selectBtn = e.target;
        const isCorrect = selectBtn.dataset.correct === "true";
        if (isCorrect) {
            selectBtn.classList.add("correct");
            this.score++;
        } else {
            selectBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    };

    handleNextButton() {
        const { questions } = this.elements;
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < questions.length) {
            this.showQuestion();
        } else {
            this.showScore();
        };
    };

    showScore() {
        this.resetState();
        const { questionElement, nextButton, questions } = this.elements;
        questionElement.innerHTML = `Your final score is: ${this.score} out of ${questions.length}`;
        nextButton.textContent = "Restart Quiz";
        nextButton.style.display = "block";
        this.currentQuestionIndex = 0;
        this.score = 0;
    };

};
export default class Counter extends HTMLElement {
    css = `
        :host {
            display: block;
            max-width: 9.375rem;
            background-color: #ffffff;
            border-radius: 0.25rem;
            padding: 1rem;
            border: 0.0625rem solid #dddddd;
            user-select: none;
        }

        .value {
            padding: 1.5rem 0;
            text-align: center;
            font-family: sans-serif;
            font-size: 3rem;
        }

        .buttons {
            display: flex;
            gap: 1rem;
        }

        .button {
            flex-grow: 1;
            font-size: 1.5rem;
            padding: 1rem 0;
            background-color: #dddddd;
            color: #333333;
            cursor: pointer;
            outline: none;
            border: none;
            border-radius: 0.25rem;
        }

        .button:active {
            background-color: #cccccc;
        }
    `;

    template = () => {
        return `
            <div class="value">${this.value}</div>
            <div class="buttons">
                <button type="button" class="button button--increment">+</button>
                <button type="button" class="button button--decrement">-</button>
            </div>
        `;
    };

    constructor() {
        super();

        this.value = 0;

        this.attachShadow({ mode: "open" });
        this.render();
    };

    render() {
        this.shadowRoot.innerHTML = `
            <style>${this.css.trim()}</style>
            ${this.template().trim()}
        `;

        this.shadowRoot.querySelector(".button--increment").addEventListener("click", this.onIncrementButtonClick);
        this.shadowRoot.querySelector(".button--decrement").addEventListener("click", this.onDecrementButtonClick);
    };

    onIncrementButtonClick = () => {
        this.value++;
        this.render();
    };

    onDecrementButtonClick = () => {
        this.value = Math.max(0, this.value - 1);
        this.render();
    };
};
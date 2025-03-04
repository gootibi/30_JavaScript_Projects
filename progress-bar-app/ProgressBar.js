class ProgressBar extends HTMLElement {
    static css = `
        :host {
            display: block;
            width: 15.675rem;
            height: 2.5rem;
            background-color: #eeeeee;
            border-radius: 0.25rem;
            overflow: hidden;
        }

        .fill {
            width: 0%;
            height: 100%;
            background-color: var(--fill-color, #222222);
            transition: width 0.25s;
        }
    `;

    static get observedAttributes() {
        return ["percent"];
    };

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const style = document.createElement("style");
        const fill = document.createElement("div");

        style.innerHTML = ProgressBar.css;
        fill.classList.add("fill");

        this.shadowRoot.append(style, fill);
    };

    get percent() {
        const value = this.getAttribute("percent");

        if (isNaN(value)) {
            return 0;
        }

        if (value < 0) {
            return 0;
        }

        if (value > 100) {
            return 100;
        }

        return Number(value);
    };

    set percent(value) {
        this.setAttribute("percent", value);
    };

    attributeChangedCallback(name) {
        if (name === "percent") {
            this.shadowRoot.querySelector(".fill").style.width = `${this.percent}%`;
        }
    };
};

customElements.define('progress-bar', ProgressBar);
import AbstractView from "./AbstractView.js";

export default class Settings extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    };

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration!</p>
        `;
    };
};
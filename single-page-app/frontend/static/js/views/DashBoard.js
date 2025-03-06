import AbstractView from "./AbstractView.js";

export default class DashBoard extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    };

    async getHtml() {
        return `
            <h1>Welcome back, gootibi</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, nemo. Odit modi suscipit, obcaecati earum voluptas perferendis cupiditate veniam, velit quod culpa quisquam nostrum blanditiis optio reiciendis corrupti cum porro.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    };
};
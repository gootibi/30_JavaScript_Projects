// @ts-check
/**
 * @abstract
 */
export default class AbstractView {

    /**
     * @abstract
     * @param {object} model 
     * @returns {string}
     */
    createContent(model) {
        throw new Error("Not implemented");
    };

    /**
     * @param {object} model
     */
    render(model) {
        let app = document.getElementById("app");
        if (app) app.innerHTML = this.createContent(model);
    };
};
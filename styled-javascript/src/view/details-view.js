// @ts-check
import Entity from "../model/entity.js";
import AbstractView from "./abstract-view.js";

export default class DetailsView extends AbstractView {

    /**
     * @param {Entity} model
     * @returns {string}
     */
    createContent(model) {
        return `<h1>Item info</h1>
        <p>
            <strong>Title:</strong> ${model.title} <br>
            <strong>Value:</strong> ${model.value} <br>
            <strong>Details:</strong> ${model.details}
        </p>`;
    }
};
// @ts-check
import Entity from "../model/entity.js";
import AbstractView from "./abstract-view.js";

export default class ListView extends AbstractView {

    /**
     * @param {Entity[]} model 
     * @returns {string}
     */
    createContent(model) {
        return `<h1>List of items</h1>
                <ul>
                ${model.map(item => 
                    `<li>${item.title}</li>`
                ).join("")}
                </ul>`        
    };
};
// @ts-check
import Entity from "./entity.js";

export default class Repository {
    /**
     * @type {Entity[]}
     */
    #data = [];

    /**
     * @param {Entity} item 
     */
    addItem(item) {
        item.id = this.#generateId();
        this.#data.push(item);
    };

    /**
     * @returns {Entity[]}
     */
    getItems() {
        return this.#data;
    };

    /**
     * @param {number} id 
     * @returns {Entity|undefined}
     */
    getItemById(id) {
        return this.#data.find((item) => item.id == id);
    };

    /**
     * @returns {number}
     */
    #generateId() {
        return this.#data.length * 100 + Math.floor(Math.random() * 100);
    };
};
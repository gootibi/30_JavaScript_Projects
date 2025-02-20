// @ts-check
import ControllerIntrerface from "./controller-interface.js";

export default class Executor {
    /**
     * @type {Map<string, ControllerIntrerface>}
     */
    #module = new Map();

    /**
     * 
     * @param {string} name 
     * @param {ControllerIntrerface} controller 
     */
    defineModule(name, controller) {
        this.#module[name] = controller;
    };

    /**
     * @param {string} name
     * @param {any} argument
     */
    launch(name, argument) {
        let controller = this.#module[name];
        if (controller) controller.main(argument);
    };
}
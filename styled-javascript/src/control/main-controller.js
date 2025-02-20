// @ts-check
import Repository from "../model/repository.js";
import ListView from "../view/list-view.js"
import ControllerIntrerface from "./controller-interface.js";

/**
 * @implements {ControllerIntrerface}
 */
export default class MainController {
    repository;

    /**
     * @param {Repository} repository 
     */
    constructor(repository) {
        this.repository = repository;
    };

    main() {
        let model = this.repository.getItems(); //Items from Repository !!!
        let view = new ListView();
        view.render(model);
    };
}
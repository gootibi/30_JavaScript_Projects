// @ts-check
import Repository from "../model/repository.js";
import DetailsView from "../view/details-view.js";
import ControllerIntrerface from "./controller-interface.js";

/**
 * @implements {ControllerIntrerface}
 */
export default class InfoController {
    repository;

    /**
     * @param {Repository} repository
     */
    constructor(repository) {
        this.repository = repository;
    }

    /**
     * @param {number} entityId
     */
    main(entityId) {
        let info = this.repository.getItemById(entityId);
        let view = new DetailsView();
        view.render(info);
    }
};
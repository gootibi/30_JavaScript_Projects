import ListView from "../view/list-view.js"

export default class MainController {
    repository;

    constructor(repository) {
        this.repository = repository;
    };

    main() {
        let model = []; //Items from Repository !!!
        let view = new ListView();
        view.render(model);
    };
}
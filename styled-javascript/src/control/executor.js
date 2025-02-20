export default class Executor {
    #module = {};

    defineModule(name, controller) {
        this.#module[name] = controller;
    };

    launch(name, argument) {
        let controller = this.#module[name];
        // Run MAIN Controller !!!
    };
}
export default class Repository {
    #data = [];

    addItem(item) {
        //Items need ID !!!
        this.#data.push(item);
    };

    getItems() {
        return this.#data;
    };

    getItemById(id) {
        return this.#data.find((item) => true /* if meets Items ID */);
    };

    #generateId() {
        return this.#data.length * 100 + parseInt(Math.random() * 100);
    };
};
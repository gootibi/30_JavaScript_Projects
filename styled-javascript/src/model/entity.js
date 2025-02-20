export default class Entity {
    id;
    title;
    value;
    details;

    constructor(title, value, details) {
        this.title = title;
        this.value = value;
        this.details = details;
        this.id = 0;
    };
};
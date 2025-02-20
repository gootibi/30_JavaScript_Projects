// @ts-check
import Executor from "./control/executor.js";
import InfoController from "./control/info-controller.js";
import MainController from "./control/main-controller.js";
import Entity from "./model/entity.js";
import Repository from "./model/repository.js";

// Creating model layer
let repository = new Repository();
repository.addItem(new Entity("First Item", 100, "First entity in the repository"));
repository.addItem(new Entity("Second Item", 100, "Second entity in the repository"));
repository.addItem(new Entity("Third Item", 100, "Third entity in the repository"));
console.log(repository.getItems());

// Defining modules and starting one
let executor = new Executor();
executor.defineModule("main", new MainController(repository));
executor.defineModule("info", new InfoController(repository));
// executor.launch("main");

let firstId = repository.getItems()[0].id;
executor.launch("info", firstId);
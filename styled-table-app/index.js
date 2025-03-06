import { Table } from "./components/Table.js";

customElements.define("styled-table", Table);

const newData = [
    ["5700", "gootibi", "Hungarian"],
    ["6605", "red.square", "United States"],
];

/**
 *  @type {Table}
 */
const usersTabel = document.getElementById("users");

usersTabel.data = newData;
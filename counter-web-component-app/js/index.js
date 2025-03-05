import Counter from "./components/Counter.js";

customElements.define("counter-component", Counter);

const myCounter = document.getElementById("myCounter");

console.log(myCounter.value);

setTimeout(() => console.log(myCounter.value), 2000); // Get the value with 2 seconds timeout
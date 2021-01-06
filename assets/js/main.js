// test
console.log("main.js module has run");

// imports
import { startGame } from "./modules/modals.js";

// global DOM element references
const welcomeModalForm = $("#welcomeModalForm");

// add event listeners
welcomeModalForm.click(startGame);
// imports
import { startGame } from "./modules/modals.js";

// global DOM element references
const welcomeModalForm = document.querySelector("#welcomeModalForm");

// add event listeners
welcomeModalForm.addEventListener("submit", startGame)
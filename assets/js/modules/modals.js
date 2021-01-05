/* modal.js contains functions related to user interaction with modals interface */
export { startGame };

/* modal DOM element references */
const body = document.querySelector("body"),
    welcomeModal = document.querySelector("#welcomeModal"),
    modalBackdrop = document.querySelector("#modal-backdrop");


// startGame function to verify user name input, create variables for player names and variable for chosen difficulty
function startGame(event) {
    // prevent reload of page on form submission
    event.preventDefault();

    // verify form playerNames input

    // hide welcome modal
    body.classList.remove("modal-open");
    welcomeModal.classList.remove("show");
    modalBackdrop.classList.remove("show");

    // save form values
}
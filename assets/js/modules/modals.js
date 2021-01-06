/* modal.js contains functions related to user interaction with modals interface */
export { startGame };

// startGame function to verify user name input, create variables for player names and variable for chosen difficulty
function startGame(event) {
    // prevent reload of page on form submission
    event.preventDefault();

    // verify form playerNames input

    // hide welcome modal
    $('body').removeClass("modal-open");
    $('#welcomeModal').removeClass("show");
    $('#modal-backdrop').removeClass("show");

    // save form values
}
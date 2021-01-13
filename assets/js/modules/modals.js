/* modal.js contains functions related to user interaction with welcome and gameover modal interfaces */
import { Gameboard } from "./gameboard.js";

export { WelcomeModalObject };


var WelcomeModalObject = {

    /**
     * addSubmitEventListener adds event listener to welcome modal form submit input element
    */
    addSubmitEventListener: function() {
        $("#welcomeModalForm").submit(WelcomeModalObject.submitWelcomeForm);
    },

    /** 
     * hideWelcomeModal function invoked by startGame function
     * removes classes from HTML elements to hide welcome modal and display main page content
    */
    hideWelcomeModal: function() {
        $('body').removeClass("modal-open");
        $('#welcomeModal').removeClass("show");
        $('#modal-backdrop').removeClass("show");   
    },

    /** 
     * startGame function runs when form has passed validation in submitWelcomeForm
     * takes arguments: player names and variable for chosen difficulty
     * closes welcome Modal interface
     */
    startGame: function(player1Name, player2Name, difficultySetting) {
        // initialize scoreboard
        
        // initialize gameboard
        window.gameboard = new Gameboard(difficultySetting);
        // hide welcome modal
        WelcomeModalObject.hideWelcomeModal();
    },

    /** 
     * submitWelcomeForm function runs whenever form on welcome modal page is submitted.
     * Verifies input and displays errors to user if required.
     * Takes submitEvent generated as argument
     */ 
    submitWelcomeForm: function(submitEvent) {
        submitEvent.preventDefault(); // prevent default reloading of page on form submission
        submitEvent.stopPropagation();
        console.log("Modal submitEvent stopPropogation invoked");
        // verify player1name and player2name inputs
        let player1Name = $('#player1Name').val();
        let player2Name = $('#player2Name').val();
        if (!player1Name || !player2Name) {
            // add error message
            return;
        } else if (player1Name.length > 10 || player2Name.length > 10) {
            // add error message
            return;
        }

        // verify one difficulty level has been selected (no need to check both have not been selected since radio input type used in HTML)
        let easySettingCheck = $('#welcomeModalForm #easier').prop("checked");
        let hardSettingCheck = $('#welcomeModalForm #harder').prop("checked");
        if (!(easySettingCheck || hardSettingCheck)) {
            // add error message
            return;
        }

        let difficultySetting = easySettingCheck ? "Easy" : "Hard";
        // if form passes verification above, invoke startGame function and pass welcomeModalForm inputs as arguments
        WelcomeModalObject.startGame(player1Name, player2Name, difficultySetting);
    },
 
}


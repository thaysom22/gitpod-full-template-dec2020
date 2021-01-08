/* modal.js contains functions related to user interaction with welcome and gameover modal interfaces */
import { initializeScoreboard } from "./scoreboard.js";
import { initializeGameboard } from "./gameboard.js";

export { ModalsObject };

// all functions in module are wrapped as static methods in ModalsObject so that they can be spied on by Jasmine
class ModalsObject {
    /** 
     * submitWelcomeForm function runs whenever form on welcome modal page is submitted.
     * Verifies input and displays errors to user if required.
     * Takes submitEvent generated as argument
     */ 
    static submitWelcomeForm(submitEvent) {
        // prevent default reloading of page on form submission
        submitEvent.preventDefault();
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
        ModalsObject.startGame(player1Name, player2Name, difficultySetting);
    }

    /** 
     * startGame function runs when form has passed validation in submitWelcomeForm
     * takes arguments: player names and variable for chosen difficulty
     * closes welcome Modal interface
     */
    static startGame(player1Name, player2Name, difficultySetting) {
        // initialize scoreboard
        initializeScoreboard(player1Name, player2Name);
        // initialize gameboard
        initializeGameboard(difficultySetting);
        // hide welcome modal
        ModalsObject.hideWelcomeModal();
    }

    /** 
     * hideWelcomeModal function invoked by startGame function
     * removes classes from HTML elements to hide welcome modal and display main page content
    */
    static hideWelcomeModal() {
        $('body').removeClass("modal-open");
        $('#welcomeModal').removeClass("show");
        $('#modal-backdrop').removeClass("show");   
    }
    
}


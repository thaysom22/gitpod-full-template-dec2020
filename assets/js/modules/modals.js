export { WelcomeModal, GameoverModal };

import { Gameboard } from "./gameboard.js";
import { Scoreboard } from "./scoreboard.js";
import { ClickToPlay } from "./clickToPlay.js";

class WelcomeModal {
    constructor(){
        addSubmitEventListener(this.submitWelcomeForm); // add event listener at instantiation

        // addSubmitEventListener adds event listener to welcome modal form submit input element
        function addSubmitEventListener(handler) {
            $("#welcome-modal-form").submit(handler);
        };   
    }

    /**
     * verifies user input then displays errors to user or invokes startGame function
     * @param {Object} submitEvent - event object triggered when form is submitted
     */ 
    submitWelcomeForm(submitEvent) {
        submitEvent.preventDefault(); // prevent default reloading of page on form submission
        submitEvent.stopPropagation(); // prevent form input being appended to url
        
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
        let easySettingCheck = $('#welcome-modal-form #easier').prop("checked");
        let hardSettingCheck = $('#welcome-modal-form #harder').prop("checked");
        if (!(easySettingCheck || hardSettingCheck)) {
            // add error message
            return;
        }

        let difficultySetting = easySettingCheck ? "Easy" : "Hard";
        // if form passes verification above, invoke startGame function and pass welcomeModalForm inputs as arguments
        startGame(player1Name, player2Name, difficultySetting);
        
        // removes classes from HTML elements to hide welcome modal and display main page content
        function hideWelcomeModal() {
            $('body').removeClass("modal-open");
            $('#welcome-modal').addClass("hide");
            $('#modal-backdrop').addClass("hide");  
        };

        // instantiates compoentsn as global properties in browser and hides welcome modal   
        function startGame(player1Name, player2Name, difficultySetting) {
            window.scoreboard = new Scoreboard(player1Name, player2Name, difficultySetting); 
            window.gameboard = new Gameboard(difficultySetting); 
            window.clickToPlay = new ClickToPlay(player1Name, player2Name, difficultySetting);
            setTimeout(hideWelcomeModal, 500);
        };
        
    }      
 
}

class GameoverModal{
    constructor(player1Name, player1Score, player2Name, player2Score){
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.player1Score = player1Score;
        this.player2Score = player2Score;

        let result = calculateWinner(this.player1Score, this.player1Score); // return the winner of the game
        setGameoverModalContentInDOM(result); // set DOM content based upon winner
        showGameoverModal(); // remove .hide classes from gameover modal and modal backdrop
        
        function calculateWinner(player1Score, player2Score){
            if (player1Score > player2Score){
                return 1;
            } else if (player2Score > player1Score){
                return 2;
            } else{
                return 0; // TIE
            }
        }
        
        function setGameoverModalContentInDOM(result){
            

        
        }

        function addGameoverModalEventListeners(){

        }
        
        function showGameoverModal(){
            $('body').addClass("modal-open");
            $('#gameover-modal').removeClass("hide");
            $('#modal-backdrop').removeClass("hide"); 
        }
    }
}


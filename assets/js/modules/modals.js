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
        var errorString1 = "";
        var errorString2 = "";
        var error = false;
        if (!player1Name || !player2Name || player1Name.length > 10 || player2Name.length > 10) {
            errorString1 = "Enter player names between 1 and 10 characters"; 
            error = true;  
        } 

        // verify one difficulty level has been selected (no need to check both have not been selected since radio input type used in HTML)
        let easySettingCheck = $('#welcome-modal-form #easier').prop("checked");
        let hardSettingCheck = $('#welcome-modal-form #harder').prop("checked");
        if (!(easySettingCheck || hardSettingCheck)) {
            errorString2 = "Choose a difficulty setting!";
            error = true;
        }

        if (error){
            $('#welcome-modal-error-message1').text(errorString1);
            $('#welcome-modal-error-message2').text(errorString2);
            setTimeout(() => {
                $('#welcome-modal-error-message1').text("");
                $('#welcome-modal-error-message2').text("");
            }, 5000);
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
    constructor(player1Name, player1Score, player2Name, player2Score, difficultySetting){
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.player1Score = player1Score;
        this.player2Score = player2Score;
        this.difficultySetting = difficultySetting;

        let result = calculateWinner(this.player1Score, this.player2Score); // return the winner of the game
        setGameoverModalContentInDOM.bind(this)(result); // set DOM content based upon winner
        addGameoverModalEventListener(this.player1Name, this.player2Name, this.difficultySetting); // add event listener to restart button
        setTimeout(showGameoverModal, 5000); // delay to allow feedback on user answer for final player2 turn
        
        

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
            if (result === 0){
                $('#winner-result span').text(`The game is a DRAW!`);
            } else{
                let winnerName;
                if (result === 1){
                    winnerName = this.player1Name;
                } else{
                    winnerName = this.player2Name;
                }
                $('#winner-result span').text(`${winnerName} is the winner!`);
            }
            // display final player scoreboards
            $('#player1-result .name').text(this.player1Name);
            $('#player1-result .score').text(this.player1Score);
            $('#player2-result .name').text(this.player2Name);
            $('#player2-result .score').text(this.player2Score);

            $('#gameover-buttons-wrapper a').css("pointer-events", "auto"); // activates pointer events on 'new game' link
        }

        function addGameoverModalEventListener(player1Name, player2Name, difficultySetting){

            $('#restart-game-button').click(restartGameHandler);

            function restartGameHandler(clickEvent){
                clickEvent.preventDefault();
                clickEvent.stopPropagation();
                $('#restart-game-button').off("click"); // remove event listener

                // overwrite global objects with fresh instances
                window.scoreboard = new Scoreboard(player1Name, player2Name, difficultySetting); 
                window.gameboard = new Gameboard(difficultySetting); 
                window.clickToPlay = new ClickToPlay(player1Name, player2Name, difficultySetting);

                resetGameboardDOM();
                resetScoreboardDOM();
                resetClickToPlayDOM();
                
                $('#gameover-buttons-wrapper a').css("pointer-events", "none"); // deactivates pointer events on 'new game' link

                setTimeout(hideGameoverModal, 200); // allow short delay for new scorebaord, gamebaord, clickToPlay to be created in memory and DOM
                

                // reset both player scores and turns back to starting values
                function resetScoreboardDOM(){
                    $('#player1-scoreboard .main-score>.value').text(0);
                    $('#player2-scoreboard .main-score>.value').text(0);
                    $('#player1-scoreboard .score-turns>.value').text(5);
                    $('#player2-scoreboard .score-turns>.value').text(5);
                }

                // remove .disabled class from all grid items and reset overlay content
                function resetGameboardDOM(){
                    $('.gameboard-grid-item').removeClass('disabled');
                    $('#variable-value-overlay').text("");
                    $('#gameboard-active-question span').children().remove(); 
                    $('#choose-again-button').off("click"); // turn off event overlay listeners
                    $('#submit-player-answer-button').off("click");
                    $('.gameboard-grid-item').off("click"); // remove event listeners from gameboard grid items
                    $('.gameboard-grid-item').removeClass("cursor");
                }

                function resetClickToPlayDOM(){
                     $('#random-number-wrapper').off("click"); // turn off event listener for ? icon
                }
            }
        }
        
        function showGameoverModal(){
            $('body').addClass("modal-open");
            $('#gameover-modal').removeClass("hide");
            $('#modal-backdrop').removeClass("hide"); 
        }

        function hideGameoverModal(){
            $('body').removeClass("modal-open");
            $('#gameover-modal').addClass("hide");
            $('#modal-backdrop').addClass("hide"); 
        }
    }
}


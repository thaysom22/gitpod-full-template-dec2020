import { getRandomRange } from "./helpers.js";

export { ClickToPlay };

class ClickToPlay{
    constructor(player1Name, player2Name, difficultySetting) {
        this.variableValue = null;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.difficultySetting = difficultySetting; 
        this.activePlayer = null; 
        
        this.setupNewTurn(); // when game is initially loaded it is beginning of player turn

    }

    setupNewTurn(){

        this.variableValue = null; // reset variableValue property
        updateVariableinDOM(this.variableValue); // sets #random-number-wrapper element content in DOM to ?
        updateActivePlayer().bind(this); // update activePlayer property and display active player's name in #current-player-name element
        addClickToPlayEventListener().bind(this); // turn on event listener for #random-number-wrapper element
        $('#click-to-play-instruction').text("Click to Play!"); // reset instruction

        function addClickToPlayEventListener(){
            $('#random-number-wrapper').click(clickToPlayHandler.bind(this)); // bind 'this' as clickToPlay instance, inside event handler context
        }

        function updateActivePlayer(){
            if (this.activePlayer === null || this.activePlayer == 2) {
                this.activePlayer = 1;
                $('#current-player-name').text(player1Name);
            } else if (this.activePlayer === 1) {
                this.activePlayer = 2;
                $('#current-player-name').text(player2Name);
            }
        }

        function updateVariableInDOM(variableValue){
            if (variableValue === null) {
                $('.fas.fa-question').removeClass("hide");
                $('#variable-value').addClass("hide");
            } else {             
                $('.fas.fa-question').addClass("hide");
                $('#variable-value').text(variableValue);
                $('#variable-value').removeClass("hide");
            }
        }

        function clickToPlayHandler(clickEvent) {
            clickEvent.preventDefault();
            clickEvent.stopPropogation();
            $('#random-number-wrapper').off("click"); // remove event listener once player clicks ? element
            $('#click-to-play-instruction').text("Click the expression with the highest value..."); // update instruction once player clicks ? element
            // returns value for this.variableValue and animates changing number in DOM by calls to updateVariableInDOM 
            this.variableValue = generateVariableValue(this.difficultySetting);
            // delay for completion of animated changing random number
            setTimeout(() => {
                window.gameboard.setupNewTurn(this.variableValue);// add event listeners to all non-disabled gameboard grid items
            }, 2000);

            function generateVariableValue(difficultySetting) {
                let finalVariable = numberGenerator(difficultySetting); 
                let count = 0;
                // setInterval schedules 10 function calls over 2 seconds. Script execution continues asynchronously.
                let intervalID = setInterval(() => {
                    if (count === 9){
                        updateVariableInDOM(finalVariable);
                        clearInterval(intervalID);
                    } else {
                        let tempVariable = numberGenerator(difficultySetting);
                        updateVariableInDOM(tempVariable);
                        count += 1; 
                    }   
                }, 200);
                
                return finalVariable;
                
                // uses getRandomRange function to produce a random number in required range
                function numberGenerator(difficultySetting){
                    var randomVariable;
                    if (difficultySetting == "Easy") {
                        randomVariable = getRandomRange(1, 10);
                    } else { // difficultySetting === "Hard"
                        randomVariable = getRandomRange(-10, 10);
                    }

                    return randomVariable;
                }

            }

        }

    }
    
}
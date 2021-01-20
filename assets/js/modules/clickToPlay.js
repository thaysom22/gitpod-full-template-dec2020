import { getRandomRange } from "./helpers.js";

export { ClickToPlay };

class ClickToPlay{
    constructor(player1Name, player2Name, difficultySetting) {
        this.variableValue = null;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.difficultySetting = difficultySetting; 
        this.activePlayer = 1; 
        
        this.beginPlayerTurn(); // when game is initially loaded it is beginning of player turn

    }

    beginPlayerTurn(){

        // **** add class for pulse effect for ? element

        updateCurrentPlayerInDOM().bind(this); // display active player's name in #current-player-name element in DOM
        addClickToPlayEventListener().bind(this); // turn on event listener for ? element

        function addClickToPlayEventListener(){
            $('#random-number-wrapper').click(clickToPlayHandler.bind(this)); // bind 'this' context inside event handler
        }

        function updateCurrentPlayerInDOM(){
            if (this.activePlayer === 1) {
                $('#current-player-name').text(player1Name);
            } else {
                $('#current-player-name').text(player2Name);
            }
        }
    }

    endPlayerTurn(){
        // ***** switch current player number in data
    }

    generateVariableValue(difficultySetting) {
        let finalVariable = numberGenerator(difficultySetting); // generate and store return value before waiting for set interval to execute
        let count = 0;
        let intervalID = setInterval(() => {
            if (count === 9){
                this.updateVariableInDOM(finalVariable);
                clearInterval(intervalID);
            } else {
                let intermediateVariable = numberGenerator(difficultySetting);
                this.updateVariableInDOM(intermediateVariable);
                count += 1; 
            }   
        }, 200);
        
        return finalVariable;
        
        // callback used for for window.setInterval method
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

    /**
     * updates #random-number-wrapper element contents in DOM to match value of this.variableValue
     * @param {Integer} variableValue 
     */
    updateVariableInDOM(variableValue){
        if (variableValue === null) {
            $('.fas.fa-question').removeClass("hide");
            $('#variable-value').addClass("hide");
        } else {             
            $('.fas.fa-question').addClass("hide");
            $('#variable-value').text(variableValue);
            $('#variable-value').removeClass("hide");
        }
    }

    startCountdownTimer(difficultySetting){

    }

    

    

    removeClickToPlayEventListener(){
        $('#random-number-wrapper').off("click"); 
    }

    beginPlayerTurn(){
        this.removeClickToPlayEventListener(); // remove event listener from #random-number-wrapper element
        this.variableValue = this.generateVariableValue(this.difficultySetting);// delay for random number generation. variableValue set to return value of generateVariableValue method
        // delay execution of following methods for 2000ms whilst generateVariableValue executes on call stack
        setTimeout(() => {
            this.startCountdownTimer(this.difficultySetting); // start countdown timer
            window.gameboard.addGridEventListeners();// add event listeners to all non-disabled gameboard grid items
            window.gameboard.evaluateQuestions(this.variableValue); // add answer values for all gameboard questions
            window.gameboard.rankQuestions();
        }, 2000);
        
    }

    /**
     * Higher order function to abstract functionality of clickToPlay by grouping other method calls
     */
    endPlayerTurn(){
        this.updateCurrentPlayerInDOM(this.activePlayerName, this.player1Name, this.player2Name);
        this.variableValue = null;
        this.updateVariableInDOM(this.variableValue);
        
    }
}
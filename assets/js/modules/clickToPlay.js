export { ClickToPlay };

// ClickToPlay component has a random value generator which is passed to gameboard each player turn and a countdown timer which causes turn to end with incorrect answer when it runs to 0
class ClickToPlay{
    constructor(player1Name, player2Name, difficultySetting) {
        this.variableValue = null;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.difficultySetting = difficultySetting; 
        this.activePlayer = player1Name; // game starts with player 1
        this.updateCurrentPlayerInDOM(this.activePlayer);
        this.addClickToPlayEventListener(); // when game is started it is beginning of player turn so click event listener is bound
        
    }

    generateVariableValue(difficultySetting){

    }

    updateVariableInDOM(variableValue){

    }

    startCountdownTimer(difficultySetting){

    }

    updateCurrentPlayerInDOM(activePlayer){

    }

    addClickToPlayEventListener(){
        $('#random-number-wrapper').click(this.beginPlayerTurn.bind(this)); // keep object context inside event handler
    }

    removeClickToPlayEventListener(){
        $('#random-number-wrapper').unbind("click", this.beginPlayerTurn); 
    }

    beginPlayerTurn(){

        // after delay for random number generation, 
        
        // add event listeners to all non-disabled gameboard grid items
        
        this.startCountdownTimer(this.difficultySetting); // start countdown timer
        this.removeClickToPlayEventListener(); // remove event listener from #random-number-wrapper element
    }
}
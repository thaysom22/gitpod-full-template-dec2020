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
        this.addClickToPlayEventListener(); // when game is started it is begiining of player turn so click to play is clickable
        
    }

    updateVariableInDOM(variableValue){

    }

    startCountdownTimer(difficultySetting){

    }

    updateCurrentPlayerInDOM(activePlayer){

    }

    addClickToPlayEventListener(){
        $('#random-number-wrapper').click(this.beginTurn.bind(this)); // keep object context inside event handler
    }
}
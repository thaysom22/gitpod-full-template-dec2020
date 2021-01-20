export { Scoreboard };

class Scoreboard {
    constructor(player1Name, player2Name){
        this.player1Board = {
            playerName: player1Name,
            playerScore: 0,
            playerTurns: 8, // turns remaining
            active: true
        };
        this.player2Board = {
            playerName: player2Name,
            playerScore: 0,
            playerTurns: 8, // when player2Board.playerTurns === 0, game ends
            active: false
        };

        initializeScoreboardDOM(this.player1Board, this.player2Board); // initialize player data on scoreboard in DOM
        this.beginPlayerTurn(); // start player turn on construction

        function initializeScoreboardDOM(player1, player2) {
            $('#player1-scoreboard .scoreboard-title').text(player1.playerName);
            $('#player2-scoreboard .scoreboard-title').text(player2.playerName);
            $('#player1-scoreboard .main-score>span').text(this.player1.playerScore);
            $('#player2-scoreboard .main-score>span').text(this.player2.playerScore);
            $('#player1-scoreboard .score-turns>span').text(this.player1.playerTurns);
            $('#player2-scoreboard .score-turns>span').text(this.player2.playerTurns);

            return;
        }   
    }

    /**
     * calculates score for player turn based on arguments, updates playerScore and playerTurns data stored on instance, updates scoreboard content in DOM
     * invokes endGameModal if players are out of turns
     * @param {Boolean} responseCorrect 
     * @param {*Number} questionRanking 
     */
    endPlayerTurn(responseCorrect, questionRanking) {

        let playerTurnScore = calculateTurnScore(responseCorrect, questionRanking);
        updateScoreboardData(playerTurnScore).bind(this);
        updateScoreboardDOM().bind(this);
        endGameCheck().bind(this);

        // returns the score for a player's turn
        function calculateTurnScore(responseCorrect, questionRanking){
            if (!responseCorrect) {
                return -50;
            } else if (questionRanking === 0) {
                return 200;
            } else {
                return (-10*questionRanking + 160);
            }
        }

        // updates player1Board and player2Board objects
        function updateScoreboardData(playerTurnScore) {
            if (this.player1Board.active === true) { // if turn belongs to player1...
                this.player1Board.playerScore += playerTurnScore;
                this.player1Board.playerTurns -= 1;
                this.player1Board.active = false;
                this.player2Board.active = true;
            } else { // if turn belongs to player2...
                this.player2Board.playerScore += playerTurnScore;
                this.player2Board.playerTurns -= 1;
                this.player2Board.active = false;
                this.player1Board.active = true;
            }

            return;
        }
        
        // updates scoreboard in DOM
        function updateScoreboardDOM() {    
            $('#player1-scoreboard .main-score>span').text(this.player1Board.playerScore);
            $('#player2-scoreboard .main-score>span').text(this.player2Board.playerScore);
            $('#player1-scoreboard .score-turns>span').text(this.player1Board.playerTurns);
            $('#player2-scoreboard .score-turns>span').text(this.player2Board.playerTurns);
            
            return;
        }

        function endGameCheck(){
            if (this.player2Board.playerTurns === 0) { // once player2 runs out of turns

                // **** launch endGameModal(player1Name, player1Score, player2Name, player2Score)

            }

            return;
        }


    }

    /**
     * adds class to animate current player scoreboard element in DOM until user interaction with clickToPlay starts turn
     */
    beginPlayerTurn() {
        if (this.player1Board.active === true) {
            // **** add hover.css class to player1 scoreboard in DOM
        } else {
            // **** add hover.css class to player1 scoreboard in DOM
        }
    }
    

}
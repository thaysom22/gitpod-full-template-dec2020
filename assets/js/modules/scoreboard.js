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

        initializeScoreboardNamesDOM(this.player1Board.playerName, this.player2Board.playerName); // initialize player names on scoreboard in DOM
        this.updateScoreboardDOM(this.player1Board, this.player2Board); // initialize rest of scoreboard in DOM

        function initializeScoreboardNamesDOM(player1Name, player2Name) {
            $('#player1-scoreboard .scoreboard-title').text(player1Name);
            $('#player2-scoreboard .scoreboard-title').text(player2Name);
            return;
        }   
    }

    /**
     * updates scoreboard object data by incrementing player score by value of argument and decrementing player turns for active player
     * @param {Number} playerTurnScore 
     */
    updateScoreboardData(playerTurnScore) {
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

    }

    /**
     * updates text content of scoreboard in DOM
     */
    updateScoreboardDOM() {    
        $('#player1-scoreboard .main-score>span').text(this.player1Board.playerScore);
        $('#player2-scoreboard .main-score>span').text(this.player2Board.playerScore);
        $('#player1-scoreboard .score-turns>span').text(this.player1Board.playerTurns);
        $('#player2-scoreboard .score-turns>span').text(this.player2Board.playerTurns);
        return;
    }

    /**
     * returns the score for a player's turn: -50 points for an incorrect answer, 200 points for a correct answer to the highest value question, 150 points to 10 points for other correct answers depending on ranking of selected question
     * @param {Boolean} responseCorrect 
     * @param {*Integer} questionRanking 
     */
    calculateTurnScore(responseCorrect, questionRanking){
        if (!responseCorrect) {
            return -50;
        } else if (questionRanking === 0) {
            return 200;
        } else {
            return (-10*questionRanking + 160);
        }
    }

}
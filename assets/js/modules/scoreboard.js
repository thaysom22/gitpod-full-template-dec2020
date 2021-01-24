export { Scoreboard };
import { GameoverModal } from "./modals.js";

class Scoreboard {
    constructor(player1Name, player2Name, difficultySetting){
        this.player1Board = {
            playerName: player1Name,
            playerScore: 0,
            playerTurns: 1, // turns remaining
            active: true // player1 starts
        };
        this.player2Board = {
            playerName: player2Name,
            playerScore: 0,
            playerTurns: 1, // when player2Board.playerTurns === 0, game ends
            active: false
        };
        this.difficultySetting = difficultySetting;

        initializeScoreboardDOM(this.player1Board, this.player2Board); // initialize player data on scoreboard in DOM

        function initializeScoreboardDOM(player1, player2) {
            $('#player1-scoreboard .scoreboard-title').text(player1.playerName);
            $('#player2-scoreboard .scoreboard-title').text(player2.playerName);
            $('#player1-scoreboard .main-score>.value').text(player1.playerScore);
            $('#player2-scoreboard .main-score>.value').text(player2.playerScore);
            $('#player1-scoreboard .score-turns>.value').text(player1.playerTurns);
            $('#player2-scoreboard .score-turns>.value').text(player2.playerTurns);
            return;
        }   
    }

    /**
     * calculates score for player turn, updates playerScore and playerTurns data stored on instance, updates scoreboard content in DOM
     * invokes endGameModal if players are out of turns
     * @param {Boolean} responseCorrect 
     * @param {*Number} questionRanking 
     */
    endPlayerTurn(responseCorrect, questionRanking) {

        let playerTurnScore = calculateTurnScore(responseCorrect, questionRanking);
        updateScoreboardData.bind(this)(playerTurnScore);
        updateScoreboardDOM.bind(this)();
        endGameCheck.bind(this)();

        // returns the score for a player's turn
        // highest: 10 points, 2nd: 5, 3rd: 4, 4th: 3, 5th: 2, 6th: 1, other: 0, incorrect: -1
        function calculateTurnScore(responseCorrect, questionRanking){
            if (!responseCorrect) {
                return -1;
            } else if (questionRanking === 0) {
                return 10;
            } else if (questionRanking > 0 && questionRanking < 5) {
                return (-1*questionRanking + 6);
            } else {
                return 1;
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
            $('#player1-scoreboard .main-score>.value').text(this.player1Board.playerScore);
            $('#player2-scoreboard .main-score>.value').text(this.player2Board.playerScore);
            $('#player1-scoreboard .score-turns>.value').text(this.player1Board.playerTurns);
            $('#player2-scoreboard .score-turns>.value').text(this.player2Board.playerTurns);
            return;
        }

        // check at end of every turn: when player2 runs out of turns instatiate GameOverModal as global object to end game
        function endGameCheck(){
            if (this.player2Board.playerTurns === 0) { 
                window.gameoverModal = new GameoverModal(this.player1Board.playerName, this.player1Board.playerScore, this.player2Board.playerName, this.player2Board.playerScore, this.difficultySetting);
            }
            return;
        }
    }
}
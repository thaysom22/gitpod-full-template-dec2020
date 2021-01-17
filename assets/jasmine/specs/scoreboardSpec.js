import { Scoreboard } from "./../../js/modules/scoreboard.js"; 

describe("Scoreboard object functions", function() {

    var scoreboard; // declared in scope that both all specs can access
    
    beforeEach(() => {
        // create version of scoreboard in DOM for testing before each spec
        setFixtures(`
            <!-- Scoreboard section -->
            <section id="scoreboards-wrapper" class="section-wrapper">
                <div id="player1-scoreboard" class="player-scoreboard">
                    <h4 class="scoreboard-title">player1Name</h4>
                    <div class="main-score">
                        <div class="score-aside score-turns">
                            <span>player1Turns</span>
                        </div>
                        <span>player1Score</span>
                    </div>   
                </div>
                <div id="player2-scoreboard" class="player-scoreboard">
                    <h4 class="scoreboard-title">player2Name</h4>
                    <div class="main-score">
                        <div class="score-aside score-turns">
                            <span>player2Turns</span>
                        </div>
                        <span>player2Score</span>
                    </div>
                </div>
            </section>  
        `);

        scoreboard = new Scoreboard("Tabatha", "Azir"); // instantiate a new scoreboard object with player names before each spec
    });

    describe("when game is started and scoreboard is initialized", function() {

        it("expect scoreboard object to be instance of Scoreboard class", function() {
            expect(scoreboard).toBeInstanceOf(Scoreboard);
        });

         it("expect initial scoreboards set correctly in data and DOM", function() {
            expect(scoreboard.player1Board.playerName).toBe("Tabatha");
            expect($('#player1-scoreboard .scoreboard-title')).toContainText(scoreboard.player1Board.playerName);
            expect(scoreboard.player2Board.playerName).toBe("Azir");
            expect($('#player2-scoreboard .scoreboard-title')).toContainText(scoreboard.player2Board.playerName);
            expect(scoreboard.player1Board.playerScore).toBe(0);
            expect($('#player1-scoreboard .main-score>span')).toContainText(scoreboard.player1Board.playerScore);
            expect(scoreboard.player2Board.playerScore).toBe(0);
            expect($('#player2-scoreboard .main-score>span')).toContainText(scoreboard.player2Board.playerScore);
            expect(scoreboard.player1Board.playerTurns).toBe(8);
            expect($('#player1-scoreboard .score-turns>span')).toContainText(scoreboard.player1Board.playerTurns);
            expect(scoreboard.player2Board.playerTurns).toBe(8);
            expect($('#player2-scoreboard .score-turns>span')).toContainText(scoreboard.player2Board.playerTurns);
        });

    });

    describe("when updated after a player turn", function() {

        beforeEach(() => {
            scoreboard.updateScoreboardData(50);
            scoreboard.updateScoreboardData(10);
            scoreboard.updateScoreboardData(-30);
            scoreboard.updateScoreboardData(120);
            scoreboard.updateScoreboardData(40);
            scoreboard.updateScoreboardDOM();
        });

        it("new player1Board property should be correct", function() {
            expect(scoreboard.player1Board.playerScore).toBe(60);
            expect(scoreboard.player1Board.playerTurns).toBe(5);
        });

        it("new player2Board property should be correct", function() {
            expect(scoreboard.player2Board.playerScore).toBe(130);
            expect(scoreboard.player2Board.playerTurns).toBe(6);
        });

        it("correct player to be active", function() {
            expect(scoreboard.player2Board.active).toBeTrue();
            expect(scoreboard.player1Board.active).toBeFalse();
        });

        it("DOM is updated correctly", function() {
            expect($('#player1-scoreboard .main-score>span')).toContainText(scoreboard.player1Board.playerScore);
            expect($('#player2-scoreboard .main-score>span')).toContainText(scoreboard.player2Board.playerScore);
            expect($('#player1-scoreboard .score-turns>span')).toContainText(scoreboard.player1Board.playerTurns);
            expect($('#player2-scoreboard .score-turns>span')).toContainText(scoreboard.player2Board.playerTurns);
        });

    });

    describe("calculateTurnScore method when passed data from gameboard object", function() {
        
        it("returns correct score for questions answered correctly", function(){
            expect(scoreboard.calculateTurnScore(true, 8)).toBe(80);
            expect(scoreboard.calculateTurnScore(true, 2)).toBe(140);
            expect(scoreboard.calculateTurnScore(true, 0)).toBe(200);
        });

        it("returns correct score for question answered incorrectly", function(){
            expect(scoreboard.calculateTurnScore(false, 8)).toBe(-50);
            expect(scoreboard.calculateTurnScore(false, 2)).toBe(-50);
        });
      

    });

});
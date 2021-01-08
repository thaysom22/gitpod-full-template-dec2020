// imports
import { ModalsObject } from "../js/modules/modals.js";


/* Tests for welcome modal form */
describe("Welcome modal form", function(){

    // create simplified version of welcome modal with form in DOM for testing before each spec
    beforeEach(() => {
        setFixtures(`
            <div class="modal show" id="welcomeModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div id="welcome-input-form-wrapper">
                        <form id="welcomeModalForm">
                            <div class="player-name-wrapper">
                                <label for="player1Name">Player 1</label>
                                <input type="text" id="player1Name" name="player1Name" placeholder="Enter Name" size="10">
                            </div>
                            <div class="player-name-wrapper">
                                <label for="player2Name">Player 2</label>
                                <input type="text" id="player2Name" name="player2Name" placeholder="Enter Name" size="10">
                            </div>
                            <span>Choose difficulty level:</span>
                            <div class="choose-difficulty-wrapper">
                                <input type="radio" id="easier" name="difficultyLevel" value="easier">
                                <label for="easier">Easier</label>
                                <input type="radio" id="harder" name="difficultyLevel" value="harder">
                                <label for="harder">Harder</label>
                            </div>
                            <div id="start-game-button-wrapper">
                                <input id="start-game-button" type="submit" value="Start Game">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>  
            <!-- modal-backdrop layer for modals -->
            <div id="modal-backdrop" class="modal-backdrop show"></div>
        `)
        // add 'modal-open' class to body element
        $('body').addClass("modal-open");
        
    });

    describe("when form is submitted", function() {

        it("should not start game when any empty player name field", function() {
            var startGameSpy = spyOn(ModalsObject, "startGame");
            // set input fields as empty strings
            $('#player1Name').val("");
            $('#player2Name').val("");
            // invoke submitWelcomeForm function in 'modals' module with submitEvent parameter to emulate effects of user interaction 
            ModalsObject.submitWelcomeForm(new Event('submit'));
            expect(startGameSpy).not.toHaveBeenCalled();
        });

        it("should not run startGame function when a player name longer than 10 characters is entered", function() {
            var startGameSpy = spyOn(ModalsObject, "startGame");
            $('#player1Name').val("Longer than ten characters");
            $('#player2Name').val("Tom");
            ModalsObject.submitWelcomeForm(new Event('submit'));
            expect(startGameSpy).not.toHaveBeenCalled();
        });

        it("should not run startGame function when no difficulty level is selected", function() {
            var startGameSpy = spyOn(ModalsObject, "startGame");
            // set both radio box fields for difficulty as unchecked
            $("#easier").prop("checked", false);
            $("#harder").prop("checked", false);
            ModalsObject.submitWelcomeForm(new Event('submit'));
            expect(startGameSpy).not.toHaveBeenCalled();
        });

    });

    describe("when game is started", function() {

        it("startGame function called with correct arguments when player names entries are both valid and a difficulty level is selected", function() {
            var startGameSpy = spyOn(ModalsObject, "startGame");
            $('#player1Name').val("Sophie");
            $('#player2Name').val("Harry");
            $("#easier").prop("checked", true);
            $("#harder").prop("checked", false);
            console.dir(ModalsObject);
            ModalsObject.submitWelcomeForm(new Event('submit'));
            expect(startGameSpy).toHaveBeenCalledWith("Sophie", "Harry", "Easy");
        });

        it("should remove classes correctly on DOM elements to close welcome modal ", function() {
            ModalsObject.startGame("Mark", "Sally", "Hard");
            expect($('body')).not.toHaveClass('modal-open');
            expect($('#welcomeModal')).not.toHaveClass('show');
            expect($('#modal-backdrop')).not.toHaveClass('show');
        });

    });

});
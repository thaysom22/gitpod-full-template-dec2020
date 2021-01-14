// imports
import { WelcomeModal } from "../../js/modules/modals.js";


/* Tests for welcome modal form */
describe("Welcome modal form", function(){

    var welcomeModal;
    beforeEach(() => {
        // create simplified version of welcome modal with form in DOM for testing before each spec
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
        `);
        $('body').addClass("modal-open"); // add 'modal-open' class to body element
        welcomeModal = new WelcomeModal(); // create fresh instance of WelcomeModal class
    });

    describe("when game is started", function() {

        beforeEach(() => {
            $('#player1Name').val("Tom");
            $('#player2Name').val("Sally");
            $('#welcomeModalForm #easier').prop("checked", true);

            welcomeModal.submitWelcomeForm(new Event("submit"));
        });        

        it("should remove classes correctly on DOM elements to close welcome modal ", function() {
            
            expect($('body')).not.toHaveClass('modal-open');
            expect($('#welcomeModal')).not.toHaveClass('show');
            expect($('#modal-backdrop')).not.toHaveClass('show');
        });

    });

});
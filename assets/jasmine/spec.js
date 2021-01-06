// imports
import * as modals from "../js/modules/modals.js";

/* Tests for welcome modal form */
describe("Welcome modal form", function(){
    
    beforeEach(() => {
        setFixtures(`
<div class="modal show" id="welcomeModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-label="Welcome-to-the-game" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <!-- Main heading section within modal -->
        <header id="modal-header-wrapper" class="section-wrapper">
            <h1 id="modal-main-heading" class="heading">Substitution Skirmish!</h1>
            <div id="modal-header-info-wrapper" class="trigger-wrapper" aria-label="Click to view instructions on how to play">
                <!-- CREDIT: Font Awesome -->
                <i aria-hidden="true" class="fas fa-info-circle" title="How to Play"></i>
                <span>How to Play</span>
            </div>
        </header>

        <!-- Input and submit in modal -->
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

        <!-- Footer section in modal -->
        <footer id="modal-footer-wrapper" class="section-wrapper">
           <!-- ABOUT section always visible on welcome modal -->
            <div id="modal-about-content-wrapper" class="section-wrapper">
                <div id="modal-dev-portfolio-wrapper">
                    <a href="https://thaysom22.github.io/portfolio_project/" target="_blank" aria-label="Click to open Thomas Haysom Developer Portfolio" title="Thomas Haysom - Developer Portfolio">
                    <i class="far fa-file" aria-hidden="true" title="Click to open developer portfolio"></i>
                    <span>thaysom22</span>
                    <span>Developer Portfolio</span>
                    </a>
                </div>
                <div id="modal-copyright-wrapper">
                    <span>For eductional purposes only</span>
                    <span>&copy; Thomas Haysom 2020</span>
                </div>
                <div id="modal-github-repo-wrapper">
                    <a href="https://github.com/thaysom22/maths-substitution-game" target="_blank" aria-label="Click to open GitHub repo for this site" title="GitHub Repo: maths-substitution-game">
                    <i class="fab fa-github-square" aria-hidden="true" title="Click to open GitHub repo for this site"></i>
                    <span>Code for this site</span>
                    <span>Suggestions welcome!</span>
                    </a>
                </div>
            </div>
        </footer>
    </div>
  </div>
</div>  
<!-- modal-backdrop layer for modals -->
<div id="modal-backdrop" class="modal-backdrop show"></div>
        `)
    });

    
    it("startGame function should be defined", function() {
        expect(modals.startGame).toBeDefined();
    });

    it("player name fields should be empty when document loads", function() { 
        expect($('#welcomeModalForm #player1Name')).toHaveValue(""); 
        expect($('#welcomeModalForm #player2Name')).toHaveValue("");
    });

    it("neither difficulty level option should be selected when document loads", function() {

    });

    it("should not sumbit with an empty player name field and should notify user", function() {

    });

    it("should not submit with a player name greater than 10 characters and should notify user", function() {

    });

    it("should not submit without a difficulty level seleced and should notify user", function() {

    });

    it("should close welcome modal when correctly submitted", function() {

    });

    it("should store player names enteredand difficulty level selected", function() {

    })
});
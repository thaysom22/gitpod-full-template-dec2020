// imports
import { WelcomeModal } from "../../js/modules/modals.js";
import { GameoverModal } from "../../js/modules/modals.js";
import { Scoreboard } from "../../js/modules/scoreboard.js";
import { ClickToPlay } from "../../js/modules/click-to-play.js";
import { Gameboard } from "../../js/modules/gameboard.js";
import { addAboutSectionListener, addModalInfoListener, addMainInfoListener } from "../../js/main.js";

describe("Substitution skirmish game", function(){

    // set up entire original <body> of html before every spec
    beforeEach(() => {
        setFixtures(`
            <body class="modal-open">
            <div id="grid-container-body" class="hide">
                <!-- Main heading section -->
                <header id="header-wrapper" class="section-wrapper">
                    <h1 id="main-heading" class="heading">Substitution Skirmish!</h1>
                    <div id="header-info-wrapper" class="trigger-wrapper" title="How to Play" aria-label="Click to view instructions on how to play">
                        <!-- CREDIT: Font Awesome -->
                        <i aria-hidden="true" class="fas fa-info-circle"></i>
                        <span>How to Play</span>
                    </div>
                </header>
                <div class="hide info-contents" aria-label="Instructions on how to play" title="Instructions">
                    <ol>
                        <li>Enter names for both players and choose a difficulty level</li>
                        <li>Player 1 clicks on ? icon to generate a random number for the value of x</li>
                        <li>Player 1 chooses an expression from the grid and then enters the value of the expression for their x</li>
                        <li>When player 1 enters a value, it is the end of their turn and the expression they chose is removed from the grid</li> 
                        <li>Higher value correct answers gain more points</li>
                        <li>If answer is incorrect, player loses a point for turn</li>
                        <li>Player 2 begins their turn</li>
                        <li>Once player 2 runs out of turns, the game is over and the player with the highest score wins!</li>
                    </ol>
                </div>
                <!-- Click to play section -->
                <section id="click-to-play-wrapper" class="section-wrapper">
                    <span id="current-player-name"></span>
                    <div id="random-number-wrapper" class="trigger-wrapper" aria-label="Click to play" title="Click to play">
                        <!-- CREDIT: Font Awesome -->
                        <i aria-hidden="true" class="fas fa-question" aria-label="Click to start turn"></i>
                        <span id="variable-value" class="hide" aria-label="Random number"></span>
                    </div>
                    <div id="counttimer-wrapper" class="trigger-wrapper">
                        <p id="click-to-play-instruction">Click to Play!</p>
                    </div>
                </section>
                <!-- Scoreboard section -->
                <section id="scoreboards-wrapper" class="section-wrapper">
                    <div id="player1-scoreboard" class="player-scoreboard" title="player 1 scoreboard" aria-label="player 1 scoreboard">
                        <h4 class="scoreboard-title">player1Name</h4>
                        <div class="main-score">
                            <div class="score-turns">
                                <span class="value"></span>
                                <span class="label">TURNS</span>
                            </div>
                            <span class="value"></span>
                            <span class="label">SCORE</span>
                        </div>   
                    </div>
                    <div id="player2-scoreboard" class="player-scoreboard" title="player 2 scoreboard" aria-label="player 2 scoreboard">
                        <h4 class="scoreboard-title">player2Name</h4>
                        <div class="main-score">
                            <div class="score-turns">
                                <span class="value"></span>
                                <span class="label">TURNS</span>
                            </div>
                            <span class="value"></span>
                            <span class="label">SCORE</span>
                        </div>
                    </div>
                </section>
                <!-- Main gameboard section -->
                <section id="gameboard-wrapper" class="section-wrapper">
                    <!-- gameboard overlay - hidden until grid item is clicked during a player turn --> 
                    <div id="gameboard-overlay" class="hide" aria-label="gameboard anwser question">
                        <div id="gameboard-overlay-content">
                            <div id="gameboard-active-question">
                                <span aria-label="chosen mathematical expression" title="chosen mathematical expression"></span>
                            </div>
                            <h3>Evaluate when x = <span id="variable-value-overlay"></span></h3>
                            <form>
                                <input type="text" id="player-answer" name="playerAnswer" size="4" aria-label="Enter answer here" title="Enter answer here">
                                <span id="player-answer-error-message" aria-label="Answer error message" title="Answer error message"></span>
                                <button id="submit-player-answer-button" type="submit" title="Submit answer" aria-label="submit answer">Enter</button>
                                <button id="choose-again-button" type="button" title="Choose again" aria-label="Choose again">Choose again</button>
                            </form>
                            <div id="answer-feedback" class="hide" aria-label="feedback on answer">
                                <i></i>
                                <span class="feedback1"></span>
                                <span class="feedback2"></span>
                                <span class="feedback3"></span>
                            </div>
                        </div>
                    </div>
                    <div id="gameboard-grid-container">
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                        <div class="gameboard-grid-item"><span class="grid-expression"></span></div>
                    </div>
                </section>
                <!-- Footer section -->
                <footer id="footer-wrapper" class="section-wrapper">
                    <!-- On page load about-trigger has plus icon and footer content is not visible  -->
                    <div id="about-trigger-wrapper" class="trigger-wrapper" aria-label="view ABOUT section content" title="view ABOUT section content">
                        <span>ABOUT</span>
                        <!-- CREDIT: Font Awesome -->
                        <i aria-hidden="true" class="fas fa-plus-square"></i>   
                    </div>
                    <div id="about-content-wrapper" class="section-wrapper hide">
                        <div id="dev-portfolio-wrapper">
                            <a href="https://thaysom22.github.io/portfolio_project/" target="_blank" aria-label="Click to open Thomas Haysom Developer Portfolio" title="Thomas Haysom - Developer Portfolio">
                            <i class="far fa-file" aria-hidden="true" title="Click to open developer portfolio"></i>
                            <span>thaysom22</span>
                            <span>Developer Portfolio</span>
                            </a>
                        </div>
                        <div id="copyright-wrapper">
                            <span>For eductional purposes only</span>
                            <span>&copy; Thomas Haysom 2020</span>
                        </div> 
                        <div id="github-repo-wrapper">
                            <a href="https://github.com/thaysom22/maths-substitution-game" target="_blank" aria-label="Click to open GitHub repo for this site" title="GitHub Repo: maths-substitution-game">
                            <i class="fab fa-github-square" aria-hidden="true" title="Click to open GitHub repo for this site"></i>
                            <span>Code for this site</span>
                            <span>Suggestions welcome!</span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div> 
            <!-- MODALS -->
            <!-- Welcome modal - open when document is loaded in browser -->
            <div class="modal" id="welcome-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-label="Welcome modal" aria-hidden="true">
                <div class="modal-content">
                    <!-- Main heading section within modal -->
                    <header class="section-wrapper modal-header-wrapper">
                        <h1 class="heading modal-main-heading">Substitution Skirmish!</h1>
                        <div class="trigger-wrapper modal-header-info-wrapper" title="How to Play" aria-label="instructions on how to play">
                            <!-- CREDIT: Font Awesome -->
                            <i aria-hidden="true" class="fas fa-info-circle"></i>
                            <span>How to Play</span>
                        </div>
                    </header>
                    <div class="hide info-contents" title="Instructions" aria-label="Instructions on how to play">
                        <ol>
                            <li>Enter names for both players and choose a difficulty level</li>
                            <li>Player 1 clicks on ? icon to generate a random number for the value of x</li>
                            <li>Player 1 chooses an expression from the grid and then enters the value of the expression for their x</li>
                            <li>If player 1 tires to evaluate the expression, it is the end of their turn and the expression they chose is removed from the grid</li> 
                            <li>If answer is correct, more points are awarded for turn if it was one of the highest value options available from the grid</li>
                            <li>If answer is incorrect, player loses a point for turn</li>
                            <li>Player 2 begins their turn</li>
                            <li>Once player 2 runs out of turns, the game is over and the player with the highest score wins!</li>
                        </ol>
                    </div>
                    <!-- Input and submit in modal -->
                    <div id="welcome-input-form-wrapper">
                        <form id="welcome-modal-form" autocomplete="off">
                            <div id="player-names-container">
                            <div class="player-name-wrapper">
                                <label for="player1Name">Player 1</label>
                                <input type="text" id="player1Name" name="player1Name" placeholder="Enter Name" size="10" title="player 1 name" aria-label="Enter player 1 name">
                            </div>
                            <div class="player-name-wrapper">
                                <label for="player2Name">Player 2</label>
                                <input type="text" id="player2Name" name="player2Name" placeholder="Enter Name" size="10" title="player 2 name" aria-label="Enter player 2 name">
                            </div>
                            </div>
                            <span>Choose difficulty level:</span>
                            <div class="choose-difficulty-wrapper">
                                <input type="radio" id="easier" name="difficultyLevel" value="easier" title="Easier difficulty" aria-label="Easier difficulty">
                                <label for="easier">Easier</label>
                                <input type="radio" id="harder" name="difficultyLevel" value="harder" title="Harder difficulty" aria-label="Harder difficulty">
                                <label for="harder">Harder</label>
                            </div>
                            <div id="start-game-button-wrapper">
                                <input id="start-game-button" type="submit" value="Start Game" title="Start game" aria-label="Click to start game">
                            </div>
                            <span id="welcome-modal-error-message1" title="Player name error" aria-label="player name error message"></span>
                            <span id="welcome-modal-error-message2" title="Choose a difficulty error" aria-label="difficulty error message"></span>
                        </form>
                    </div>
                    <!-- Footer section in modal -->
                    <footer class="section-wrapper modal-footer-wrapper">
                    <div class="modal-about-trigger-wrapper trigger-wrapper" title="View ABOUT section" aria-label="View ABOUT section content">
                            <span>ABOUT</span>
                            <!-- CREDIT: Font Awesome -->
                            <i aria-hidden="true" class="fas fa-plus-square"></i>   
                        </div>
                        <div class="section-wrapper modal-about-content-wrapper hide">
                            <div class="modal-dev-portfolio-wrapper">
                                <a href="https://thaysom22.github.io/portfolio_project/" target="_blank" aria-label="Click to open Thomas Haysom Developer Portfolio" title="Thomas Haysom - Developer Portfolio">
                                <i class="far fa-file" aria-hidden="true" title="Link to developer portfolio" aria-label="Link to developer portfolio"></i>
                                <span>thaysom22</span>
                                <span>Developer Portfolio</span>
                                </a>
                            </div>
                            <div class="modal-copyright-wrapper">
                                <span>For eductional purposes only</span>
                                <span>&copy; Thomas Haysom 2020</span>
                            </div>
                            <div class="modal-github-repo-wrapper">
                                <a href="https://github.com/thaysom22/maths-substitution-game" target="_blank" aria-label="Click to open GitHub repo for this site" title="GitHub Repo: maths-substitution-game">
                                <i class="fab fa-github-square" aria-hidden="true" title="Link to GitHub repo for this site" aria-label="Link to GitHub repo for this site"></i>
                                <span>Code for this site</span>
                                <span>Suggestions welcome!</span>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>  
            <!-- Gameover modal - open when document is loaded in browser -->
            <div class="modal hide" id="gameover-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-label="gameover-modal" aria-hidden="true">
                <div class="modal-content">
                    <!-- Main heading section within modal -->
                    <header class="modal-header-wrapper section-wrapper">
                        <h1 class="modal-main-heading heading">Substitution Skirmish!</h1>
                    </header>
                    <!-- Results section of gameover modal-->
                    <div id="final-results-wrapper" class="section-wrapper">
                        <div id="winner-result" class="player-result">
                            <h2 id="gameover-header" class="heading">GAME OVER!</h2>
                            <span></span>
                        </div>
                        <div id="player1-result" class="player-result">
                            <span class="name"></span>
                            <span class="score"></span>
                        </div>
                        <div id="player2-result" class="player-result">
                            <span class="name"></span>
                            <span class="score"></span>
                        </div>
                    </div>
                    <!-- Buttons section of gameover modal -->
                    <div id="gameover-buttons-wrapper" class="section-wrapper">
                        
                        <button id="restart-game-button" class="gameover-button" title="restart game" aria-label="restart game">Restart</button>
                        <a href="." target="_self">
                            <div id="new-game-button" class="gameover-button" title="new game" aria-label="new game">New Game</div>
                        </a>
                    </div>
                    <!-- Footer section in modal -->
                    <footer class="section-wrapper modal-footer-wrapper">
                        <div class="modal-about-trigger-wrapper trigger-wrapper" title="View ABOUT section" aria-label="View ABOUT section content">
                            <span>ABOUT</span>
                            <!-- CREDIT: Font Awesome -->
                            <i aria-hidden="true" class="fas fa-plus-square"></i>   
                        </div>
                        <div class="section-wrapper modal-about-content-wrapper hide">
                            <div class="modal-dev-portfolio-wrapper">
                                <a href="https://thaysom22.github.io/portfolio_project/" target="_blank" aria-label="Click to open Thomas Haysom Developer Portfolio" title="Thomas Haysom - Developer Portfolio">
                                <i class="far fa-file" aria-hidden="true" title="Click to open developer portfolio"></i>
                                <span>thaysom22</span>
                                <span>Developer Portfolio</span>
                                </a>
                            </div>
                            <div class="modal-copyright-wrapper">
                                <span>For eductional purposes only</span>
                                <span>&copy; Thomas Haysom 2020</span>
                            </div>
                            <div class="modal-github-repo-wrapper">
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
            <!-- modal-backdrop layer for modals -->
            <div id="modal-backdrop" class="modal-backdrop"></div>
            </body>        
        `)
        window.welcomeModal = new WelcomeModal(); // instantiate WelcomeModal class  
    });

    describe("info button", function(){

        // add event listeners for testing
        beforeEach(() => {
            addModalInfoListener();
            addMainInfoListener();
        });

        describe("when clicked in welcome modal", function(){
            it("should add class .hide to contents of welcome modal", function(){
                $('#welcome-modal .modal-header-info-wrapper').click();
                expect($('#welcome-input-form-wrapper')).toHaveClass('hide');
                expect($('.modal-footer-wrapper')).toHaveClass('hide');

            });
            it("should remove class .hide from instructions in welcome modal", function(){
                $('#welcome-modal .modal-header-info-wrapper').click();
                expect($('#welcome-modal .info-contents')).not.toHaveClass('hide');
            });
        });

        describe("when clicked again in welcome modal", function(){
            it("should remove class .hide from contents of welcome modal", function(){
                $('#welcome-modal .modal-header-info-wrapper').click();
                $('#welcome-modal .modal-header-info-wrapper').click();
                expect($('#welcome-input-form-wrapper')).not.toHaveClass('hide');
                expect($('.modal-footer-wrapper')).not.toHaveClass('hide');

            });
            it("should remove add class .hide to instructions in welcome modal", function(){
                $('#welcome-modal .modal-header-info-wrapper').click();
                $('#welcome-modal .modal-header-info-wrapper').click();
                expect($('#welcome-modal .info-contents')).toHaveClass('hide');
            });
        });

        describe("when clicked in main page", function(){
            it("should add class .hide to contents of main page", function(){
                $('#header-info-wrapper').click();
                expect($('#click-to-play-wrapper')).toHaveClass('hide');
                expect($('#scoreboards-wrapper')).toHaveClass('hide');
                expect($('#gameboard-wrapper')).toHaveClass('hide');
                expect($('#footer-wrapper')).toHaveClass('hide');
            });
            it("should remove class .hide from instructions in welcome modal", function(){
                $('#header-info-wrapper').click();
                expect($('#grid-container-body .info-contents')).not.toHaveClass('hide');
            });
        });

        describe("when clicked again in main page", function(){
            it("should remove class .hide from contents of main page", function(){
                $('#header-info-wrapper').click();
                $('#header-info-wrapper').click();
                expect($('#click-to-play-wrapper')).not.toHaveClass('hide');
                expect($('#scoreboards-wrapper')).not.toHaveClass('hide');
                expect($('#gameboard-wrapper')).not.toHaveClass('hide');
                expect($('#footer-wrapper')).not.toHaveClass('hide');
            });
            it("should addclass .hide to instructions in welcome modal", function(){
                $('#header-info-wrapper').click();
                $('#header-info-wrapper').click();
                expect($('#grid-container-body .info-contents')).toHaveClass('hide');
            });
        });
    });

    describe("welcome modal form", function(){

        beforeEach(() => {
            
        })

        describe("when submitted with an empty player name", function(){
            
            it("", function() {

            });



        });


        describe("info button", function(){

        });
    });



});


import { Gameboard } from "./../../js/modules/gameboard.js"; 

describe("Gameboard object", function() {
    
    beforeEach(() => {
        // create version of gameboard in DOM for testing before each spec
        setFixtures(`
            <section id="gameboard-wrapper" class="section-wrapper">
                <div id="gameboard-grid-container">
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                    <div class="gameboard-grid-item"><span class="grid-expression">Grid expression</span></div>
                </div>
            </section>
        `);
        
    });
    
    describe("when initialized with Easy difficulty", function() {

        var gameboard; // declared in scope that both beforeEach() and specs can access
        beforeEach(() => {
            // create new instance of GameBoard class
            gameboard = new Gameboard("Easy");
        });

        it("should add questions to HTML of all grid item span elements of gameboard in DOM", function() {
            $(".grid-expression").each((index, elem) => {
                expect($(elem)).toContainElement('mjx-container');
            });
        });

        it("should store an array of 16 question objects each with expression(string), print(string), answer(null) and ranking(null) properties", function() {
            expect(gameboard.questions.length).toEqual(16);
            gameboard.questions.forEach((question) => {
                expect(question.expressionString).toBeInstanceOf(String);
                expect(question.latexString).toBeInstanceOf(String);
                expect(question.answer).toBeDefined();
                expect(question.ranking).toBeDefined();
            });
        });

    });

    describe("when initialized with Hard difficulty", function() {

        var gameboard;
        beforeEach(() => {
            // create new instance of GameBoard class
            gameboard = new Gameboard("Hard");
        });

        it("should add mathJAx rendered LaTeX string to all grid items span of gameboard in DOM", function() {
            $(".grid-expression").each(function() {
                expect($(this)).toContainElement('mjx-container');
            });
        });

        it("should hold an array of 16 question objects each with content, answer and value ranking properties", function() {
            expect(gameboard.questions.length).toEqual(16);
            gameboard.questions.forEach((question) => {
                expect(question.expressionString).toBeInstanceOf(String);
                expect(question.latexString).toBeInstanceOf(String);
                expect(question.answer).toBeDefined();
                expect(question.ranking).toBeDefined();
            });
        });

    });

    describe("when a random value for variable x in expressions is generated", function() {

        var gameboard;
        beforeEach(() => {
            let randomDifficulty = ["Easy", "Hard"][Math.round(Math.random())]; // randomize difficultySetting for Gameboard instance
            gameboard = new Gameboard(randomDifficulty); 
            gameboard.questions[0].expressionString = "3*x - 2"; // manually set expressions for first and second questions so they can be tested
            gameboard.questions[1].expressionString = "-2*x^2 + 2x";
            gameboard.questions[2].expressionString = "x + 10"; 
            gameboard.questions[3].expressionString = "x^3";
        });

        it("should populate answer property value in question objects correctly", function() {
            gameboard.evaluateQuestions(6); 
            expect(gameboard.questions[0].answer).toBe(16);
            expect(gameboard.questions[1].answer).toBe(-60);
            expect(gameboard.questions[2].answer).toBe(16);
            expect(gameboard.questions[3].answer).toBe(216);
        });

        it("should populate ranking property value in question objects correctly", function() {
            gameboard.evaluateQuestions(6);
            gameboard.rankQuestions();
            expect(gameboard.questions[3].ranking).toBeLessThan(gameboard.questions[0].ranking);
            expect(gameboard.questions[0].ranking).toBe(gameboard.questions[2].ranking); // expect questions with same answer to have equal rankings
            expect(gameboard.questions[2].ranking).toBeLessThan(gameboard.questions[1].ranking);
        });
    });

    describe("when a grid item (expression) on gameboard is selected during a player's turn", function() {

        it("should add .show class to gameboard overlay DOM element", function() {

        });

        it("should add selected question as CurrentQuestion property of gameboard", function() {

        });

        it("should add mathJAx rendered LaTeX string to HTML in gameboard overlay element", function() {

        });

    });

    describe("when gameboard overlay is displayed and 'choose a different expression' button is clicked", function() {

        it("should remove .show class from gameboard overlay DOM element", function() {

        });

        it("should remove mathJAx rendered LaTeX string from HTML in gameboard overlay element", function() {

        });

        it("should remove selected question as currentQuestion property of gameboard", function() {

        });

    });    

    describe("when a correct value is entered and confirmed by user to gameboard overlay input element", function() {

        it("should invoke gameboard.checkUserAnswer() callback with value passed as argument", function() {

        });

        it("should add .correctUserAnswer class to gameboard overlay element", function() {

        });

        it("should remove .show class from gameboard overlay DOM element AFTER 2 SECONDS DELAY", function() {

        });

        it("should remove selected question as currentQuestion property of gameboard", function() {

        });

        it("should add selected question as array item in disabledQuestions property of gameboard", function() {

        });

        it("should add .disabledQuestion class to grid item containing the question just answered by user", function() {

        });

    });



});
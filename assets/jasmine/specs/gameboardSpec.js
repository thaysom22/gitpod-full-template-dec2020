import { Gameboard } from "./../../js/modules/gameboard.js"; 

describe("Gameboard object", function() {

    var randomGameboard; // declared in scope that both all specs can access
    
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

        
        beforeEach(() => {
            let randomDifficulty = ["Easy", "Hard"][Math.round(Math.random())];
            randomGameboard = new Gameboard(randomDifficulty); // instantiate a new gameboard object with random difficulty before every sepc
        });
        
    });
    
    describe("when initialized with Easy difficulty", function() {

        var easyGameboard;
        beforeEach(() => {
            easyGameboard = new Gameboard("Easy"); 
        });

        it("should add mathJAx rendered LaTeX string to all grid items span of gameboard in DOM", function() {
            $(".grid-expression").each(function() {
                expect($(this)).toContainElement('mjx-container');
            });
        });

        it("should store an array of 16 question objects each with required properties", function() {
            expect(easyGameboard.questions.length).toEqual(16);
            easyGameboard.questions.forEach((question) => {
                expect(question.expressionString).toBeInstanceOf(String);
                expect(question.latexString).toBeInstanceOf(String);
                expect(question.answer).toBeDefined();
                expect(question.ranking).toBeDefined();
            });
        });

        it("should add event listeners to all grid items in gameboard", function() {
            easyGameboard.addAllGridItemEventListeners();
            $(".grid-expression").each(function() {
                // CREDIT: https://stackoverflow.com/questions/2518421/jquery-find-events-handlers-registered-with-an-object 
                expect($._data(this, "events")).toBeDefined(); // expect every grid item DOM to have an event listener stored on it 
            });
        });

    });

    describe("when initialized with Hard difficulty", function() {

        var hardGameboard;
        beforeEach(() => {
            hardGameboard = new Gameboard("Hard");
        });

        it("should add mathJAx rendered LaTeX string to all grid items span of gameboard in DOM", function() {
            $(".grid-expression").each(function() {
                expect($(this)).toContainElement('mjx-container');
            });
        });

        it("should hold an array of 16 question objects each with required properties", function() {
            expect(hardGameboard.questions.length).toEqual(16);
            hardGameboard.questions.forEach((question) => {
                expect(question.expressionString).toBeInstanceOf(String);
                expect(question.latexString).toBeInstanceOf(String);
                expect(question.answer).toBeDefined();
                expect(question.ranking).toBeDefined();
            });
        });

    });

    describe("when a random value for variable x in expressions is generated", function() {

        
        beforeEach(() => { 
            randomGameboard.questions[0].expressionString = "3*x - 2"; // manually set expressions for first and second questions so they can be tested
            randomGameboard.questions[1].expressionString = "-2*x^2 + 2x";
            randomGameboard.questions[2].expressionString = "x + 10"; 
            randomGameboard.questions[3].expressionString = "x^3";
        });

        it("should populate answer property value in question objects correctly", function() {
            randomGameboard.evaluateQuestions(6); 
            expect(randomGameboard.questions[0].answer).toBe(16);
            expect(randomGameboard.questions[1].answer).toBe(-60);
            expect(randomGameboard.questions[2].answer).toBe(16);
            expect(randomGameboard.questions[3].answer).toBe(216);
        });

        it("should populate ranking property value in question objects correctly", function() {
            randomGameboard.evaluateQuestions(6);
            randomGameboard.rankQuestions();
            expect(randomGameboard.questions[3].ranking).toBeLessThan(randomGameboard.questions[0].ranking);
            expect(randomGameboard.questions[0].ranking).toBe(randomGameboard.questions[2].ranking); // expect questions with same answer to have equal rankings
            expect(randomGameboard.questions[2].ranking).toBeLessThan(randomGameboard.questions[1].ranking);
        });
    });



    describe("when a grid item (expression) on gameboard is selected during a player's turn", function() {

        it("should invoke gameboard.showGameboardOverlay() method with selected question as argument if question is not a member of disabledQuestions array", function() {
            var showGameboardOverlaySpy = spyOn(randomGameboard, "showGameboardOverlay");
            WelcomeModalObject.submitWelcomeForm(new Event('submit'));

        });

        it("should not invoke gameboard.showGameboardOverlay() method if question is not a member of disabledQuestions array", function() {

        });

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

        it("should invoke gameboard.checkUserAnswer() method with value passed as argument", function() {

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

    describe("when an incorrect value is entered and confirmed by user to gameboard overlay input element", function() {

        it("should invoke gameboard.checkUserAnswer() method with value passed as argument", function() {

        });

        it("should add .incorrectUserAnswer class to gameboard overlay element", function() {

        });

        it("should remove .show class from gameboard overlay DOM element AFTER 2 SECONDS DELAY", function() {

        });

        it("should remove selected question as currentQuestion property of gameboard", function() {

        });

        it("should NOT add selected question as array item in disabledQuestions property of gameboard", function() {

        });

        it("should add NOT .disabledQuestion class to grid item containing the question just answered by user", function() {

        });

    });



});
import { Gameboard } from "./../../js/modules/gameboard.js"; 

describe("Gameboard object", function() {

    var randomGameboard; // declared in scope that both all specs can access
    
    beforeEach(() => {
        // create version of gameboard in DOM for testing before each spec
        setFixtures(`
            <section id="gameboard-wrapper" class="section-wrapper">
                <!-- gameboard overlay is hidden until grid item is clicked during a player turn --> 
                <div id="gameboard-overlay" class="hide">
                    <div id="gameboard-active-question">
                        <span></span>
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
        `);

        let randomDifficulty = ["Easy", "Hard"][Math.round(Math.random())];
        randomGameboard = new Gameboard(randomDifficulty); // instantiate a new gameboard object with random difficulty before every spec
    });
    
    describe("when initialized with Easy difficulty", function() {

        var easyGameboard;
        beforeEach(() => {
            easyGameboard = new Gameboard("Easy"); 
        });

        it("should add mathJAx rendered LaTeX string to all grid items span of gameboard in DOM", function() {
            $(".grid-expression").each(function() {
                console.log($(this), "test");
                expect($(this)).toContainElement($('.MathJax'));
            });
        });

        it("should store an array of 16 question objects each with required properties", function() {
            expect(easyGameboard.questions.length).toEqual(16);
            easyGameboard.questions.forEach((question) => {
                expect(question.expressionString).toBeInstanceOf(String);
                expect(question.latexString).toBeInstanceOf(String);
                expect(question.answer).toBeDefined();
                expect(question.ranking).toBeDefined();
                expect(question.id).toBeDefined();
            });
        });

        it("should create a new DOM property (questionId) which stores corresponding question by id from array", function() {
            console.log($(".grid-expression")[0], "test")
            expect($(".gameboard-grid-item")[0].questionId).toBe(0);
            expect($(".gameboard-grid-item")[6].questionId).toBe(6);
            expect($(".gameboard-grid-item")[15].questionId).toBe(15);
        });

    });

    describe("when initialized with Hard difficulty", function() {

        var hardGameboard;
        beforeEach(() => {
            hardGameboard = new Gameboard("Hard");
        });

        it("should add mathJAx rendered LaTeX string to all grid items span of gameboard in DOM", function() {
            $(".grid-expression").each(function() {
                expect($(this)).toContainElement('.MathJax');
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

    describe("evaluateQuestions method", function() {

        
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

    describe("when addAllGridItemEventListeners method is called", function() {

        beforeEach(() => {
            randomGameboard.addAllGridItemEventListeners();
        });

        it("should add event listeners to all grid items in gameboard", function() {
            $(".gameboard-grid-item").each(function() {
                console.log(this, "grid-item test");
                // CREDIT: https://stackoverflow.com/questions/2518421/jquery-find-events-handlers-registered-with-an-object 
                expect(Object.keys($._data(this, "events"))).toContain("click"); // expect every grid item in DOM to have an event listener stored on it 
            });
        });

    })

    describe("when showGameboardOverlay method is called", function() {

        // mock selection of a question from gameboard with click event containing currentTarget property 
        beforeEach(() => {
            randomGameboard.addAllGridItemEventListeners();
            var clickEvent = new Event("click");
            Object.defineProperty(clickEvent, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[0]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            randomGameboard.showGameboardOverlay(clickEvent);
        });

        it("should remove .hide class to gameboard overlay DOM element", function() {
            expect($('#gameboard-overlay')).not.toHaveClass('hide');
        });

        it("should add selected question as currentQuestion property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).not.toBeNull()
        });

        it("should add mathJAx rendered LaTeX string to HTML in gameboard overlay element", function() {
            expect($('#gameboard-active-question span')[0]).toContainElement($('.MathJax'));
        });

    });

    describe("when hideGameBoardOverlay method is called", function() {

        // mock selection of a question from gameboard and then click event on 'choose again' button in gameboard overlay
        beforeEach(() => {
            randomGameboard.addAllGridItemEventListeners();
            var clickEvent1 = new Event("click");
            var clickEvent2 = new Event("click");
            Object.defineProperty(clickEvent1, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[0]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            randomGameboard.showGameboardOverlay(clickEvent1);
            randomGameboard.hideGameboardOverlay(clickEvent2);
        });

        it("should remove .show class from gameboard overlay DOM element", function() {
            expect($('#gameboard-overlay')).toHaveClass('hide');
        });

        it("should remove mathJAx rendered LaTeX string from HTML in gameboard overlay element", function() {
            expect($('#gameboard-active-question span')[0]).not.toContainElement($('.MathJax'));
        });

        it("should remove selected question as currentQuestion property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).toBeNull()
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
import { Gameboard } from "./../../js/modules/gameboard.js"; 

describe("Gameboard object", function() {

    var randomGameboard; // declared in scope that both all specs can access
    
    beforeEach(() => {
        // create version of gameboard in DOM for testing before each spec
        setFixtures(`
            <!-- Main gameboard section -->
                <section id="gameboard-wrapper" class="section-wrapper">
                    <!-- gameboard overlay - hidden until grid item is clicked during a player turn --> 
                    <div id="gameboard-overlay" class="hide">
                        <div id="gameboard-overlay-content">
                            <div id="gameboard-active-question">
                                <span></span>
                            </div>
                            <h3>Evaluate when x = <span id="variable-value-overlay"></span></h3>
                            <form>
                                <input type="text" id="player-answer" name="playerAnswer" size="4" >
                                <span id="player-answer-error-message"></span>
                                <button type="submit">Enter</button>
                                <button id="choose-again-button" type="button">Choose again</button>
                            </form>
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

    describe("when evaluateQuestions method is called", function() {
        
        beforeEach(() => { 
            randomGameboard.questions[0].expressionString = "3*x - 2"; // manually set expressions for first and second questions so they can be tested
            randomGameboard.questions[1].expressionString = "-2*x^2 + 2x";
            randomGameboard.questions[2].expressionString = "x + 10"; 
            randomGameboard.questions[3].expressionString = "x^3";
            randomGameboard.evaluateQuestions(6); 
        });

        it("should populate answer property value in question objects correctly", function() {
            expect(randomGameboard.questions[0].answer).toBe(16);
            expect(randomGameboard.questions[1].answer).toBe(-60);
            expect(randomGameboard.questions[2].answer).toBe(16);
            expect(randomGameboard.questions[3].answer).toBe(216);
        });

        it("should populate ranking property value in question objects correctly", function() {
            randomGameboard.rankQuestions();
            expect(randomGameboard.questions[3].ranking).toBeLessThan(randomGameboard.questions[0].ranking);
            expect(randomGameboard.questions[0].ranking).toBe(randomGameboard.questions[2].ranking); // expect questions with same answer to have equal rankings
            expect(randomGameboard.questions[2].ranking).toBeLessThan(randomGameboard.questions[1].ranking);
        });

        it("should add the value of the argument to #variable-value-overlay element text", function() {
            expect($('#variable-value-overlay')).toContainText("6");
        });
    });

    describe("when addAllEventListeners method is called", function() {

        beforeEach(() => {
            randomGameboard.addAllEventListeners();
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
            randomGameboard.addAllEventListeners();
            var clickEvent = new Event("click");
            Object.defineProperty(clickEvent, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[0]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            randomGameboard.showGameboardOverlay(clickEvent);
        });

        it("should remove .hide class to gameboard overlay DOM element", function() {
            expect($('#gameboard-overlay')).not.toHaveClass('hide');
        });

        it("should add selected question as currentQuestion property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).toBe(0);
        });

        it("should add mathJAx rendered LaTeX string to HTML in gameboard overlay element", function() {
            expect($('#gameboard-active-question span')[0]).toContainElement($('.MathJax'));
        });

    });

    describe("when hideGameBoardOverlay method is called", function() {

        // mock selection of a question from gameboard and then click event on 'choose again' button in gameboard overlay
        beforeEach(() => {
            randomGameboard.addAllEventListeners();
            var clickEvent1 = new Event("click");
            var clickEvent2 = new Event("click");
            Object.defineProperty(clickEvent1, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[0]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            randomGameboard.showGameboardOverlay(clickEvent1);
            randomGameboard.hideGameboardOverlay(clickEvent2);
        });

        it("should add .hide class from gameboard overlay DOM element", function() {
            expect($('#gameboard-overlay')).toHaveClass('hide');
        });

        it("should remove mathJAx rendered LaTeX string from HTML in gameboard overlay element", function() {
            expect($('#gameboard-active-question span')[0]).not.toContainElement($('.MathJax'));
        });

        it("should remove selected question as currentQuestion property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).toBeNull()
        });

        it("should remove any .correct-user-answer or .incorrect-user-answer  class from gameboard overlay content element", function() {
            expect($('#gameboard-overlay-content')).not.toHaveClass('correct-user-answer');
            expect($('#gameboard-overlay-content')).not.toHaveClass('incorrect-user-answer');
        });

    });
    
    describe("checkUserAnswer method is called with no answer entered", function() {

        // mock selection of a question from gameboard,  correct user answer then click event on 'enter' button in gameboard overlay
        beforeEach(() => {
            randomGameboard.addAllEventListeners();
            var clickEvent = new Event("click");
            var submitEvent = new Event("submit");
            Object.defineProperty(clickEvent, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[5]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            Object.defineProperty(submitEvent, 'currentTarget', {writable: false, value: $("#gameboard-overlay-content form")});
            randomGameboard.showGameboardOverlay(clickEvent);
            $('#player-answer').val(""); // set input on gameboard overlay input to empty
            randomGameboard.checkUserAnswer(submitEvent); // checkUserAnswer is invoked when 'enter' is clicked on gameboard overlay
        });

        it("should not add .hide class to gameboard overlay element", function() {
            expect($('#gameboard-overlay')).not.toHaveClass('hide');
        });

        it("should add 'Enter a value!' error message to page", function() {
            expect($('#player-answer-error-message')).toContainText("Enter a valid value!");
        });

        it("should not remove selected question as currentQuestion property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).toBe(5);
        });

    });

    describe("checkUserAnswer method is called with invalid answer entered", function() {

        // mock selection of a question from gameboard,  correct user answer then click event on 'enter' button in gameboard overlay
        beforeEach(() => {
            randomGameboard.addAllEventListeners();
            var clickEvent = new Event("click");
            var submitEvent = new Event("submit");
            Object.defineProperty(clickEvent, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[5]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            Object.defineProperty(submitEvent, 'currentTarget', {writable: false, value: $("#gameboard-overlay-content form")});
            randomGameboard.showGameboardOverlay(clickEvent);
            $('#player-answer').val("abcd"); // set input on gameboard overlay input to non-numeric
            randomGameboard.checkUserAnswer(submitEvent); // checkUserAnswer is invoked when 'enter' is clicked on gameboard overlay
        });

        it("should not add .hide class to gameboard overlay element", function() {
            expect($('#gameboard-overlay')).not.toHaveClass('hide');
        });

        it("should add 'Enter a value!' error message to page", function() {
            expect($('#player-answer-error-message')).toContainText("Enter a valid value!");
        });

        it("should not remove selected question as currentQuestion property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).toBe(5);
        });
        
    });

    describe("checkUserAnswer method is called with correct answer entered", function() {

        // mock selection of a question from gameboard, correct user answer then click event on 'enter' button in gameboard overlay
        beforeEach(() => {
            randomGameboard.questions[5].answer = 10; // set answer property of question for testing
            randomGameboard.addAllEventListeners();
            var clickEvent = new Event("click");
            var submitEvent = new Event("submit");
            Object.defineProperty(clickEvent, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[5]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            Object.defineProperty(submitEvent, 'currentTarget', {writable: false, value: $("#gameboard-overlay-content form")});
            randomGameboard.showGameboardOverlay(clickEvent);
            $('#player-answer').val("10"); // set input on gameboard overlay input to equal to answer property of question
            randomGameboard.checkUserAnswer(submitEvent); // checkUserAnswer is invoked when 'enter' is clicked on gameboard overlay
        });

        it("should add .correct-user-answer class to gameboard overlay content element", function() {
            expect($('#gameboard-overlay-content')).toHaveClass('correct-user-answer');
        });

        it("should add .hide class to gameboard overlay DOM element", function() {
            expect($('#gameboard-overlay')).toHaveClass('hide');
        });

        it("should remove selected questionId as currentQuestionId property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).toBeNull();
        });

        it("should set answered question's disabled property to true", function() {
            expect(randomGameboard.questions[5].disabled).toBeTrue();
        });

        it("should add .disabledQuestion class to grid item containing the question just answered by user", function() {
            expect($($('.gameboard-grid-item')[5])).toHaveClass("disabled");
        });


    });

    describe("checkUserAnswer method is called with incorrect answer entered", function() {

        // mock selection of a question from gameboard,  correct user answer then click event on 'enter' button in gameboard overlay
        beforeEach(() => {
            randomGameboard.questions[10].answer = 15; // set answer property of question for testing
            randomGameboard.addAllEventListeners();
            var clickEvent = new Event("click");
            var submitEvent = new Event("submit");
            Object.defineProperty(clickEvent, 'currentTarget', {writable: false, value: $(".gameboard-grid-item")[10]}); // hack to set properties on Event object CREDIT: https://stackoverflow.com/questions/37456443/how-set-the-eventtarget-of-an-event 
            Object.defineProperty(submitEvent, 'currentTarget', {writable: false, value: $("#gameboard-overlay-content form")});
            randomGameboard.showGameboardOverlay(clickEvent);
            $('#player-answer').val("20"); // set input on gameboard overlay input to not equal to answer property of question
            randomGameboard.checkUserAnswer(submitEvent); // checkUserAnswer is invoked when 'enter' is clicked on gameboard overlay
        });

        it("should add .incorrect-user-answer class to gameboard overlay content element", function() {
            expect($('#gameboard-overlay-content')).toHaveClass('incorrect-user-answer');
        });

        it("should add .hide class to gameboard overlay DOM element", function() {
            expect($('#gameboard-overlay')).toHaveClass('hide');
        });

        it("should remove selected question as currentQuestion property of gameboard", function() {
            expect(randomGameboard.currentQuestionId).toBeNull();
        });

        it("should NOT set answered question's disabled property to true", function() {
            expect(randomGameboard.questions[10].disabled).toBeFalse();
        });

        it("should NOT add .disabledQuestion class to grid item containing the question just answered by user", function() {
            expect($($('.gameboard-grid-item')[10])).not.toHaveClass("disabled");
        });

    });

});
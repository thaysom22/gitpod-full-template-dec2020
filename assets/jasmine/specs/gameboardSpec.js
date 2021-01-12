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

        it("should add questions to HTML of all grid items of gameboard in DOM", function() {
            $(".grid-expression").each((index, elem) => {
                expect($(elem)).toContainElement('mjx-container');
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
        });

        it("should populate answer property value in question objects correctly", function() {
            gameboard.questions[0].expressionString = "3*x - 2"; // manually reset expressions for first and second questions so they can be tested
            gameboard.questions[1].expressionString = "-2*x^2 + 2x";
            gameboard.evaluateQuestions(6); 
            expect(gameboard.questions[0].answer).toBe(16);
            expect(gameboard.questions[1].answer).toBe(-60);
        });

        it("should populate ranking property value in question objects correctly", function() {
            gameboard.evaluateQuestions(3);
            gameboard.rankQuestions();

            console.log(gameboard); // test
            
            gameboard.questions.sort((a, b) => b.answer - a.answer); // sort gameboad.questions inplace by descending answer value
            gameboard.questions.forEach(function(question, index) {
                expect(question.ranking).toBe(index);
            })
            


                
            
        });
    });

    describe("when a grid item (expression) on gameboard is clicked during a player's turn", function() {

    })

});
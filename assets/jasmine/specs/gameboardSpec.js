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

});
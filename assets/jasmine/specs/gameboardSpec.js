import { Gameboard } from "./../../js/modules/gameboard.js"; 

describe("Gameboard", function() {
    
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
    
    describe("when initialized in Easy mode", function() {

        beforeEach(() => {
            // create new instance of GameBoard class
            var gameboard = new Gameboard("Easy");
        });

        it("should add questions to HTML of all grid items of gameboard in DOM", function() {
            $('.gameboard-grid-item grid-expression').each((gridExp) => {
                expect(gridExp).not.toBeEmpty();
            });
        });

        it("should hold an array of question objects each with content, answer and value ranking properties", function() {

        });

    });

        describe("when initialized in Hard mode", function() {

        beforeEach(() => {
            // create new instance of GameBoard class
            var gameboard = new Gameboard("Hard");
        });

        it("should add questions to HTML of all grid items of gameboard in DOM", function() {
            $('.gameboard-grid-item grid-expression').each((gridExp) => {
                expect(gridExp).not.toBeEmpty();
            });
        });

        it("should hold an array of question objects each with content, answer and value ranking properties", function() {

        });

    });

});
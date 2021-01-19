import { ClickToPlay } from "./../../js/modules/clickToPlay.js"; 
import { Gameboard } from "./../../js/modules/gameboard.js";

describe("ClickToPlay object", function() {

    let clickToPlay; // declared in scope that both all specs can access
    
    beforeEach(() => {
        // create version of clickToPlay component in DOM for testing before each spec
        setFixtures(`
            <!-- Click to play section -->
            <section id="click-to-play-wrapper" class="section-wrapper">
                <span id="currentPlayerName"></span>
                <div id="random-number-wrapper" class="trigger-wrapper" aria-label="Click to generate random number">
                    <!-- CREDIT: Font Awesome -->
                    <i aria-hidden="true" class="fas fa-question"  title="Click to Play"></i>
                    <span id="variable-value" class="hide"></span>
                </div>
                <div id="counttimer-wrapper" class="trigger-wrapper">
                    <p id="countdown-timer">Click to Play!</p>
                </div>
            </section>
        `);

        clickToPlay = new ClickToPlay("James", "Claire", "Easy"); // instantiate a new ClickToPlay object before each spec
    });

    describe("when clickToPlay is initialized", function() {

        it("expect clickToPlay object to be instance of ClickToPlay class", function() {
            expect(clickToPlay).toBeInstanceOf(ClickToPlay);
        });

        it("expect countdown timer element to have text content 'Click to Play!", function() {
            expect($('#countdown-timer')).toContainText("Click to Play");
        });

        it("expect random-number-wrapper element to contain font awesome '?' icon", function() {
            expect($('#random-number-wrapper')).toContainElement($('i.fas.fa-question'));
        });

        it("expect random-number-wrapper element to have a click event listener attached", function() {
            expect(Object.keys($._data($('#random-number-wrapper')[0], "events"))).toContain("click");
        });

    });


    describe("when generateVariableValue is called with Easy difficulty", function() {

        let clickToPlay2;
        let returnValue;

        beforeEach(() => {
            jasmine.clock().install();
            clickToPlay2 = new ClickToPlay("Mark", "Julia", "Easy"); // keep same object for specs in this describe
            spyOn(clickToPlay2, "updateVariableInDOM");
            returnValue = clickToPlay2.generateVariableValue("Easy");
        })

        afterEach(() => {
            jasmine.clock().uninstall();
        })

        it("should call clickToPlay.updateVariableInDOM method 3 times per second", function() {
            jasmine.clock().tick(200); // expect 1 call after 0.2 seconds
            expect(clickToPlay2.updateVariableInDOM).toHaveBeenCalledTimes(1);
        });

        it("should call clickToPlay.updateVariableInDOM method between 9 times in 3 seconds", function() {
            jasmine.clock().tick(2000); // expect 10 calls after 2 seconds
            expect(clickToPlay2.updateVariableInDOM).toHaveBeenCalledTimes(10);
        });

        it("should return a number type value between 1 and 10", function() {
            expect(returnValue).toBeInstanceOf(Number);
            expect(returnValue).toBeGreaterThanOrEqual(1);
            expect(returnValue).toBeLessThanOrEqual(10);
        });

    });

    describe("when updateVariableInDOM is called with non-null value", function() {

        beforeEach(() => {
            clickToPlay.updateVariableInDOM(5);
        });

        it("should display value of argument passed in non-hidden variable-value element", function() {
            expect($('#variable-value')).not.toHaveClass($('hide'));
            expect($('#variable-value')).toContainText('5');
        });

        it("should add .hide class to font awesome icon", function() {
            expect($('.fas.fa-question')).toHaveClass('hide');
        });

    });

     describe("when updateVariableInDOM is called with NULL value", function() {

        beforeEach(() => {
            clickToPlay.updateVariableInDOM(null);
        });

        it("should remove text from and add .hide class to variable-value element", function() {
            expect($('#variable-value')).toHaveClass('hide');
            expect($('#variable-value')).toContainText(''); // checks previous variable value has been removed
        });

        it("should remove .hide class to font awesome icon", function() {
            expect($('.fas.fa-question')).not.toHaveClass('hide');
        });

    });

});
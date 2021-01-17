import { ClickToPlay } from "./../../js/modules/clickToPlay.js"; 
import { Gameboard } from "../../js/modules/gameboard.js";

describe("ClickToPlay object functions", function() {

    var clickToPlay; // declared in scope that both all specs can access
    
    beforeEach(() => {
        // create version of clickToPlay component in DOM for testing before each spec
        setFixtures(`
            <!-- Click to play section -->
            <section id="click-to-play-wrapper" class="section-wrapper">  
            <span id="currentPlayerName"></span>    
                <div id="random-number-wrapper" class="trigger-wrapper" aria-label="Click to generate random number">
                    <!-- CREDIT: Font Awesome -->
                    <i aria-hidden="true" class="fas fa-question"  title="Click to Play"></i>
                </div>
                <div id="counttimer-wrapper" class="trigger-wrapper">
                    <p id="countdown-timer">Click to Play!</p>
                </div>
            </section>
        `);

        clickToPlay = new ClickToPlay("Hard"); // instantiate a new ClickToPlay object before each spec
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

    describe("when beginPlayerTurn method is called", function(){

        let gameboard;
        beforeEach(() => {
            window.gameboard = new Gameboard("Easy"); // instantiate global gameboard to spy on it's method calls
            spyOn(window.gameboard, "addAllEventListeners");
            spyOn(clickToPlay, "startCountdownTimer");
            clickToPlay.beginPlayerTurn()
        });

        it("should remove the click event listener on #random-number-wrapper element", function() {
            expect(Object.keys($._data($('#random-number-wrapper')[0], "events"))).not.toContain("click");
        });

        it("should call Gameboard.addAllEventListeners method", function() {
            expect(window.gameboard.addAllEventListeners).toHaveBeenCalled();
        });

        it("should call clickToPlay.startCountdownTimer method", function() {
            expect(clickToPlay.startCountdownTimer).toHaveBeenCalledWith("Easy");
        });

        it("clickToPlay.variableValue property should be set to return value of startCountdownTimer method", function() {
            let variableValue = clickToPlay.startCountdownTimer("Easy");
            expect(clickToPlay.variableValue).toBe(variableValue);
        });




    });
    
    

});
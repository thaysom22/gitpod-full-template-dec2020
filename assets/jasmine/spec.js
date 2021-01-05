// // set path for loading fixtures to pwd
// Jasmine.getFixtures().fixturesPath = './';

/* Tests for welcome modal form */

describe("Welcome modal form", function(){
    
    // load before each spec so that all specs are independent
    // load entire index.html document so that effects between components can be tested properly
    beforeEach(() => {
        loadFixtures("../../index.html");
    });

    it("startGame function should be defined", function() {
        expect(startGame).toBeDefined();
    });

    it("player name fields should be empty when document loads", function() {

    });

    it("neither difficulty level option should be selected when document loads", function() {

    });

    it("should not sumbit with an empty player name field and should notify user", function() {

    });

    it("should not submit with a player name greater than 10 characters and should notify user", function() {

    });

    it("should not submit without a difficulty level seleced and should notify user", function() {

    });

    it("should close welcome modal when correctly submitted", function() {

    });

    it("should store player names enteredand difficulty level selected", function() {

    })
});
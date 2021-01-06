// test
console.log("spec.js module has run");

// imports
import * as modals from "../js/modules/modals.js";

jasmine.getFixtures().fixturesPath = './fixtures';


/* Tests for welcome modal form */

describe("Welcome modal form", function(){
    
    // DOES NOT WORK! How to I recreate DOM to test js functions are manipulating it correctly!!!???
    loadFixtures("welcomeModalFixture.html");
    

    it("startGame function should be defined", function() {
        expect(modals.startGame).toBeDefined();
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
export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.difficultySetting = difficultySetting;
        this.questions = initializeQuestions(difficultySetting); // an array of objects
        
    }

    

    populateGameboard() {
        // clear grid-expressions in DOM

        // add new questions to DOM
    }

    setEventListeners(){

    }

}

function initializeQuestions(difficultySetting) {
    let questions = [];
    let easyQuestionBlueprints = [

    ];
    let hardQuestionBlueprints = [

    ];

}
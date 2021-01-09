export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.difficultySetting = difficultySetting;
        // CREDIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
        this.questions = Gameboard.initializeQuestions(difficultySetting); // initializeQuestions function returns an array of objects
    
    
    };

    static initializeQuestions(difficultySetting) {
        let shuffledQuestionsContent = generateQuestions(difficultySetting).sort(() => { Math.random() - 0.5 }); // randomly shuffle array order CREDIT: https://flaviocopes.com/how-to-shuffle-array-javascript/
        
        // create list of objects each with content property populated by looping over shuffled questions
        // create an evaluateExpression function for each object
        return ;

        // mathematical expressions for gameboard questions are generated from by randomizing variables
        function generateQuestions(difficultySetting) {

            if (difficultySetting === "Easy") {
                return [
                    `${random("Easy")}*X`,
                    `${random("Easy")}*X + ${random("Easy")}`,
                    `${random("Easy")}*X - ${random("Easy")}`,
                    `${random("Easy")} - ${random("Easy")}*X`,
                    `${random("Easy")}*X^2`,
                    `(${random("Easy")}*X)^2`,
                    // add more
                ];
            } else if (difficultySetting === "Hard") {
                return [

                ];
            }

            //random function generates a random coefficient appropriate for difficulty level
            function random(difficultySetting) {
                if (difficultySetting === "Easy") {
                    return getRandomInt(1, 15); 
                } else if (difficultySetting === "Hard") {
                    return getRandomInt(-15, 15);
                }

                // getRandomInt function returns random integer in given range (limits inclusive)
                // CREDIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
            }   
        }
    }

    static populateGameboard() {
        // clear grid-expressions in DOM

        // add new questions to DOM
    }

    static setEventListeners(){

    }



}


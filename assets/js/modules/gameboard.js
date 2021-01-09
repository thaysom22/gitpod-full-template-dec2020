export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.difficultySetting = difficultySetting;

        // CREDIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
        this.questions = Gameboard.initializeQuestions(difficultySetting); // initializeQuestions function returns an array of objects
    
    
    };

    static initializeQuestions(difficultySetting) {
        let shuffledExpressions = generateExpressions(difficultySetting).sort(() => { Math.random() - 0.5 }); // randomly shuffle array order CREDIT: https://flaviocopes.com/how-to-shuffle-array-javascript/
        // create a list of objects each with content property 
        let questions = [];
        for (let expression of shuffledExpressions) {
            let question = {
                expression: expression,
                print: null,
                answer: null,
                ranking:null
            };
            questions.push(question);
        }

        return questions;

        // mathematical expressions for gameboard questions are generated from by randomizing variables
        function generateExpressions(difficultySetting) {

            if (difficultySetting === "Easy") {
                return [
                    `${random("Easy")}*X`,
                    `${random("Easy")}*X + ${random("Easy")}`,
                    `${random("Easy")}*X - ${random("Easy")}`,
                    `${random("Easy")} - ${random("Easy")}*X`,
                    `${random("Easy")}*X^2`,
                    `(${random("Easy")}*X)^2`,
                    // add more expressions
                ];
            } else if (difficultySetting === "Hard") {
                return [

                ];
            }

            //random function returns a random coefficient appropriate for difficulty level to be used in generateExpressions function
            function random(difficultySetting) {
                if (difficultySetting === "Easy") {
                    return getRandomInt(1, 15); 
                } else if (difficultySetting === "Hard") {
                    return getRandomInt(-15, 15);
                }

                // getRandomInt function invoked by random function returns random integer in given range (limits inclusive)
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

    /**
     * evaluateExpressions method takes variableValue (integer) as arguments 
     * makes XHR request to math.js api to calcuate and set answer property for each question object in this.questions array
     */
    evaluateExpressions(variableValue) {
        let requestBody = {};
        let expressions = this.
        

        
        
        {
        "expr": [
      "X = 4",
      "X / 2",
      "3X^2",
      "(3X)^2",
      "9 / 3 + 2i",
      "b = [-1, 2; 3, 1]",
      "det(b)"
    ]
  }

    }

    // add required request header 

}


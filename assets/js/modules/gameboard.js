import { getRandomRange } from "./helpers.js";

export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.difficultySetting = difficultySetting;
        this.questions = initializeQuestions(difficultySetting);
        
        console.log(this.questions); // test
        
        
       // initializeQuestions function returns an array of question objects
        function initializeQuestions(difficultySetting) {
            let questions = [];
            let expressions = generateExpressions(difficultySetting);
            for (let expression of expressions) {
                let question = {
                    expressionString: expression,
                    TeX: generateTeX(expression),
                    answer: null,
                    ranking: null
                };
                questions.push(question);
            }

            return questions;
        }
        
        // generateTex function convets expression (string) to Tex format to be rendered by mathJax 
        function generateTeX(expression) {

        }

        // generateExpressions function returns a shuffled array of strings containing expressions with randomized coefficients
        function generateExpressions(difficultySetting) {
            let easyTemplate = [
                    `${randCoeff("Easy")}*X`,
                    `${randCoeff("Easy")}*X + ${randCoeff("Easy")}`,
                    `${randCoeff("Easy")}*X - ${randCoeff("Easy")}`,
                    `${randCoeff("Easy")} - ${randCoeff("Easy")}*X`,
                    `${randCoeff("Easy")}*X^2`,
                    `(${randCoeff("Easy")}*X)^2`,
                    // add more expressions
                ];

            let hardTemplate = [
                    
                    // add more expressions
                ];

            let unshuffledExpressions;
            if (difficultySetting === "Easy") {
                unshuffledExpressions = easyTemplate;

            } else if (difficultySetting === "Hard") {
                unshuffledExpressions = hardTemplate;
            }

            let shuffledExpressions = unshuffledExpressions.sort(() => { 
                Math.random() - 0.5 // randCoeff shuffle array order CREDIT: https://flaviocopes.com/how-to-shuffle-array-javascript/
            });
            
            return shuffledExpressions;
        }

        // randCoeff function returns a random coefficient (range dependant on difficultySetting argument)
        function randCoeff(difficultySetting) {
            if (difficultySetting === "Easy") {
                return getRandomRange(1, 15); 
            } else if (difficultySetting === "Hard") {
                return getRandomRange(-15, 15);
            }
        }

        
    };
  


    static populateGameboard() {
        // clear grid-expressions in DOM

        // add new questions to DOM
    }

    static setEventListeners(){

    }

    /**
     * evaluateExpressions instance method calls math.evaluate method on expression property to set answer property for each question object in this.questions array
     * @param {Integer} variableValue generated from 'click to play' component
     */
    evaluateQuestions(variableValue) {
        let questions = this.questions;
        questions.forEach(function(question){
            question.answer = math.evaluate(question.expression, { X: variableValue }) // note: Gameboard class is exported to modals.js then to main.js namespace where math object is available
        });
        
        console.log(questions) // test

    }

     

}

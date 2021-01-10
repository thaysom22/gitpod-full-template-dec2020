export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.difficultySetting = difficultySetting;

        // CREDIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
        this.expressions = Gameboard.generateExpressions(difficultySetting); // array of expressions is staved on instance for mathjs XHR request object
        this.questions = this.initializeQuestions(); // initializeQuestions function returns an array of objects
        
        this.evaluateQuestions(5); //test
        
    };

    /**
     * initializeQuestions instance method returns an array of question objects created from this.expressions array
     */
    initializeQuestions() {
        // create a list of objects each with content property 
        let questions = [];
        for (let expression of this.expressions) {
            let question = {
                expression: expression,
                print: null,
                answer: null,
                ranking:null
            };
            questions.push(question);
        }

        return questions;
    }

    /**
     * generateExpressions static method generates mathematical expressions for gameboard questions from template arrays by adding random coefficients and shuffling order
     * @param {String} difficultySetting 
     */
    static generateExpressions(difficultySetting) {

        let easyTemplate = [
                `${random("Easy")}*X`,
                `${random("Easy")}*X + ${random("Easy")}`,
                `${random("Easy")}*X - ${random("Easy")}`,
                `${random("Easy")} - ${random("Easy")}*X`,
                `${random("Easy")}*X^2`,
                `(${random("Easy")}*X)^2`,
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

        return unshuffledExpressions.sort(() => { 
            Math.random() - 0.5 // randomly shuffle array order CREDIT: https://flaviocopes.com/how-to-shuffle-array-javascript/
        }); 

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

    static populateGameboard() {
        // clear grid-expressions in DOM

        // add new questions to DOM
    }

    static setEventListeners(){

    }

    /**
     * evaluateExpressions instance method calls math.evaluate method on expression property to set answer property for each question object in this.questions array
     * @param {Integer} variableValue 
     */
    evaluateQuestions(variableValue) {
        let questions = this.questions;
        questions.forEach(function(question){
            question.answer = math.evaluate(question.expression, { X: variableValue }) // note: Gameboard class is exported to modals.js then to main.js namespace where math object is available
        });
        
        console.log(questions) // test
        

    }

     

}

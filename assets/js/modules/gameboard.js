import { getRandomRange } from "./helpers.js";

export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.difficultySetting = difficultySetting;
        this.questions = initializeQuestions(difficultySetting);
        initializeGameboardHTML(this.questions);
        
        
        
        
        // initializeGameboardHTML function sets HTML of each grid item to question.LaTexString value
        // CREDIT: https://docs.mathjax.org/en/latest/advanced/typeset.html
        function initializeGameboardHTML(questions) {
            $(".grid-expression").each((index, span) => {
                span.textContent = questions[index].latexString; // this binds to current DOM element in .each() loop
            });
            MathJax.typeset() // need to call mathjax synchronous .typeset() method as HTML was updated from when document was first rendered 
        }
        
        // initializeQuestions function returns an array of question objects with expressionSring and LaTexString values set 
        function initializeQuestions(difficultySetting) {
            let questions = [];
            let expressions = generateExpressions(difficultySetting);
            for (let expression of expressions) {
                let question = {
                    expressionString: expression,
                    latexString: generateLatex(expression),
                    answer: null,
                    ranking: null
                };
                questions.push(question);
            }

            return questions;
        }
        
        // generateLatex function converts expression (string) to LaTex format, using math.js functions, to be rendered by mathjax in HTML
        // CREDIT: https://mathjs.org/docs/
        // CREDIT: https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes#Adding_math_to_LaTeX 
        function generateLatex(expression) {
            let node;
            let laTex;
            expression = expression.replaceAll("*", ""); // remove all occurances of "*" operator from expression for formatting
            node = math.parse(expression); // parse expression string into mathjs node 'expression tree' object
            
            laTex = node.toTex({implicit: 'hide'}); // do not show multiplication operator in LaTex 
            laTex = "\\(" + laTex + "\\)"; // default delimiters for LaTex inline math in HTML doc: \( ... \)

            return laTex;
        }

        // generateExpressions function returns a shuffled array of strings containing expressions with randomized coefficients
        function generateExpressions(difficultySetting) {
            let easyTemplate = [
                    `${randCoeff("Easy")}*x`,
                    `${randCoeff("Easy")}*x + ${randCoeff("Easy")}`,
                    `${randCoeff("Easy")}*x - ${randCoeff("Easy")}`,
                    `${randCoeff("Easy")} - ${randCoeff("Easy")}*x`,
                    `${randCoeff("Easy")} + ${randCoeff("Easy")}*x`,
                    `${randCoeff("Easy")}*x^2`,
                    `(${randCoeff("Easy")}*x)^2`,
                    `x^3`,
                    `${randCoeff("Easy")}x^2 + ${randCoeff("Easy")}`,
                    `${randCoeff("Easy")} - (${randCoeff("Easy")}x)^2`,
                    `(${randCoeff("Easy")} + ${randCoeff("Easy")}x)^2`,
                    `(${randCoeff("Easy")} - ${randCoeff("Easy")}x)^2`,
                    `x^2`,
                    `x^2 + ${randCoeff("Easy")}`,
                    `${randCoeff("Easy")} + x^3`,
                    `x^2 + ${randCoeff("Easy")}x + ${randCoeff("Easy")}`
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
  

    /**
     * evaluateExpressions instance method calls math.evaluate method on expression property to set answer property for each question object in this.questions array
     * @param {Integer} variableValue generated from 'click to play' component
     */
    evaluateQuestions(variableValue) {
        let questions = this.questions;
        questions.forEach(function(question){
            question.answer = math.evaluate(question.expression, { x: variableValue }) // note: Gameboard class is exported to modals.js then to main.js namespace where math object is available
        });
        
        console.log(questions) // test

    }

     

}

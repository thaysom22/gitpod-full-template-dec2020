import { getRandomRange } from "./helpers.js";

export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.questions = initializeGameboard(difficultySetting);
        
        // initializeGameboard function calls initializeQuestions and uses returned array to set HTML of each grid item to question.LaTexString value
        // CREDIT: https://docs.mathjax.org/en/latest/advanced/typeset.html
        function initializeGameboard(difficultySetting) {
            let questions = initializeQuestions(difficultySetting);
            $(".grid-expression").each((index, span) => {
                span.textContent = questions[index].latexString; // this binds to current DOM element in .each() loop
            });

            MathJax.typeset() // need to call mathjax synchronous .typeset() method as HTML was updated from when document was first rendered 
            return questions;
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
                `${randCoeff("Easy")}*x^2 + ${randCoeff("Easy")}`,
                `${randCoeff("Easy")} - (${randCoeff("Easy")}*x)^2`,
                `(${randCoeff("Easy")} + ${randCoeff("Easy")}*x)^2`,
                `(${randCoeff("Easy")} - ${randCoeff("Easy")}*x)^2`,
                `x^2`,
                `x^2 + ${randCoeff("Easy")}`,
                `${randCoeff("Easy")} + x^3`,
                `x^2 + ${randCoeff("Easy")}*x + ${randCoeff("Easy")}`
            ];

            easyTemplate = easyTemplate.map((exp) => exp.replaceAll("1*x", "x")); // replace all occurances of 1*x (standard mathematical convention)

            let hardTemplate = [
                `${randCoeff("Hard")}*x^2`,
                `(${randCoeff("Hard")}*x)^2`,
                `${randCoeff("Hard")}*x^3`,
                `(${randCoeff("Hard")}*x)^3`,
                `${randCoeff("Hard")}*x^2 + ${randCoeff("Hard")}`,
                `${randCoeff("Hard")}*x - (${randCoeff("Hard")}*x)^2`,
                `(${randCoeff("Hard")}*x + ${randCoeff("Hard")}*x)^2`,
                `(${randCoeff("Hard")}*x - ${randCoeff("Hard")}*x)^2`,
                `x^2 + ${randCoeff("Hard")}*x`,
                `${randCoeff("Hard")} - x^3`,
                `x^2 + ${randCoeff("Hard")}*x + ${randCoeff("Hard")}`,
                `${randCoeff("Hard")}*x^3 - ${randCoeff("Hard")}*x^2 - ${randCoeff("Hard")}`,
                `(${randCoeff("Hard")} - ${randCoeff("Hard")}*x)^2`,
                `-(${randCoeff("Hard")}*x^2) + ${randCoeff("Hard")}`,
                `(-${randCoeff("Hard")}*x)^2 - ${randCoeff("Hard")}`,
                `${randCoeff("Hard")} - ${randCoeff("Hard")}*x + ${randCoeff("Hard")}*x^2 - ${randCoeff("Hard")}*x^3`
            ];

            hardTemplate = hardTemplate.map((exp) => exp.replaceAll("1*x", "x"));

            let unshuffledExpressions;
            if (difficultySetting === "Easy") {
                unshuffledExpressions = easyTemplate;

            } else if (difficultySetting === "Hard") {
                unshuffledExpressions = hardTemplate;
            }

            console.log(unshuffledExpressions);
            let shuffledExpressions = unshuffledExpressions.sort(() => Math.random() - 0.5);  // shuffle array order CREDIT: https://flaviocopes.com/how-to-shuffle-array-javascript/
            console.log(shuffledExpressions);
            return shuffledExpressions;
        }

        // randCoeff function returns a random coefficient (range dependent on difficultySetting argument)
        function randCoeff(difficultySetting) {
            if (difficultySetting === "Easy") {
                return getRandomRange(1, 10); 
            } else if (difficultySetting === "Hard") {
                let hardOutput = getRandomRange(-10, 10);
                return hardOutput === 0 ? randCoeff("Hard") : hardOutput; // conditional recursive call to randCoeff function to avoid returning 0
            }
        }
 
    };
  

    /**
     * evaluateExpressions instance method calls math.evaluate method on expression property to set answer property for each question object in this.questions array
     * @param {Integer} variableValue generated from 'click to play' component
     */
    evaluateQuestions(variableValue) {
        this.questions.forEach(function(question){
            question.answer = math.evaluate(question.expression, { x: variableValue }) // note: Gameboard class is exported to modals.js then to main.js namespace where math object is available
        });
    }

    /**
     * rankQuestions instance method orders questions by descending value of question answer property
     * rankQuestions must be invoked AFTER evaluate expressions method so that question.answer !== null
     */
    rankQuestions() {
        
    }

     

}

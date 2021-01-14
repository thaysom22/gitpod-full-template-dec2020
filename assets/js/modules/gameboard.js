import { getRandomRange } from "./helpers.js";

export { Gameboard };

class Gameboard {
    constructor(difficultySetting){
        this.questions = initializeGameboard(difficultySetting); // set expressionString and latexString properties when initializing
        this.currentQuestionId = null;

        this.addAllGridItemEventListeners();
        console.log("event listeners added at gameboard instantiation for test");

        // initializeGameboard function calls initializeQuestions and uses returned array to set HTML of each grid item to question.LaTexString value
        // CREDIT: https://docs.mathjax.org/en/latest/advanced/typeset.html
        function initializeGameboard(difficultySetting) {
            let questions = initializeQuestions(difficultySetting);
            $(".grid-expression").each((index, span) => {
                span.textContent = questions[index].latexString; // this binds to current DOM element in .each() loop
                span.parentElement.questionId = questions[index].id; // creates a DOM property questionId which stores corresponding question object id value on grid-item parent 
            });

            MathJax.typeset() // need to call mathjax synchronous .typeset() method as HTML was updated from when document was first rendered 
            return questions;
        }
        
        // initializeQuestions function returns an array of question objects with expressionSring and LaTexString values set 
        function initializeQuestions(difficultySetting) {
            let questions = [];
            let expressions = generateExpressions(difficultySetting);
            expressions.forEach(function(expression, index) {
                let question = {
                    id: index, // id [0 - 15]
                    expressionString: expression,
                    latexString: generateLatex(expression),
                    answer: null,
                    ranking: null // ranking [0 - 15] by descending answer value
                };
                questions.push(question);
            });

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
                `${randCoeff("Hard")}*x^3 + ${randCoeff("Hard")}*x^2 - ${randCoeff("Hard")}`,
                `(${randCoeff("Hard")} - ${randCoeff("Hard")}*x)^2`,
                `(${randCoeff("Hard")}*x^2) + ${randCoeff("Hard")}`,
                `(${randCoeff("Hard")}*x)^2 - ${randCoeff("Hard")}`,
                `${randCoeff("Hard")}*x^2 + ${randCoeff("Hard")}*x^3`
            ];

            hardTemplate = hardTemplate.map((exp) => exp.replaceAll("1*x", "x"));

            let unshuffledExpressions;
            if (difficultySetting === "Easy") {
                unshuffledExpressions = easyTemplate;

            } else if (difficultySetting === "Hard") {
                unshuffledExpressions = hardTemplate;
            }

            let shuffledExpressions = unshuffledExpressions.sort(() => Math.random() - 0.5);  // shuffle array order CREDIT: https://flaviocopes.com/how-to-shuffle-array-javascript/
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
            question.answer = math.evaluate(question.expressionString, { x: variableValue }) // note: Gameboard class is exported to modals.js then to main.js namespace where math object is available
        });
    }

    /**
     * rankQuestions instance method assigns ranking to questions by descending value of question answer property
     * rankQuestions must be invoked AFTER evaluate expressions method so that question.answer !== null
     */
    rankQuestions() {
        let answersWithIdArray = []; // create temp array for sorting
        this.questions.forEach(function(question) {
            answersWithIdArray.push([question.answer, question.id]); // temp array stores [answer, Id] pairs (Id is the index of question in this.questions array)
        })

        answersWithIdArray.sort(function(a, b) {return b[0] - a[0];}); // sort [answer, Id] pairs array by descending values of answer
    
        var self = this; // create self binding that refers to gameboard instance so that this.questions can be updated within callback scope
        let prevAnswer = null;
        let sameRankingsCounter = 0; // tracks questions that have been assigned same ranking value (since answer values are equal)
        answersWithIdArray.forEach(function(answerWithId, ranking) {
            if (answerWithId[0] === prevAnswer) {
                self.questions[answerWithId[1]].ranking = ranking - 1 - sameRankingsCounter; // if next item in sorted answersWithIdArray have same value at index 0 then assign same ranking as previous item
                sameRankingsCounter += 1;
            } else {
                self.questions[answerWithId[1]].ranking = ranking - sameRankingsCounter;
            }
            
            prevAnswer = answerWithId[0];
        })
    }

    /**
     * adds event listener to every grid item on gameboard with this.showGameboardOverlay method as callback
     */
    addAllGridItemEventListeners() {
        $('.gameboard-grid-item').click(this.showGameboardOverlay); // adds handler to all grid expression CONTAINERS
    };


    /**
     * displays gameboard overlay element on page
     * adds selected question as currentQuestion property of gameboard
     * adds mjx-container element from selected DOM element to gameboard overlay
     * @param {object} clickEvent 
     */
    showGameboardOverlay(clickEvent) {
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        $('#gameboard-overlay').removeClass('hide');
        this.currentQuestionId = clickEvent.currentTarget.questionId; // store id of selected question as property on instance
        let cloneMjx = clickEvent.currentTarget.firstChild.firstChild.cloneNode(true); // create deep copy of selected math jax content node so that it remains on gameboard when appended to gameboard overlay
        $('#gameboard-active-question span').append(cloneMjx); //adds mjx-container element from selected DOM element

        
    }

     

}

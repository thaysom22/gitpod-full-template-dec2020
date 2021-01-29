import { getRandomRange } from "./helpers.js";
export { Gameboard };


class Gameboard {
    constructor(difficultySetting){
        this.currentQuestionId = null;
        this.difficultySetting = difficultySetting;
        this.questions = setupGame(difficultySetting); // generate questions, populate gameboard grid in DOM

        // returns array of question objects and updates .grid-expression element content and properties
        function setupGame(difficultySetting) {
            let questions = initializeQuestions(difficultySetting);
            $(".grid-expression").each((index, span) => {
                span.textContent = questions[index].latexString; // 'this' refers to current DOM element in .each() loop
                span.parentElement.questionId = questions[index].id; // creates a DOM property questionId which stores corresponding question object id value on .grid-expression (parent) 
            });

            MathJax.typeset() // call mathjax synchronous .typeset() method as HTML was changed from when document was first rendered 
            return questions;
        
            // returns an array of question objects with expressionSring and LaTexString values set 
            function initializeQuestions(difficultySetting) {
                let questions = [];
                let expressions = generateExpressions(difficultySetting);
                expressions.forEach(function(expression, index) {
                    let question = {
                        id: index, // id [0 - 15]
                        expressionString: expression,
                        latexString: generateLatex(expression),
                        answer: null,
                        ranking: null, // ranking [0 - 15] by descending answer value
                        disabled: false,
                    };
                    questions.push(question);
                });

                return questions;
            }

            // returns a shuffled array of expressions (strings) with randomized coefficients
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

                let shuffledExpressions = unshuffledExpressions.sort(() => Math.random() - 0.5);  // CREDIT: https://flaviocopes.com/how-to-shuffle-array-javascript/
                return shuffledExpressions;
            
                // returns a random number in required range using imported getRandomRange function
                function randCoeff(difficultySetting) {
                    if (difficultySetting === "Easy") {
                        return getRandomRange(1, 3); 
                    } else if (difficultySetting === "Hard") {
                        let hardOutput = getRandomRange(-10, 10);
                        return hardOutput === 0 ? randCoeff("Hard") : hardOutput; // conditional recursive call to randCoeff function to avoid returning 0
                    }
                }
            }

            // converts expression (string) to LaTex format, using math.js functions
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
        }  
    }
    
    /**
     * filters questions, evaluates expressions in questions array, ranks questions based on their evaluation, adds event listener to all .gameboard-grid-item elements
     * @param {Number} variableValue - random value in required range generated by clickToPlay object
     */
    setupNewTurn(variableValue){
        this.questions = filterQuestions(this.questions); // remove disabled questions
        evaluateQuestions.bind(this)(variableValue); // sets answer property for each question object in questions array
        rankQuestions.bind(this)(); // assigns ranking to questions by descending value of question answer property
        addGridEventListeners.bind(this)(); // turn on event listener for all .gameboard-grid-item:not(.disabled) elements in DOM
        setupOverlay(variableValue); // resets overlay from last answer submission

        function filterQuestions(questionsArray){
            return questionsArray.filter(question => !question.disabled)
        }
        
        function evaluateQuestions(variableValue){
            this.questions.forEach(function(question){
                let context = { x: variableValue };
                question.answer = math.evaluate(question.expressionString, context) // math object is available in global namespace
            });

            return;
        }

        function rankQuestions(){
            let answersWithIdArray = []; 
            this.questions.forEach(function(question) {
                answersWithIdArray.push([question.answer, question.id]); // array stores [answer, questionId] items
            });

            answersWithIdArray.sort(function(a, b) {return b[0] - a[0];}); // sort by descending values of answer

            let prevAnswer = null;
            let sameRankingsCounter = 0; // tracks number of questions that have been assigned same ranking value
            var self = this; // create self binding that refers to gameboard instance 
            answersWithIdArray.forEach((answerWithId, ranking) => {
                if (answerWithId[0] === prevAnswer) {
                    self.questions.find(question => question.id === answerWithId[1]).ranking = ranking - 1 - sameRankingsCounter; // if next item in sorted answersWithIdArray has same value at index 0 then assign same ranking as previous item
                    sameRankingsCounter += 1;
                } else {
                    self.questions.find(question => question.id === answerWithId[1]).ranking = ranking - sameRankingsCounter;
                }

                prevAnswer = answerWithId[0];
            })
        }

        function setupOverlay(variableValue){
            $('#variable-value-overlay').text(variableValue); 
            $('#gameboard-overlay-content form').removeClass("hide");
            $('answer-feedback').addClass('hide');
            $('#gameboard-overlay-content').removeClass("correct-user-answer").removeClass("incorrect-user-answer"); 
            $('#answer-feedback i').removeClass();
            $('#answer-feedback .feedback1').text("");
            $('#answer-feedback .feedback2').text("");
            $('#answer-feedback .feedback3').text("");
        }

        function addGridEventListeners(){
            $('.gameboard-grid-item:not(.disabled)').click(activateGameboardOverlay.bind(this)); // adds handler to all grid expression CONTAINERS that DO NOT HAVE .disabled class
            $('.gameboard-grid-item:not(.disabled)').addClass("cursor");

            // EVENT LISTENER FOR .gameboard-grid-item ELEMENTS
            function activateGameboardOverlay(clickEvent) {
                clickEvent.preventDefault();
                clickEvent.stopPropagation();

                let currentEventTarget = clickEvent.currentTarget; 
                this.currentQuestionId = currentEventTarget.questionId; 
                let cloneMjx = currentEventTarget.firstChild.firstChild.cloneNode(true); // create deep copy of selected math jax content node so that it remains on gameboard when appended to gameboard overlay
                
                showOverlay.bind(this)(cloneMjx); // unhides overlay to user, sets overlay content, turns on overlay event listeners

                function showOverlay(mjxContent){
                    $('#player-answer').val(""); // empties #player-answer input field
                    $('#gameboard-active-question span').prepend(mjxContent); //adds mjx-container element from selected DOM element to overlay
                    $('#choose-again-button').click(chooseAgainHandler.bind(this)); // turn on event listeners for overlay buttons
                    $('#submit-player-answer-button').click(userAnswerSubmitHandler.bind(this)); 
                    $('#gameboard-overlay').removeClass('hide'); // finally, unhide

                    // called by both chooseAgainHandler and userAnswerSubmitHandler
                    function hideGameboardOverlay(delay) {
                        $('#choose-again-button').off("click"); // turn off event overlay listeners
                        $('#submit-player-answer-button').off("click");
                        // delay hiding of overlay by 4 seconds
                        setTimeout(() => {
                            $('#gameboard-overlay').addClass('hide');
                            $('#gameboard-active-question span').children().remove(); 
                        }, delay);
                    }
                    
                    // EVENT LISTENER FOR #choose-again-button ELEMENT
                    function chooseAgainHandler(clickEvent){
                        clickEvent.preventDefault();
                        clickEvent.stopPropagation();
                        this.currentQuestionId = null; 
                        hideGameboardOverlay.bind(this)(200);
                    }
                    
                    // EVENT LISTENER FOR #submit-player-answer-button ELEMENT
                    function userAnswerSubmitHandler(submitEvent) {
                        submitEvent.preventDefault();
                        submitEvent.stopPropagation();
                        
                        let questionId = this.currentQuestionId;
                        let userAnswerString = $('#player-answer').val();
                        let userAnswerNumber = Number(userAnswerString);
                        let correctAnswer = this.questions.find(question => question.id === questionId).answer;
                        let userAnswerRegex = /^-?\d+(\.\d+)?$/g // regex matches only valid (positive and negative) numerical (including decimal) user inputs without letters or other characters CREDIT: https://regexone.com/problem/matching_decimal_numbers 
                        let correctBool;
                        if (userAnswerString.match(userAnswerRegex)) { // if valid answer entered by user, turn is over
                            
                            if (userAnswerNumber === correctAnswer) { 
                                correctBool = true;
                                $('#gameboard-overlay-content').addClass("correct-user-answer");
                                $('#answer-feedback i').addClass("fas fa-check-circle"); // CREDIT: https://fontawesome.com/
                                $('#answer-feedback .feedback1').text("Correct!");
                            } else {
                                correctBool = false;
                                $('#gameboard-overlay-content').addClass("incorrect-user-answer");
                                $('#answer-feedback i').addClass("fas fa-times-circle"); // CREDIT: https://fontawesome.com/ 
                                $('#answer-feedback .feedback1').text(`Incorrect, the correct answer is: ${correctAnswer}`);
                            }
                            
                            disableQuestion.bind(this)(questionId); // if a valid user attempt has been made, disable question
                            this.currentQuestionId = null; 
                            hideGameboardOverlay.bind(this)(4000); // 4 second delay for answer feedback

                            // store ranking of current question and calculate the score for turn 
                            let activeQuestionRanking = this.questions.find(question => question.id === questionId).ranking; // get the ranking of the active question
                            let playerTurnScore = calculateTurnScore(correctBool, activeQuestionRanking); // calculate the score based on user input and active question ranking


                            $('#answer-feedback .feedback2').text(`Chosen expression value ranking: ${activeQuestionRanking+1}`); // adjust ranking to be 1-indexed for user
                            $('#answer-feedback .feedback3').text(`Score for your turn: ${playerTurnScore}`);
                            $('#gameboard-overlay-content form').addClass("hide");
                            $('#answer-feedback').removeClass('hide');

                            $('.gameboard-grid-item').off("click"); // remove event listeners from gameboard grid
                            $('.gameboard-grid-item').removeClass("cursor");
                            // set up clickToPlay component for new turn and update scoreboard for end of turn
                            // delay for gameboard overlay feedback to display equal to overlay hide delay
                            setTimeout(() => {
                                window.scoreboard.endPlayerTurn(playerTurnScore); 
                                window.clickToPlay.setupNewTurn();  
                            }, 4000);    
                        } else {
                            // display error message on gamebaord overlay for 5 seconds
                            $('#player-answer-error-message').text("Enter a valid value!"); 
                            setTimeout(() => {
                                $('#player-answer-error-message').text("");
                            }, 5000);
                        } 

                        // returns the score for a player's turn
                        // highest: 6 points, 2nd: 5, 3rd: 4, 4th: 3, 5th: 2, other: 1 incorrect: -1
                        function calculateTurnScore(responseCorrect, questionRanking){
                            if (!responseCorrect) {
                                return -1;
                            } else if (questionRanking === 0) {
                                return 6;
                            } else if (questionRanking > 0 && questionRanking < 5) {
                                return (-1*questionRanking + 6);
                            } else {
                                return 1;
                            }
                        }
                        
                        function disableQuestion(questionId){
                            this.questions.find(question => question.id === questionId).disabled = true; // update disabled property to true
                            $(currentEventTarget).addClass('disabled'); // add .disabled class to clicked .gameboard-grid-item element
                        }   
                    }
                }
            }
        }
    }   
}

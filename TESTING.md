# TESTING

* [Link to main README.md file](./README.md)
* [Link to deployed site]()
* [Link to GitHub repository for site](https://github.com/thaysom22/maths-substitution-game)

## Contents

1. Client stories testing
2. Manual Testing
3. Automated testing 
4. Bugs log
5. Other testing

## 1. Client stories testing

Testing of all client stories from README.md file:

**As a player...**

1. I want to easily understand the aim of the game, so that I can think about how to leverage and employ my mathematical knowledge.

    * The popup information icon is clearly visible and accessible in the header in the welcome modal and at all times during the game on the main page. 
    * The information icon uses an easily recognisable icon and a label beneath so players know to use it to find instructions for the game.
    * The information pop up displays instructions prominently in an ordered list in the middle of the screen.
    * The main game itself has dynamic effects and instructions that prompt the player on what to do next: the ? icon pulses when it should be clicked and a 'choose an expression' message is displayed when a player should click the grid.

2. I want to easily find and understand the controls of the game and how to interact with them, so that I can engage and play effectively and implement my strategies

    * The main game itself has dynamic effects and instructions that prompt the player on what to do next: the ? icon pulses when it should be clicked and a 'choose an expression' message is displayed when a player should click the grid.
    * All inputs are validated and simple appropriate error messages are displayed to the user to guide them to interact successfully with the game's controls.
    * The players can access the information pop up at anytime during the game if they are confused as to how to interact with the game.
    * All buttons, inputs and interactive elements are prominently displayed to the user with textual prompts and hover/active effects so user knows they are interactive components

3. I want clear user feedback from my interaction with the game, so that I know whether I have completed an interaction correctly.

    * All inputs are validated and simple appropriate error messages are displayed to the user when necessary to guide them to interact successfully with the game's controls.
    * The 'click to play' element updates each turn with the current player's name so users know who has the turn
    * The instruction in the 'click to play' element updates to guide player through their turn.
    * A player is not able to click on a 'wrong' element as event listeners are toggled dynamically throughout a turn
    
4. I want mathematical questions, notation and content that is relevant to my level of knowledge and understanding, so that I can succeed at the aims of the game, learn from feedback and have fun playing the game.

    * Players can choose the difficulty level for the game on the welcome page to adjust the complexity of the expressions and the range of values for the random variable generated.
    * Players can choose 'new game' at the end game modal if they want to make the game easier/harder than last play.
    * Both difficulty levels have a range of complexity for expressions so game is accessible and useful to the widest range of abilities possible. 
    * Player is informed by background color change and message after they attempt to answer a question about if it was correct and how many points it was worth so they can understand and improve their performance

5. I want to see my score and my opponent's game score easily and clearly, so I can know if I am winning the game or not!

    * Total scores and turns reamining are displayed at all times during the main game at the top of the page. 
    * The points per turn are displayed after a player enters a valid response to a question. 
    * At the end of the game the winner (or draw) is announced and final player scores are clearly displayed.

6. I want to test my mathematical understanding and fluency, so that I can understand and try to correct any misconceptions I am retaining.

    * Visual feedback is provided immediately when a player answers a question by a background color change and a message: the player is told if their answer was correct and how high it's value was in the available questions.
    * Total player scores are displayed so players can measure their performance against each other and see improvement over multiple games.

7. I want feedback on my relative performance in the game during play and over multiple plays, so that I can measure and set targets for my improvement.

    * Visual feedback is provided immediately when a player answers a question by a background color change and a message: the player is told if their answer was correct and how high it's value was in the available questions.
    * Total player scores are displayed so players can measure their performance against each other and see improvement over multiple games.
    * Final scores for each player are displayed at the end of the game so players can track their performance over multiple games

8. I want to be able to choose between levels of difficulty for the game, so that I can play at the level appropriate for me and I can continue to stay engaged and challenged as I improve. 

    * Players can choose the difficulty level for the game on the welcome page to adjust the complexity of the expressions and the range of values for the random variable generated.
    * Players can choose 'new game' at the end game modal if they want to make the game easier/harder than last play.
    * Both difficulty levels have a range of complexity for expressions so game is accessible and useful to the widest range of abilities possible within the constraints of the topic and target audience.

**As a teacher...**

1. I want the game to be easy to understand and interact with for players, so that it requires minimal explanation from me and I can focus on correcting my pupils' understanding of the mathematical concepts. 

    * The popup information icon is clearly visible and accessible in the header in the welcome modal and at all times during the game on the main page. 
    * The information icon uses an easily recognisable icon and a label beneath so players know to use it to find instructions for the game.
    * The information pop up displays instructions prominently in an ordered list in the middle of the screen.
    * The main game itself has dynamic effects and instructions that prompt the player on what to do next: the ? icon pulses when it should be clicked and a 'choose an expression' message is displayed when a player should click the grid.

2. I want the user interface, player scores and player performance to be easily visible on the screen, so that I can see information to evaluate students understanding and intervene where necessary.

    * Player running totals, turns remaining and the current active player are displayed promintently at the top of the page so the teacher can quickly see how each player is performing.
    * Layout and interactive elements are clear and bold so teacher can see player input and the background color change of the gameboard overlay lets teacher know if reponses are correct.

3. I want the game to be fun and engaging, so that players are motivated to try their best and want to understand the concepts better so they can perform better in the game.

    * The game is vibrant and colorful with a playful pallete
    * The fonts chosen are friendly and fun to give the application an attractive appearance. 
    * The elements of the game are easy to interact with so users can focus on the mathematical content
    * The mathematical expressions are rendered in a way that is clear and familiar to students
    * The nature of the game is competitive for players against each other and also against themselves to try to beat their previous score. 
    * The players are challenged and engaged for longer as expressions are different each time as they are (partly) randomly generated for each game.

4. I want the mathematical concepts and difficulty to be relevant to the ability and curriculum of the players, so that I know I am providing them with a useful and relevant learning experience. 

    * The mathematical expressions involve functions and operations appropriate to the target audience even when randomly generated.
    * The template of the expressions is structured to test a variety of common misconceptions when substituting numbers. 
    
5. I want the game to offer differentiated levels of difficulty, so that I can challenge and support players of varying ability levels.

    * Players can choose the difficulty level for the game on the welcome page to adjust the complexity of the expressions and the range of values for the random variable generated.
    * Players can choose 'new game' at the end game modal if they want to make the game easier/harder than last play.
    * Both difficulty levels have a range of complexity for expressions so game is accessible and useful to the widest range of abilities possible within the constraints of the topic and target audience.

6. I want the game to provide feedback to players automatically and instantly, so that they can learn effectively independently and know when to ask for my input. 

    * Visual feedback is provided immediately when a player answers a question by a background color change and a message: the player is told if their answer was correct and how high it's value was in the available questions.
    * Total player scores are displayed so players can measure their performance against each other and see improvement over multiple games.
    * Final scores for each player are displayed at the end of the game so players can track their performance over multiple games

7. I want the styling, aesthetic design and effects of the application to be appropriate for the age of my students and gender neutral in tone, so that it is a visually stimulating experience for as many players as possible.

    * The game is vibrant and colorful with a playful pallete
    * The fonts chosen are friendly and fun to give the application an attractive appearance. 
    * The elements of the game are easy to interact with so users can focus on the mathematical content
    * The mathematical expressions are rendered in a way that is clear and familiar to students
    * The color scheme, font types and styling of elements appeals to both boys and girls

8. I want the application to keep track of player scores and performance automatically, so that they are motivated and engaged by competition and I can view their performance easily.

    * Visual feedback is provided immediately when a player answers a question by a background color change and a message: the player is told if their answer was correct and how high it's value was in the available questions.
    * Total player scores and remaining turns are displayed so players can measure their performance against each other and see improvement over multiple games.
    * Final scores for each player and the winner the game are displayed at the end of the game so players can track their performance over multiple games

















**Bugs Fixed**

* On final player2 turn the gameover modal was displaying before the user could see the background color change to indicate a correct/incorrect response. Fix: corrected by adding a delay equal to the delay for gameboard overlay feedback to the showGameoverModal function in the GameoverModal constructor
* Gameover modal always displaying 'this is a draw'. Fix: by corrected arguments passed to calculateScore function to player1Score and player2Score.
* When restart game is clicked and player1 first choses an expression, the chosen expression is displayed twice in gameboard overlay. Fix: removed event listener from click to play ? element in DOM before gameover modal is closed when game restarted.
* After a valid answer is submitted in gameboard overlay input, the event listener and pulse effect on the ? click to play element is activated before the gameboard is visible. This is confusing to users and interupts the flow of the game. Fix: a delay equal to the time the gameboard overlay shows for was added before the event listner and pulse effect are added. 
* MathJax content not rendering as intended after HTML is updated by javascript (prompted by user interactions). Fix: added a call to  MathJax.typeset() function to render updated html content after expressions for questions have been generated during gameboard setup.
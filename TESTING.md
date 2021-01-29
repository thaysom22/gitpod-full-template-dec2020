# TESTING

* [Link to main README.md file](./README.md)
* [Link to deployed site]()
* [Link to GitHub repository for site](https://github.com/thaysom22/maths-substitution-game)

## Contents

1. Client stories testing
2. Manual Testing (with bugs fixed)
3. Automated testing 
4. Other testing

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

## 2. Manual testing

Testing of display and functionality of all components of the application:

### 1. Welcome modal

**Main functions and layout**

* When url of site is loaded, the welcome modal displays with an overlay covering the main game behind.
* When the modal is viewed on mobile screen, all content is positioned correctly and text is readable and fits comfortably on smaller screen.
* When the modal is viewed on mobile screen and the content height exceed viewport height, the modal content scrolls and modal frame itself remains vertically centered.
* When the modal is viewed on a tablet screen, font sizes are readable and elements are positioned correctly and sized proportionally.
* When viewed on a desktop screen and above, modal content is centered horizontally and maintains structure by remaining at maximum width.
* When url of site is loaded, player name inputs are blank and display placeholder text. No difficulty level is selected. 
* When characters are input to player name inputs and/or a difficulty level radio button is selected and the page is refreshed without clicking 'start game', then page displays exactly as originally loaded.
* When either player name is left blank and 'start game' button is clicked - error message is displayed and modal remains visible and unchanged.
* When either player name is longer than 10 characters and 'start game' button is clicked - error message is displayed and modal remains visible and unchanged.
* When neither difficulty level is selected and 'start game' button is clicked - error message is displayed and modal remains visible and unchanged.
* When either player name is left blank AND neither difficulty level is selected, when 'start game' button is clicked - two error messages are displayed and modal remains visible and unchanged.
* When player names between 1 and 10 characters are entered and a difficulty leve is selected, when 'start game' button is clicked, the welcome modal hides with no error messages and the main gamebaord is visible.
* When start game button is hovered over with mouse or focussed with keyboard it exhibits a grow effect and a shrink effect when mouse/keyboard is pressed. On a touch screen a shrink effect is observed while pressed.
* When mouse cursor is hovered over all elements of welcome modal, the appropriate tool tip appears for user accessibility. 

**Info popover**

* When info button is pressed, a pop over containing instructions appears clearly on page, is readable on all device sizes and scrollable and the info button is still visible.
* While info popover is open, all other elements of the welcome modal except the heading and info button are hidden and cannot be interacted with. 
* When info button is pressed again, the popover closes and the welcome modal is visible exactly as before popover was opened.
* Hover/active grow/shrink effect is observed when button is hovered over, pressed and released on desktop. On a touch screen a shrink effect is observed while pressed.

* **TESTS for modal info popover repeated for info popover on main page when modal is closed as form and functionality are very similar.**

**Modal footer**

* When about button at bottom of screen is pressed, footer section is revealed fully without need for scrolling (other content pushed up in viewport). 
* Hover/active grow/shrink effect is observed when button is hovered over, pressed and released on desktop. On a touch screen a shrink effect is observed while pressed.
* Links to portfolio and repository direct correctly in a new browser tab. 
* Hover/active grow/shrink effect is observed when links are hovered over, pressed and released on desktop. On a touch screen a shrink effect is observed while pressed.
* When footer is visible, all other content on welcome modal can be interacted with as described above.
* When about button at bottom of screen is pressed while footer is displayed, footer content is hidden and content above moves down.

* **TESTS for modal footer repeated for footer on main page when modal is closed and on gameover modal when launched as form and functionality are very similar.**

**Bugs Fixed**

* Info (how to play) content not easily readable on mobile. Fix: changed font to title font and changed shape of element to more rectangular so it is less cramped on screen.
* Player name boxes too wide in welcome modal. Fix: decreased value of 'characters' attribute of these input elements from 10 to 8.
* Error messages in welcome modal overlap about footer trigger on tablet screen. Fix: added margin bottom to welcome input form wrapper. 
* Start game button hover grow effect remains after button is clicked and no longer being hovered over. Fix: added call to .blur() DOM method on this element during click event handler.
* Start game button hover grow effect STILL remains after button is pressed on mobile until screen is pressed elsewhere. Fix: added CSS4 'hover' media query. CREDIT: https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/
* On smaller mobile screens, info popover covered button in header. Fix: font size reduced on mobile and max height set using viewport height units.
* Welcome modal error messages displaying with a large gap between. Fix: removed margins inherited from other styles
* When info button is pressed with modal footer displayed, the info content covers the footer content. Fix: added javascript to hide all footer content and the footer button when info popover is open.
* When about button is clicked, the bottom of the footerconent is resting up against the viewport edge which makes it difficult to read. Fix: added window.scrollBy(0, 10) call to ensure it is fully in view.
* The main gameboard page is displaying behind the welcome modal when the text content of the scorebaord and click to play elements has not been set by inputs to the welcome modal. Fix: added 'hide' class to container element for main page when document first loaded and removed with jquery when welcome modal is closed. 

### 2. Click to play component

* When welcome modal is submitted (with valid player names and a difficulty level selected) and main page is first loaded, click to play component displays with player 1 name, a '?' icon which is pulsing and the text 'click to play' as content.
* When the ? icon is hovered over the cursor changes to a pointer and pop up text appears. 
* The click to play compenent content is readable and there is no overlap of elements on all screen sizes. 
* The position of this component on the main page layout is above the gameboard on mobile and desktop devices and to the left of the gameboard on desktop devices.
* ? continues to pulse until clicked. When clicked the ? disappears and replaced by a series of random numbers before displaying a final random number and the text 'choose an expression' beneath. The cursor no longer appears as a pointer and nothing now happens if anywhere in the element is clicked.
* When the gameboard is clicked on and the overlay opened, the content of this component does not change and still nothing happens if it is clicked on. 
* After the player submits an answer this component remains the same until the gameboard overlay closes. Then the content changes to: player 2 name, pulsing '?' icon and 'click to play!' text.
* Again, the ? disappears and replaced by a series of random numbers before displaying a final random number and the text 'choose an expression' beneath.
* This component repeats this pattern of functionality throughout the turns of the game.

**Bugs fixed**

* Size of font for current player name was too small on tablet and desktop devices. Fix: corrected css id seclector name in media queries.

### 3. Scoreboard component

* When welcome modal is submitted (with valid player names and a difficulty level selected) and main page is first loaded, scoreboard displays with player 1 name and player 2 name above each sub board. Small cirle has content: 5 turns. Large circle has content: 0 score.
* The scorebaord is readable and no parts overlap each other or other parts of the page on mobile, tablet and desktop views. 
* 'player 1 scoreboard' and 'player 2 scoreboard' tooltips appear when respective scoreboards are hovered over. Cursor does not appear as a pointer and nothing happens when scorebaord is clicekd at ANY TIME.
* After player1 submits a valid answer on gamebaord overlay input and gamebaord overlay hides, the turns remaining on the left subboard (below player 1 name) decreases to 4. If the answer is incorrect, the score decreases by one. If the answer is correct, the score increases by a number between 1 and 5 depending on the ranking of the value of the expression the player chose.
* After player2 submits a valid answer on gamebaord overlay input and gamebaord overlay hides, the turns remaining on the right subboard (below player 2 name) decreases to 4. If the answer is incorrect, the score decreases by one. If the answer is correct, the score increases by a number between 1 and 5 depending on the ranking of the value of the expression the player chose.
* After player 1's second turn, the turns remaining on the left subboard (below player 1 name) decreases to 4. If the answer is incorrect, the score decreases by one. If the answer is correct, the score increases by a number between 1 and 5 depending on the ranking of the value of the expression the player chose.
* The functionality continues thorought the game as above until start of player 2 turn when when player 1 turns = 0 and player 2 turns = 1. Then after player 2 submits valid answer, gameover modal shows: main gameboard, scoreboard and click to play components are hidden and final score are displayed correctly. 
* When restart game is clicked from gameover modal -scoreboard dispays with same content as when originally displayed after welcome modal submission and all above tests were repeated for scoreboard.

**Bugs fixed**

* Gameover modal does not launch when player 2 turns decrease to zero (game continues). Moved calls to endGameCheck() function to after call to updateScoreboardDOM() function so that when check on player2turns === 0 is performed the scorebaord object is up to date. Also removed setTimeout wrapper from showGameoverModal function so gameover modal is displayed immediately after gameboard overlay is closed.

### Gameboard component

* When main page is displayed from welcome modal the gameboard grid is displayed as two centered columns of 8 rectanges benath the scorebaord and click to play components containing LATEX rendered math expressions. On tablet devices the expressions display in a 4x4 grid with same page layout. On desktop devices the 4x4 grid displays to the right of the scoreboard and click to play components. 
* All mathematical expressions are readable on all device sizes and centered in their containers with no overflow on any device size.
* When the grid is initially displayed, the cursor does not display as a pointer when any part of this element is hovered over and nothing happens if anywhere in this element is clicked.
* If the page is refreshed and when the welcome modal is submitted again with other difficulty level, the above tests were repeated. The grid displays with a different set of mathematical expressions with different form and numbers. If this is repeated again and again with the same difficulty level then each time a new set of expressions is displayed. 
* Once player 1 has clicked 'click to play' element and a final random number has been generated: hovering anywhere over a rectangle in this gameboard grid the cursor displays as a pointer and when any element is clicked the grid is hidden behind a gameboard overlay. The overlay covers the entire gameboard exactly on all device sizes. 
* The gameboard overlay content contains the LaTEX rendered expression exactly equal to the content of the element of the covered grid that was selected, beneath this the text: 'evaluate when x=a' where a is the number currently displayed in the click to play element. Beneath this, an input element that focuses and allows text/numerical input when clicked on, finally beneath this: two buttons, 'Enter' and 'Choose again'.
* On all device sizes the content of the gameboard overlay displays in a vertical column layout and does not overflow the area of the elliptical inner container. The text and LaTEX are readable on all device sizes. 
* When the gamebaord overlay is displayed no where else on the page is clickable EXCEPT the info button. If the info button is clicked then all content except header dissapears and the instructions element is displayed and visible above the instructions box. The info button can be clciked again and all previous page content returns and instrcutions box hides.
* Both the 'enter' and 'choose again' buttons exhibit a smooth grow effect on hovering and return to orginal size when active. 
* If no answer is entered in the input box (left blank) and 'enter' button is clicked: text in red appears above the 'enter button': 'Enter a valid value' for 5 seconds before hiding. The overlay does not hide and the rest of the content does not change.
* If an non-numerical or invalid answer (spaces, letters, symbols) is entered in the input box and 'enter' button is clicked: text in red appears above the 'enter button': 'Enter a valid value' for 5 seconds before hiding. The overlay does not hide and the rest of the content does not change.
* If the 'choose again' button is clicked when there is content or no content in the input box, the overlay hides and the gamebaord displays with all elements clickable. If any expression is clicked then the overlay reopens with the input box empty and no error messages displayed.
* If the correct answer for the value of the expression shown is entered, the background of the overlay turns green and the input box and buttons are hidden and replaced  by a tick icon and text saying: "correct", "chosen expression value ranking: " (The ranking of the chosen expression for the random number generated) and "score for your turn: " (The score based upon the ranking). This test was repeated for numerous different expressions and variable values to confirm this content is displayed whenever the answer is correct. 
* When player 1 submits a valid but incorrect answer in the gameboard overlay input, the background of the overlay turns red and the input box and buttons are hidden and replaced by content: "Incorrect, the correct answer was: a" where a is the correct value for the chosen expression and random number displayed in click to play element; "chosen expression value ranking: " and "score for your turn: " (which is -1 if answer submitted is incorrect).
* After a correct or incorrect (valid) answer is submitted, the overlay hides again after 5 seconds. The score increase for the player 1 scoreboard is equal to the score for turn value just displayed in overlay. The click to play is displaying a pulsing ? icon with player 2 name above. The rectangle containing the grid expression that was just selected by player 1 now has a grey background. When player 2 clicks the ? icon and a final random number is displayed, all grid expression rectangles on the gameboard are clickable EXCEPT the one with a grey background. 
* The above tests where completed for player 2's turn and again for player 1's turn until the end of the game. Each time the selected expression turned gey and was not available to click for the follow plater's turn. Once an expression was chosen from the grid and turned grey it was never clickable again during the game. Then a new game was started with same difficulty level and the tests were repeated again for the different expressions. The again, twice, with other difficulty level.

**Bugs fixed**

* After a valid answer is submitted in gameboard overlay input, the event listener and pulse effect on the ? click to play element is activated before the gameboard is visible. This is confusing to users and interupts the flow of the game. Fix: a delay equal to the time the gameboard overlay shows for was added before the event listner and pulse effect are added. 
* MathJax content not rendering as intended after HTML is updated by javascript (prompted by user interactions). Fix: added a call to  MathJax.typeset() function to render updated html content after expressions for questions have been generated during gameboard setup.
* Gameboard grid element has uneven horizontal space either side and is pushed up against the right edge of viewport. Fix: removed margins from grid item and added padding to main page wrapper and to wrapper for gamebaord for tablet sizes and above.
* Buttons have a jerky animation between hover and active pseudo class states. Fix: changed active state transform to scale(1) so that satisfying press down effect is still achieved but button does not 'bounce' in an awkward way when clicked quickly.
* Gameboard overlay was extending over whitespace to the right of grid on tablet and mobile. Fix: used calc() to reduce the width of gameboad overlay by the x-padding on gamebaord wrapper.
* With elliptical border, gameboard overlay content was overflowing outside border on tablet and desktop devices. Fix: reduced border radius to make overlay content border a rectangle with curved corners and increased height of container for overlay content on tablet and desktop sizes so all content fits comfortably.
* If the info button is clicked when gameboard overlay is displayed, the gamboard overlay does not hide. Fix: Used jQuery to add .hide class to outer parent gameboard-wrapper, not gamebaord-grid-container when info button is clicked. 
* If the info button is clicked when gameboard overlay is displayed, the header is obscured by the instructions element. Fix: changed .hide class from display:none to visibility: hidden style to push header up.
* If the 'restart game' button is clicked in the gameover modal, the gameboard displays with a new set of expressions corresponding to the difficulty level of the preceeding game. All the appropriate above tests were then repeated for the gameboard and for the click to play and scoreboard components.

### 4. Gameover Modal

* When player 2 turns remaining is 1 on the scoreboard, after player 2 has submitted a valid answer on gamebaord overlay, the gameover modal displays on top of all other content. 
* Layout of gameover modal is clear and readable on mobile, tablet and desktop view sizes. Font size and element size is larger on tablet sizes than mobile. There is no overlap or overflow of elements and all elemnts are centered horizontally. 
* Content of gameover modal is a header text, the info button does not appear on gameover modal, an elliptical component containing "Game over" and the name of the player with the highest score total at the end of the game. This was tested by playig a game where player 1 won and where player 2 won and checking the result displayed correctly. The game was also played so that it was a draw and the text: "The game is a draw" was displayed as expected. 
* The elements below display player 1 name and final score and player 2 name and final score respectively. These were tested by playing multiple games at different difficulties, with different player names and different final scores and winner/loser and confirming the names matched those netered in the welcome modal and displayed in the scoreboard component on the main page and the scores are correct (after adding on the last turn score for player 2 to the player 2 total last seen displayed on scoreboard)
* The restart game and new game buttons display below with the hover grow effect when hovered and clicked and with a cursor pointer. 
* When the restart game button is clicked the main page is displayed with the player score reset to zero, the player turns reset to 5 and the click to play element showing player 1 name and the pulsing '?' icon. All the above tests for the gameboard, click to play and scoreboard components were repeated for the restarted game. 
* When the new game button is clicked the page refreshes and the welcome modal is displayed with empty input boxes and no difficulty level selected. * All the above tests for the gameboard, click to play and scoreboard components were repeated for the new game.

**Bugs fixed**

* On final player2 turn the gameover modal was displaying before the user could see the background color change to indicate a correct/incorrect response. Fix: corrected by adding a delay equal to the delay for gameboard overlay feedback to the showGameoverModal function in the GameoverModal constructor
* Gameover modal always displaying 'this is a draw'. Fix: by corrected arguments passed to calculateScore function to player1Score and player2Score.
* When restart game is clicked and player1 first choses an expression, the chosen expression is displayed twice in gameboard overlay. Fix: removed event listener from click to play ? element in DOM before gameover modal is closed when game restarted.
* restart game and new game buttons are pushed off the bottom of the page on mobile views. Fix: reduced margin and padding and size of all elements for mobiel and added media queries and styles for tablet and above.
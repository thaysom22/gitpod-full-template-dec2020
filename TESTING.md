* welcome modal content height greater than modal container on larger aspect ratio viewports - fix "_modals.scss"
* On first loading site browser default fonts displayed briefly before webfonts on server load
* Copyright symbol in footer not centered vertically with text in span
* Check appearance of site on very large viewport sizes

**Bugs Fixed**

* On final player2 turn the gameover modal was displaying before the user could see the background color change to indicate a correct/incorrect response. Corrected by adding a delay to the showGameoverModal function in the GameoverModal constructor
* Gameover modal always displaying 'this is a draw'. Fixed by correcting arguments passed to cacluateScore function to player1Score and player2Score.
* When restart game was clicked and player1 first chose an expression, the expression was displayed twice in gameboard overlay. Fix: emptied dynamic gameboard overlay content in restart game function.
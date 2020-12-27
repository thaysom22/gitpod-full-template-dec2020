# Substitution Grid Game (Substitution Skirmish!)

*An engaging and educational two player head-to-head maths game. Designed for middle school maths students learning the concepts of evaluating algebraic expressions and order of operations.*

[Play the game here](url)

## Table of Contents

1. UX

2. Features

3. Technology stack and dependencies

4. Deployment process

5. [Testing](./TESTING.md)

6. Acknowledgements and credits

## 1. UX

### 1.1 Project goals

**Player goals**

Audience: 

The primary target audience for players of this game is *10-15 year old children studying middle school level mathematics*. The secondary target audience is younger children for extension material or older children/adults for learning support material. 

Goals:

* Practice and test the mathematical concepts of substitution and order of operations.
* Practice and test the mathematical concepts of arithmetic operations, negative numbers and basic indices.
* Have fun testing their knowledge and competing against an opponent. 
* Improve confidence and fluency with numeracy and algebra skills.
* Have a positive and useful educational experience.

How project will satisfy these player goals:

* Game is designed to be adversarial to encourage focus and to motivate players - the game is head to head and is called 'Substitution Skirmish'. 
* Provides useful feedback to players about whether they have evaluated an expression correctly.
* Feedback is provided to players after each about whether they chose the optimal expression from the grid so that they can understand and improve their performance in the game over time.
* Complexity of algebric expressions is aligned with UK GCSE curriculum for expected level of proficiency of pupils aged 10-15 years.
* Mathematical notation used is clear, unambiguous and appropriate to experience of target audience players.
* Expressions vary each time the game is played to provide value to players for a longer period of time.
* UI of game board and controls is intuitive for new players to use.
* Styling and design is planned to be engaging and attractive to players of target audience.
* User feedback is clear, immediate and intuitive so players learn quickly how the game works.

**Teacher goals**

Audience:

The target audience for teachers using this game is *teachers/tutors of any school/national mathematics curriculum.*

Goals:

* To engage and motivate their students to practice and improve.
* Test students' knowledge and understanding by measuring their performance.
* Provide students with instant, automated feedback for their learning.
* To supply students with a less routine, more game based practice of mathematics. 
* To provide students with an activity that is educationally relevant and which has clear learning development value.
* An activity that facilitates differentiation for students of varying abilities in mathematics. 
* An activity that is easy to learn and undertstand how to engage with without much teacher instruction/intervention.


How project will satisfy these teacher goals:

* The game has a head-to-head competitive format to engage learners.
* Keeps track of performance of players in the game by measuring and informing when they chose the optimum expression.
* The visual design of the game is vibrant, fun, engaging and stimulating to learners with bold colors and simple user feedback.
* The game randomizes the selection of expressions so it is useful as a learning exercise multiple times and improvement can be seen over attempts made.
* There are difficulty options available to the user to provide a selection of more/less complex expressions to players of different ability levels. 
* The instructions and guidance for how to play the game is clearly displayed to the user and available at all times. 
* The user is clearly and gracefully informed if they perform an incorrect or disallowed action or input.

**Developer and site owner goals**

* As a secondary maths teacher - to create a useful and engaging learning activity to help mathematics students in my classes and in my school community. 
* To practice and deepen my understanding of how to use JavaScript, HTML and CSS by creating an interactive, user-friendly web appliations.
* To begin the journey of creating interactive educational applications as I seek to change to a career in this sector. 
* To create a project that can be part of an interesting and commercially viable developer porfolio to help me find a job.
* To learn more about and practice the paradigm of test-driven development (TDD) with JavaScript and the Jasmine test suite. 
* To improve my ability to design and create useful educational experiences with technology through the process of planning, implementing and testing this application and crucially, obtaining feedback from other teaching proffessionals. 

### 1.2 User Stories

As a player...

1. I want to easily understand the aim of the game, so that I can think about how to leverage and employ my mathematical knowledge.
2. I want to easily find and understand the controls of the game and how to interact with them, so that I can engage and play effectively and implement my strategies
3. I want clear user feedback from my interaction with the game, so that I know whether I have completed an interaction correctly.
4. I want mathematical questions, notation and content that is relevant to my level of knowledge and understanding, so that I can succeed at the aims of the game, learn from feedback and have fun playing the game.
5. I want to see my score and my opponent's game score easily and clearly, so I can know if I am winning the game or not!
6. I want to test my mathematical understanding and fluency, so that I can understand and try to correct any misconceptions I am retaining.
7. I want feedback on my relative performance in the game during play and over multiple plays, so that I can measure and set targets for my improvement.
8. I want to be able to choose between levels of difficulty for the game, so that I can play at the level appropriate for me and I can continue to stay engaged and challenged as I improve. 

As a teacher...

1. I want the game to be easy to understand and interact with for players, so that it requires minimal explanation from me and I can focus on correcting my pupils' understanding of the mathematical concepts. 
2. I want the user interface, player scores and player performance to be easily visible on the screen, so that I can evaluate students understanding and intervene where necessary.
3. I want the game to be fun and engaging, so that players are motivated to try their best and want to understand the concepts better so they can perform better in the game.
4. I want the mathematical concepts and difficulty to be relevant to the ability and curriculum of the players, so that I know I am providing them with a useful and relevant learning experience. 
5. I want the game to offer differentiated levels of difficulty, so that I can challenge and support players of varying ability levels.
6. I want the game to provide feedback to players automatically and instantly, so that they can learn effectively independently and know when to ask for my input. 
7. I want the styling, aesthetic design and effects of the application to be appropriate for the age of my students and gender neutral in tone, so that it is a visually stimulating experience for as many players as possible.
8. I want the application to keep track of player scores and performance automatically, so that they are motivated and engaged by competition and I can view their performance easily.

### 1.3 Wireframes and design choices

* Wireframes were created using [Balsamiq](url)

[Link to wireframes stored locally on server](url)

**Design choices**

Information architecture

* Modals instead of separate pages were used for welcome and game over user sub-interfaces to avoid page reload and provide a soother more coherent UX.

Design approach

* A desktop first approach was considered as the main use of the application will be in classrooms where users will have larger screen sizes. However, in order to ensure the application is accessible and performant for all users on mobile (and those outside a classroom environment), a mobile first approach was chosen with an aim to optimize the experience for tablet/desktop screen sizes as much as possible.
* 

Colors:

* A colorful, vibrant color palette was selected using the 'trending' feature from [coolors.co](https://coolors.co/palettes/trending). The contrast in the palette makes the game board and interactive elements easy to see and navigate for younger users. The bright colors and contrast are used to aid the experience of user interaction by making it easier to understand how to play the game and see feedback.
![color palette](url)
* Strong and striking color contrasts were chosen for various togglable display/hide elements of the page to guide users' attention on a busy user interface.


Fonts:

* Selected and downloaded from [fontspace](url). Both fonts under a 'free' liscence. 
* [Arbei Berry](https://www.fontspace.com/a-arbei-berry-font-f45335) font was chosen as a title font for it's bold, clear glyphs and a fun, playful feel.
* [Really Free](https://www.fontspace.com/really-font-f45186) font was chosen as a body text/aside font for it's contrast with Arbei Berry and it's attractive, fun, freeflowing qualities.
* These fonts were chosen to emphasize fun and to be engaging for children. The core purpose of the game is learning maths which is daunting and somethimes dry to children so it was important for the aesthetic to be accessible and feel unthreatening and light-hearted. 

User feedback:

* Clear and immediate feedback provided by snappy animations and transitions during gameplay to make experience more satisfying and enjoyable for players who are interacting under time pressure. 

Layout:

* I decided against using the Bootstrap framework because I wanted finer control over responsive layout by using specific breakpoints for media queries. Also I felt a Grid layout was very appropriate to this project and I wanted practice using CSS Grid system directly, even if this was more time consuming. 
* The gameboard is much taller and narrower on mobile viewport so player scores and 'click to play' elements are always visible fixed to top of viewport when scrolling down page.

## 2. Features

### 2.1 Existing features

* Countdown timer
* Scoreboard
* Gameboard grid
* How to play togglable (show / hide) info element
* Welcome modal
* Togglable (show/hide) 'About' footer. 
* Game over modal

### 2.2 Features left to implement

*
*
*
*

## 3.Technology Stack and Dependencies

* CDNs used...
* [SASS]() CSS pre-processor
*
*
*
*
*

## 4. Deployment Proceedure

### 4.1 Deployment process followed by developer to hosting platform

*
*
*

### 4.2 How to clone and run this project locally

*
*
*

## 5. Testing

* Found in separate [TESTING.md](./TESTING.md) file.

## 6. Acknowledgements and Credits

### 6.1 Credits

**Content**

* [Font Awesome](url) used for font icons and docs for accessibility best practices.

**Media**

**Code**

* CREDIT: WebDevSimplifed YouTube channel for practice of using these reset styles

### 6.2 Acknowledgements

*
*
*

### 6.3 Disclaimer

The content of this website is for educational purposes of developer only. The project was created for the assessment requirements of the 'Code Institute Full Stack Diploma in Software Development' and the developer has no commercial purposes for this project.
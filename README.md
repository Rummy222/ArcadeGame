frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

Arcade Game  - Frogger

How to Play this Game!
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
To Play the Frogger game
1.  The player starts at the bottom of the screen
GOAL OF THE Game
----------------------
The Goal of the Game is to get to the top of the screen where the blue water is
without colliding with the bugs
2.  The player is moved by using the arrow keys at the bottom of the keyboard
3.  The player cannot move off of the gameboard where the tiles are
4.  move up the screen with the arrows and avoid the bugs!
5.  when you reach the top the game will display a message in the console
6.  if you win the game or if you lose, your player will move back to the starting position

How to Run the game
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
The game is composed of several files.  The App.js file is
the crux of the programming

There are two main objects Player and enemy
Player has methods that handle rendering and movement
Enemy has methods that handle rendering, movement and collision
Both are instantiated at the bottom of the file

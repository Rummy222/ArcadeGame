//>>>>>    ENEMY CLASS    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// 2.)    Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x <= 505) { //canvas.width is 505 pixels out
        this.x = this.x + this.speed * dt;
    } else {
        this.x = -2;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>    Player class      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    //set x boundaries
    if (this.x < 0) {
        this.x = 0;
    }

    // Check for collisions with the bugs
    for (var i = 0; i < 3; i++) {
        if (((this.y < allEnemies[i].y + 72) &&
        (this.y + 72 > allEnemies[i].y) &&
        this.x < allEnemies[i].x + 72) &&
        (this.x + 72 > allEnemies[i].x)) {
            this.reset();
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

    if (key === 'left') {
        if (this.x > 0) {
            this.x = this.x - 100;
        }
    } else if (key === 'right') {
        if (this.x < 400) {
            this.x = this.x + 100;
        }
    } else if (key === 'up') {
        if (this.y > 0) {
            this.y = this.y - 80;
        }
    } else if (key === 'down') {
        if (this.y < 380) {
            this.y = this.y + 80;
        }
    }
    //   player wins method
    if (this.y <= 0) {
        this.reset();
        console.log('you made it!');
    }
};

//Reset player to beginning position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Instantiate your objects
//      Place all enemy objects in an array called allEnemies
//      Place the player object in a variable called player

var allEnemies = [];
for (var i = 0; i < 3; i++) {

    var enemyY = 65 + 80 * i;
    var enemyX = Math.floor(Math.random() * 30);
    var enemySpeed = 50 + Math.floor(Math.random() * 150);
    allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed));
}

var player = new Player();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = { //create an object called allowedKeys to hold keystrokes
        //the document object has a method called addEventlistener
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

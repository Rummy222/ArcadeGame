//>>>>>    ENEMY CLASS    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var Enemy = function(x,y, speed) {
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
//loc = movement that you get from the handler * dt

if(this.x <= 505) {  //canvas.width = 505
    this.x = this.x + this.speed * dt;
} else {
    this.x = -2;
}

// Check for Collisions
 //checkCollision(this);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>    Player class      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y){
      this.x = 200;
      this.y = 400;
      this.sprite = 'images/owen.png';
};

Player.prototype.update = function(){
  //set x boundaries
  if(this.x <0){
    this.x=0;
  };
};
  //Reset player to beginning position
Player.prototype.reset = function() {
     this.x = 200;
     this.y = 400;
};

//reset function sets the player back to the start coordinates
Player.prototype.reset = function(){
      this.x = 30;
      this.y = 50;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

        if ( key === 'left' ) {
            if ( this.x > 0 ) {
                this.x = this.x - 100;
            }
        } else if ( key === 'right' ) {
            if ( this.x < 400 ) {
                this.x = this.x + 100;
            }
        } else if ( key === 'up' ) {
            if ( this.y > 0 ) {
                this.y = this.y - 80;
            }
        } else if ( key === 'down') {
            if ( this.y < 380 ) {
                this.y = this.y + 80;
            }
        }
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Miscellaneous Functions - Collisions and Winning
//

    var checkCollision = function(anEnemy) {
    // check for collision between enemy and player
    if (
        player.y + 131 >= anEnemy.y + 90
        && player.x + 25 <= anEnemy.x + 88
        && player.y + 73 <= anEnemy.y + 135
        && player.x + 76 >= anEnemy.x + 11) {
        console.log('collided');
        player.x = 202.5;
        player.y = 383;
    }
//   check for player reaching top of canvas and winning the game
    if (player.y + 63 <= 0) {
        player.x = 202.5;
        player.y = 383;
        console.log('you made it!');
    }

  };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Instantiate your objects
//      Place all enemy objects in an array called allEnemies
//      Place the player object in a variable called player

var allEnemies = [];
for (var i=0; i<3; i++){

      var enemyY = 65 + 80 * i;
      var enemyX = Math.floor(Math.random() * 30);
      var enemySpeed = 50 + Math.floor(Math.random() * 150);
      allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed))
};

var Player = new Player();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    Player.handleInput(allowedKeys[e.keyCode]);
});

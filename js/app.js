// 1.)    Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
       this.x = x;
       this.y = y;
       this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // dbr - movement: var loc = loc++?
    // dbr - needs a handleinput method
    // dbr - needs a addEventListener method
    // dbr - needs a drawImage method
    // dbr - needs a update method
};

// 2.)    Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//loc = movement that you gett from the handler * dt
};
// 3.)    Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// 4.)    Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Now instantiate your objects.
var player = function(x,y,speed){
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/char-boy.png';
 };

// 5.)    Place all enemy objects in an array called allEnemies
// 6.)    Place the player object in a variable called player


var allEnemies = [];
  allEnemies = [new Enemy(1,2,3), new Enemy(1,2,3)];

player = new player(20, 38, 50);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

    player.handleInput(allowedKeys[e.keyCode]);
});

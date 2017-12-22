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
//loc = movement that you get from the handler * dt
};
// 3.)    Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Player class
// This class requires an update(), render() and
// a handleInput() method.

var player = function(x,y){
      this.x = x;
      this.y = y;
      this.speed = 40;
      this.sprite = 'images/char-boy.png';
};

player.prototype.update = function(){
  //set x boundaries
  if(this.x <0){
    this.x=0;
  }
/*
  elseif(this.x>400){
    this.x=400;
  }

  elseif(this.y>400){
    this.y=400;
    //reset if player reaches water
  } elseif(this.y<0){
      this.reset();
  }
  */
};
//reset function sets the player back to the start coordinates
player.prototype.reset = function(){
      this.x = 30;
      this.y = 50;
};

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput = function(key) {

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
/*
var bug1 = new Enemy(60, (Math.random() * 10));
var bug2 = new Enemy(140, (Math.random() * 10));
var bug3 = new Enemy(220, (Math.random() * 10));

var allEnemies = [bug1, bug2, bug3];
*/
var player = new player(130,50);



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

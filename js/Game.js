
var activeColor = 0;
var intX = 50;
var intY = 50;
var playerSpeed = 6;
var direction;
var playerX = intX;
var playerY = intY;
var activeKey;


function setup() {
  var myCanvas = createCanvas(1000, 780);
  myCanvas.parent('canvas');
  frameRate(60);
  noStroke();
}


function draw() {
  background(255,239,213);
  // if (keyIsPressed == true) { // If the key is pressed,
  //   intX+=2.5;                      // add 1 to x.
  //

  //line(x, 20, x-60, 80);

  ellipse(playerX, playerY, 50, 50);
  fill(activeColor);
  updatePlayerCoordinates();
}

function updatePlayerCoordinates() {


  switch (direction) {
    case 'right':
        playerX += playerSpeed;

      break;

      case 'left':

        playerX -= playerSpeed;

        break;

    case 'up':

      playerY -= playerSpeed;

      break;

    case 'down':

      playerY += playerSpeed;

      break;

    case 'static':

      break;

    // case 'northEast':
    //
    //   playerX += playerSpeed;
    //   playerY -+ playerSpeed;
    //
    // case 'northWest':
    //
    //   playerX -+ playerSpeed
    //   playerY -+ playerSpeed;

  }
}

function keyPressed() {

var activeKey = keyCode;

console.log(activeKey);
    switch (keyCode) {
      case 37:

      // if (direction = 'up') {
      //     direction = 'northWest';
      //   } else {

          direction = 'left'


        break;
      case 39:

          direction = 'right';

        break;
      case 38:

      // if (direction = 'right') {
      //     direction = 'northEast'
      // }

          direction = 'up';

        break;
      case 40:

          direction = 'down';

        break;


        }

      }

  function keyReleased () {


    console.log(activeKey);

    // if (keyCode == activeKey) {
    //
      console.log('static');
        direction = 'static';

    }

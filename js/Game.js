var colorArray = ["#ffffe6", '#ffffb3', '#ffff80', '#ffff4d', '#ffff00', '#e6e6ff', '#b3b3ff', '#8080ff', '#4d4dff',
'#0000ff', '#ffe6e6', '#ffb3b3', '#ff8080', '#ff4d4d', '#ff0000', '#c2f0c2', '#70db70', '#33cc33']
// https://docs.google.com/spreadsheets/d/1JUNLNtl6CRTiltI8jAwZnrOFMIBA09qlZisQthpelAY/edit?usp=sharing
// link to a spreadsheet with color information/relationships
var activeColor = 0;
var targetColor = null;
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

    function changeColor(i) {
      activeColor = colorArray[i];
      console.log(activeColor);
    }

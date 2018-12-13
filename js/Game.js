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
var fruitArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
function FruitGenerator(id, color, x, y) {
  this.id = id;
  this.color = color;
  this.x = x;
  this.y = y;


  }

//Generating all le fruit objects. Yay yay again.
for (i = 0; i < fruitArray.length; i++) {
  var fruitColor

    if (i < 5) {
      fruitColor = "red";
    } if (i > 4 && i < 10) {
      fruitColor = 'yellow';
    } if (i > 9) {
      fruitColor = 'blue';
    }

fruitArray[i] = new FruitGenerator(i, fruitColor, Math.floor(Math.random() * 1000), Math.floor(Math.random() * 780));
console.log(fruitArray);
}

function setup() {
  var myCanvas = createCanvas(1000, 780);
  myCanvas.parent('canvas');
  frameRate(60);
  updateFruitCoordinates();
}

function draw() {
  background(255,239,213);
  // if (keyIsPressed == true) { // If the key is pressed,
  //   intX+=2.5;                      // add 1 to x.
  //

  //line(x, 20, x-60, 80);
  createPlayer();
  function createPlayer() {
    stroke(activeColor);
    fill(activeColor);
    ellipse(playerX, playerY, 50, 50, 5);
  }

  createFruit()

  function createFruit() {
    for (i = 0; i < fruitArray.length; i++) {
      stroke(fruitArray[i].color)
      strokeWeight(20);
      point(fruitArray[i].x, fruitArray[i].y )
    }
  }
  updatePlayerCoordinates();
  // checkForFruit();

  // for (let i = 0; i < bubbles.length; i++) {
  //     bubbles[i].update();
  //     bubbles[i].display();
  //     for (let j = 0; j < bubbles.length; j++) {
  //       if (i != j && bubbles[i].intersects(bubbles[j])) {
  //         bubbles[i].changeColor();
  //         bubbles[j].changeColor();
  //       }
  //     }
  //   }

}

function checkForFruit() {
  // if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
  //   var prevScore = parseInt(scoreElem.html().substring(8));
  //   scoreElem.html('Score = ' + (prevScore + 1));
  //   xCor.unshift(xCor[0]);
  //   yCor.unshift(yCor[0]);
  //   numSegments++;
  //   updateFruitCoordinates();
  //   player3.start();
  //   if (prevScore == 19) {
  //     player.playbackRate = 1.02;
  //   } else if (prevScore == 39) {
  //     player.playbackRate = 1.04;
  //   } else if (prevScore == 59) {
  //     player.playbackRate = 1.08
  //   } else if (prevScore == 79) {
  //     player.playbackRate = 1.10
  //   } else if (prevScore == 99) {
  //     player.playbackRate == 1.12
  //   }
  // }
}



function updateFruitCoordinates() {
  /*
    The complex math logic is because I wanted the point to lie
    in between 100 and width-100, and be rounded off to the nearest
    number divisible by 10, since I move the snake in multiples of 10.
  */
  xFruit = floor(random(10, (width - 100) / 10)) * 10;
  yFruit = floor(random(10, (height - 100) / 10)) * 10;
  stroke(255);
  r = random(255);
  g = random(255);
  b = random(255);
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

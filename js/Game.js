// var colorArray = new Array(54);

// ["#ffffe6", '#ffffb3', '#ffff80', '#ffff4d', '#ffff00', '#e6e6ff', '#b3b3ff', '#8080ff', '#4d4dff',
// '#0000ff', '#ffe6e6', '#ffb3b3', '#ff8080', '#ff4d4d', '#ff0000', '#c2f0c2', '#70db70', '#33cc33']
// https://docs.google.com/spreadsheets/d/1JUNLNtl6CRTiltI8jAwZnrOFMIBA09qlZisQthpelAY/edit?usp=sharing
// link to a spreadsheet with color information/relationships
var activeColor = 'white';
var targetColor = null;
var intX = 50;
var intY = 50;
var direction;
var playerX = intX;
var playerY = intY;
var playerR = 30;
var activeKey;
var fruitArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var playerBall = null;
var canvasWidth = 1000;
var canvasHeight = 780;
var fRed = 0
var fBlue = 0
var fYellow = 0
var pRed = 0
var pBlue = 0
var pYellow = 0
var blueA = null;
var index = 0
var newIndex = 0;
var answer;

var img
function preload(){
  img = loadImage('./sprites/kirbys_face_smash_bros_series_icon_by_mrthatkidalex24_d9ujw38-pre.png');
}

var powerUp = new Tone.Player("./sounds/Powerup1.wav").toMaster();
//play as soon as the buffer is loaded


function FruitGenerator(id, color, x, y) {
  this.id = id;
  this.color = color;
  this.x = x;
  this.y = y;

  this.intersects = function(playerX, playerY) {
      var d = dist(this.x, this.y, playerX, playerY);
      if (d < 10 + playerR) {

        return true;
      } else {
        return false;
      }
    }
}
function ColorGenerator(hex, red, yellow, blue) {
  this.hex = hex;
  this.red = fRed;
  this.yellow = fYellow;
  this.blue = fBlue;
}



// function changeColor(i) {
//   activeColor = colorArray[i];

// }
function changeColor(color) {
  switch (color) {
    case 'red':
      pRed += 1;
      break;
    case 'yellow':
      pYellow += 1;
      break;
    case 'blue':
      pBlue += 1;
      break;
    }
var query = {red: pRed, blue: pBlue, yellow: pYellow};

var result = colorArray.filter(search, query);

function search(colorArray){

 if (Object.keys(this).every((key) => colorArray[key] === this[key])) {
   console.log(true);
   console.log(index);
   newIndex = index

 } else {
   index ++;
   console.log(false);
  }
 }
console.log(colorArray[newIndex].hex);
activeColor = colorArray[newIndex].hex;
index = 0
}

function nextLevel() {
  if (activeColor == targetColor) {

  }
}



function fruitGeneration() {
for (i = 0; i < fruitArray.length; i++) {
  var fruitColor

    if (i < 5) {
      fruitColor = 'red';
    } if (i > 4 && i < 10) {
      fruitColor = 'yellow';
    } if (i > 9) {
      fruitColor = 'blue';
    }

  fruitArray[i] = new FruitGenerator(i, fruitColor, Math.floor(Math.random() * 1000), Math.floor(Math.random() * 780));

  }
}


for (i = 0; i <colorArray.length; i++) {

  if (fRed !=  3) {
    if (fYellow != 3) {
      if (fBlue != 3)  {
        fBlue += 1;
      } else {fYellow += 1;
              fBlue = 0;}
    } else {fRed += 1
            fYellow = 0
            fBlue = 0}
  } else { if (fYellow != 3) {
    if (fBlue != 3)  {
      fBlue += 1;
    } else {fYellow += 1;
            fBlue = 0;}
  } else { if (fBlue != 3)  {
    fBlue += 1;
  }
 }
}

  colorArray[i] = new ColorGenerator(colorArray[i], fRed, fYellow, fBlue );
}

function setup() {
  var myCanvas = createCanvas(canvasWidth, canvasHeight);
  myCanvas.parent('canvas');
  frameRate(60);
  updateFruitCoordinates();
  randomAnswerColor();
  fruitGeneration();
}

function draw() {
  background(255,239,213);
  // if (keyIsPressed == true) { // If the key is pressed,
  //   intX+=2.5;                      // add 1 to x.
  //

  //line(x, 20, x-60, 80);
createLake();

function createLake() {
  noStroke();
  fill('blue');
  ellipse(500, 400, 100, 100, 5)
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

  for (i = 0; i < fruitArray.length; i++) {
        if (fruitArray[i].intersects(playerX, playerY)) { //Collision

          powerUp.start();
          changeColor(fruitArray[i].color);
          nextLevel();
          playerR += 5;

          fruitArray.splice(i, 1);
        }
    }

    createPlayer();
    function createPlayer() {
      image(img, playerX - playerR, playerY - playerR, playerR * 2, playerR * 2, 5);
      //filter(THRESHOLD);
      noStroke();
      var c = color(activeColor);
      c.setAlpha(128);
      fill(c);
      ellipse(playerX, playerY, playerR * 2, playerR * 2, 5);
    }
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

}


//global last key state

var dateKeyPressed = {left:0, right:0, up:0, down:0};

function updatePlayerCoordinates() {


//reset most recent key counter

    if (!keyIsDown(37))  {
      dateKeyPressed.left = 0;
  } if (!keyIsDown(39))  {
      dateKeyPressed.right = 0;

  }  if (!keyIsDown(38))  {
      dateKeyPressed.up = 0;

  }   if (!keyIsDown(40))  {
      dateKeyPressed.down = 0;
  }
    if (keyIsDown(37))  {
      dateKeyPressed.left++;
  } if (keyIsDown(39))  {
      dateKeyPressed.right++;
  }  if (keyIsDown(38))  {
      dateKeyPressed.up++;
  }   if (keyIsDown(40))  {
      dateKeyPressed.down++;
  }


    //change in position, normalized to 1
    var deltaX = 0;
    var deltaY = 0;
    var playerSpeed = 0;
    var checkForDiag = 0;

    //move left
      if (keyIsDown(37))  {
        if (!keyIsDown(39) || (dateKeyPressed.right != 0 && dateKeyPressed.left <= dateKeyPressed.right)) {
          checkForDiag++;
          deltaX = -1;
        }

    //move right

    }  if (keyIsDown(39))  {
        if (!keyIsDown(37) || (dateKeyPressed.left != 0 && dateKeyPressed.right <= dateKeyPressed.left)) {
          checkForDiag++;
          deltaX = 1;
        }


    //move up

    }   if (keyIsDown(38))  {
      if (!keyIsDown(40) || (dateKeyPressed.down != 0 && dateKeyPressed.up <= dateKeyPressed.down)) {
        checkForDiag++;
        deltaY = -1;
      }
    //move down

    }   if (keyIsDown(40))  {
      if (!keyIsDown(38) || (dateKeyPressed.up != 0 && dateKeyPressed.down <= dateKeyPressed.up)) {
        checkForDiag++;
        deltaY = 1;
      }
    }
    //scale player speed
    playerSpeed = 6;

    //normalize player speed on diagonals
      if (checkForDiag >= 2) {
      playerSpeed = playerSpeed * .7071;      //.7071
    }
    deltaX *= playerSpeed;
    deltaY *= playerSpeed;
    // console.log(deltaX, deltaY);

    var newX = playerX + deltaX;
    var newY = playerY + deltaY;

    //move the player only if inside canvas bounds
    if (newX < canvasWidth && newX > 0) {
      playerX = newX;
    }
    if (newY < canvasHeight && newY > 0) {
      playerY = newY;
    }
}


// function updatePlayerCoordinates() {
//
//
//   switch (direction) {
//     case 'right':
//         playerSpeed = 6;
//         playerX += playerSpeed;
//
//       break;
//
//       case 'left':
//         playerSpeed = 6;
//         playerX -= playerSpeed;
//
//         break;
//
//     case 'up':
//       playerSpeed = 6;
//       playerY -= playerSpeed;
//
//       break;
//
//     case 'down':
//       playerSpeed = 6;
//       playerY += playerSpeed;
//
//       break;
//
//     case 'static':
//
//       break;
//
//   }
// }
//
// function keyPressed() {
//
// var activeKey = keyCode;
//

//     switch (keyCode) {
//       case 37:
//
//       // if (direction = 'up') {
//       //     direction = 'northWest';
//       //   } else {
//
//           direction = 'left'
//
//
//         break;
//       case 39:
//
//           direction = 'right';
//
//         break;
//       case 38:
//
//       // if (direction = 'right') {
//       //     direction = 'northEast'
//       // }
//
//           direction = 'up';
//
//         break;
//       case 40:
//
//           direction = 'down';
//
//         break;
//
//
//         }
//
//       }

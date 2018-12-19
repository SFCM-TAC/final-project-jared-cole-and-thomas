var colorArray = ["#617CE9", '#345BF7', '#0033FF', '#FBFDB0', '','', '',
'#FBFF6E', '', '', '', '#F7FF00', '#FF6B6B', '' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'',
'' ,'' ,'' ,'#FF4343' ,'' ,'' ,'' ,'' ,'', '' ,'' ,'' ,'' ,'' ,'' ,'' ,'#FF0000' ,'' ,'' ,'' ,'' ,'' ,'', '',
 '', '', '', '', '', '', '', '']

var indexArray = [0, 1, 2, 3, 7, 11, 12, 25, 38]

function randomAnswerColor() {
  answer = Math.floor(Math.random() * 9)
  targetColor = colorArray[indexArray[answer]].hex;
  document.getElementById('answer').style.backgroundColor = targetColor
}


// https://docs.google.com/spreadsheets/d/1JUNLNtl6CRTiltI8jAwZnrOFMIBA09qlZisQthpelAY/edit?usp=sharing
// link to a spreadsheet with color information/relationships

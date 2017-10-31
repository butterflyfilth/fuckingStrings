//declare global variable (above the functions)

var centerX,centerY;
var mainString;
var xPos;
var yPos;
var len;
var rads;
var threshold;

var deteriorateRate = 0;

function setup() {
  // put setup code here
  //change background color
  frameRate(15);
	mainString = "Fucking Strings";
	createCanvas(windowWidth, windowHeight);
	//set the font and size
	textFont("Courier", 20);
	textAlign(CENTER);
	background(255);

	xPos = 0;
	yPos = 0;
	len = mainString.length;
	rads=0;
	threshold = 600;


  centerX = windowWidth/2;
  centerY = windowHeight/2;

	//console.log("setting up");
}

function draw() {
  background(255,10);
 //loop();
 // console.log(windowWidth);
 // console.log(centerX);
 //text(mainString[19],centerX,yPos);
  yPos+=2;
  if(yPos > windowHeight){ yPos = 0;}

  for (var i = 0; i < mainString.length; i++){

    //console.log("loop is running");
    //yPos+=20;

    
    
    fill(0);
    text(mainString[i],10 + xPos,windowHeight - yPos);
    var substring = mainString.substring(i,mainString.length)

     xPos+=20;
  if(xPos > windowWidth){xPos =0;}

  }
 
}

// function reset() {
// 	background(0,0,0);
// 	yPos = 50;
//   deteriorateRate = deteriorateRate +1;
// 	len = len - deteriorateRate;
// 	if(len < 1) {
// 		if(mainString == "Why pulverized poem?") {
// 			mainString = "It was hell in our heads"
// 		} else {
// 			mainString = "Why pulverized poem?"
// 		}
// 		len = mainString.length;

// 	}
// 	loop();
// }







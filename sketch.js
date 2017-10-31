//declare global variable (above the functions)
var str;
var xPos;
var yPos;
var len;
var rads;
var threshold;

var deteriorateRate = 0;

function setup() {
  // put setup code here
  //change background color

	str = "Why pulverized poem?";
	createCanvas(window.innerWidth,displayHeight);
	//set the font and size
	textFont("Courier", 24);
	textAlign(CENTER);
	background(255);

	xPos = 0
	yPos = 50;
	len = str.length;
	rads=0;
	threshold = 600;

	//console.log("setting up");
}

function draw() {
  // put drawing code here
   //console.log("drawing");
   //change the origin of the x,y grid from top-left to center
   translate(width/2, 150);
    //rotate(radians(rads))
  // rads++;
   deteriorateRate++;
   for (var i=0; i > str.length; i++) {
       fill(random(100,255),0,0);
   outputString = str.substring(0, len - deteriorateRate);
   //measure the width of the string
  // outputStringWidth = textWidth(str);
  // console.log(outputStringWidth);
  // xPos = 0 - outputStringWidth/2;
   text(outputString, xPos, yPos);
   yPos = yPos + 10;

   // if(yPos > threshold) { 

   //    console.log("out of view"); 
   //    //stop the loop
   //    //noLoop();
   //    //pause and then reset
   //    setTimeout("reset()", 1000);
   //    rads = 0;
   //    threshold = random(300,900)
   // }
 
   }
 
}

// function reset() {
// 	background(0,0,0);
// 	yPos = 50;
//   deteriorateRate = deteriorateRate +1;
// 	len = len - deteriorateRate;
// 	if(len < 1) {
// 		if(str == "Why pulverized poem?") {
// 			str = "It was hell in our heads"
// 		} else {
// 			str = "Why pulverized poem?"
// 		}
// 		len = str.length;

// 	}
// 	loop();
// }







// Logical Operators - Tracing
// && and
// || or

// This program draws green when correctly tracing the letter "L", 
// and draws red when drawing outside the lines. 

background(232, 219, 208);

// L outline
noStroke();
fill(255, 255, 255);
rect(130, 250, 150, 30); // horizontal line
rect(130, 80, 30, 170); // vertical line

var notWithinLines = 255;
var withinLines = 0;

draw = function() {
    
    // draws green within the lines & red outside the lines
    if ((mouseY > 70 && mouseY < 290 && mouseX > 120 && mouseX < 160) || (mouseX > 120 && mouseX < 290 && mouseY > 240 && mouseY < 290)){
        notWithinLines = 0;
        withinLines = 255; // COLOR: green 
        }
    else{
        notWithinLines = 255; // COLOR: red
        withinLines = 0;
    }
    // draws when mouse is pressed
    if (mouseIsPressed){
        fill(notWithinLines, withinLines, 0);
        ellipse(mouseX, mouseY, 30, 30);
    }
};

// result: https://youtu.be/II8Y0PxSGP0
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pt/logical-operators
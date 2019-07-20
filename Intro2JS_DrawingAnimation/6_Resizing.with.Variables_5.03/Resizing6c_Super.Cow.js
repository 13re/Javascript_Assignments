/*
The size of one shape changes with another. 
In an ellipse statement, the third & fourth parameters are the width & height. 

Resizing with dependent variables helps to retain the original proportions when scaling size, 
without the need for manually changing each parameter individually. 

We create a new variable to store the size of each shape 
& set it equal to a fraction of the main shape.

Dependency can help with maintaining proportional sizes, x & y coordinates. 
*/

// Super Cow

stroke(173, 165, 135); // COLOR: darker brown 

var bodySize = 200;
    
var xPos = 200;
var yPos = 200;

var legSize = bodySize/2;
var earSize = bodySize * 3/8;
var spotSize = bodySize/2;
var hooveSize = bodySize/8;
var eyeSize = bodySize/4;

draw = function() {
    background(207, 254, 255); // COLOR: light blue
    
    //legs 
    fill(237, 235, 225); // COLOR: light brown
    rect(xPos - 3/4 * bodySize, yPos - 1/8 * bodySize, legSize, legSize/4); // left-top leg
    rect(xPos + 1/4 * bodySize, yPos - 1/8 * bodySize, legSize, legSize/4); // right-top leg
    rect(xPos - 1/4 * bodySize, yPos + bodySize/4, legSize/4, legSize); // left-bottom leg
    rect(xPos + 1/8 * bodySize, yPos + bodySize/4, legSize/4, legSize); // right-bottom leg
    
    // body
    ellipse(xPos, yPos, bodySize, bodySize); // body
    
    //cape
    fill(194, 64, 64);
    triangle(xPos, yPos, xPos - 19/20 * bodySize, yPos - 5/4 * bodySize, xPos + 19/20 * bodySize, yPos - 5/4 * bodySize);
    
    // ears
    fill(237, 235, 225); // COLOR: light brown
    ellipse(xPos - 3/8 * bodySize, yPos - bodySize/2, earSize, earSize/3); // left ear
    ellipse(xPos + 3/8 * bodySize, yPos - bodySize/2, earSize, earSize/3); // right ear
    fill(214, 209, 184); // COLOR: darker brown
    ellipse(xPos - 3/8 * bodySize, yPos - bodySize/2, earSize * 4/5, earSize * 2/15); // left inner-ear
    ellipse(xPos + 3/8 * bodySize, yPos - bodySize/2, earSize * 4/5, earSize * 2/15); // right inner-ear
    
    // spots
    fill(173, 165, 135); // COLOR: darker brown 
    ellipse(xPos + bodySize/4, yPos + bodySize/4, spotSize * 3/5, spotSize/4); // right bunch
    ellipse(xPos + 3/20 * bodySize, yPos + bodySize/5, spotSize/2, spotSize * 2/5); // right bunch
    ellipse(xPos + bodySize/5, yPos + 3/10 * bodySize, spotSize * 2/5, spotSize/4); // right bunch
    ellipse(xPos + 3/10 * bodySize, yPos + bodySize/5, spotSize * 2/5, spotSize/4); // right bunch
    ellipse(xPos - 7/20 * bodySize, yPos - 1/20 * bodySize, spotSize/2, spotSize); // left big
    ellipse(xPos - 3/8 * bodySize, yPos, spotSize/2, spotSize); // left big
    ellipse(xPos - bodySize/8, yPos + 7/20 * bodySize, spotSize/2, spotSize * 3/10); // left bottom oval
    
    // hooves
    rect(xPos - bodySize * 4/5, yPos - bodySize/8, hooveSize * 2/5, hooveSize); // left-top hoove
    rect(xPos + bodySize * 3/4, yPos - bodySize/8, hooveSize * 2/5, hooveSize); // right-top hoove
    rect(xPos - bodySize/4, yPos + bodySize * 3/4, hooveSize, hooveSize * 3/5); // left-bottom hoove
    rect(xPos + bodySize/8, yPos + bodySize * 3/4, hooveSize, hooveSize * 3/5); // right-bottom hoove
    
    // head
    fill(237, 235, 225); // COLOR: light brown
    rect(xPos - bodySize/4, yPos - bodySize * 5/8, bodySize/2, bodySize * 3/8); 
    
    // eyes
    fill(255, 255, 255);
    ellipse(xPos - bodySize/8, yPos - bodySize * 2/5, eyeSize/2, eyeSize); // left eye-white
    ellipse(xPos + bodySize/8, yPos - bodySize * 2/5, eyeSize/2, eyeSize); // right eye-white
    fill(0, 0, 0);
    ellipse(xPos - bodySize/8, yPos - bodySize * 2/5, eyeSize * 3/10, eyeSize * 3/5); // left pupil
    ellipse(xPos + bodySize/8, yPos - bodySize * 2/5, eyeSize * 3/10, eyeSize * 3/5); // right pupil

    // horns
    fill(244, 255, 87); // COLOR: yellow
    triangle(xPos - bodySize/4, yPos - bodySize * 5/8, xPos - bodySize/8, yPos - bodySize * 5/8, xPos - bodySize * 7/40, yPos - bodySize * 3/4); // left horn
    triangle(xPos + bodySize/4, yPos - bodySize * 5/8, xPos + bodySize/8, yPos - bodySize * 5/8, xPos + bodySize * 7/40, yPos - bodySize * 3/4); // right horn
    
    // snout
    fill(241, 184, 255); // COLOR: pink
    rect(xPos - bodySize * 3/8, yPos - bodySize/4, bodySize * 3/4, bodySize/4
    ); // snout
    
    yPos+=4; // adds for to yPos, making Super Cow fly down
    if(yPos > 700){yPos = -300;} // makes super cow stop at the bottom then start at the top again
    
};

// result: https://youtu.be/7V9waKCoR-M
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/pp/project-animal-attack#projecthelp
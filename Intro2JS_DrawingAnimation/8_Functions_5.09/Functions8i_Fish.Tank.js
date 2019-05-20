// Fish Tank Project

// FUNCTION: fish

var centerX = -100;
var fish = function(centerX, centerY, bodyLength, bodyHeight, bodyColorR, bodyColorG, bodyColorB, eyeSize){
    noStroke();
    fill(bodyColorR, bodyColorG, bodyColorB);
    
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
         centerX - bodyLength/2 - tailWidth, centerY - tailHeight,
         centerX - bodyLength/2 - tailWidth, centerY + tailHeight);
         
    // eye
    fill(33, 33, 33);
    ellipse(centerX + bodyLength/4, centerY, eyeSize, eyeSize);
};

//FUNCTION: grass

var y0 = 400;
var grass = function(grassX1, grassY1, grassX2, y0, grassX3, y0){
    noStroke();
    fill(20, 143, 51);
    // grass blade
    triangle(grassX1, grassY1, grassX2, y0, grassX3, y0);
    triangle(grassX1-5, grassY1+10, grassX2-5, y0, grassX3-5, y0);
    triangle(grassX1+5, grassY1+5, grassX2+5, y0, grassX3+5, y0);
};

// FUNCTION: bubble

var bubbleY = 430;
var bubble = function(bubbleX, bubbleY, bubbleSize, bubbleSize){
    stroke(0, 180, 235); // COLOR: blue (slightly darker than background)
    strokeWeight(2);
    noFill(); // transparent bubbles
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
};

// ANIMATION

draw = function() {
    noStroke();
    background(89, 216, 255);
    
    // BACKGROUND ELEMENT: sand
    fill(214, 191, 148);
    ellipse(200, 400, 450, 40);
    
    // BACKGROUND ELEMENT: grass
    grass(50, 200, 45, y0, 50, y0);
    grass(100, 100, 95, y0, 100, y0);
    grass(180, 150, 175, y0, 180, y0);
    grass(200, 250, 195, y0, 200, y0);
    grass(300, 100, 296, y0, 300, y0);
    grass(380, 50, 375, y0, 380, y0);
    
    // ANIMATIONS: fish ___________
    
    // purple fish
    fish(centerX, 100, 120, 80, 161, 1, 251, 4);
    // green fish
    fish(centerX*4, 200, 30, 40, 81, 201, 31, 10);
    // blue fish
    fish(centerX*1.7, 150, 50, 50, 81, 101, 201, 15);
    // yellow fish
    fish(centerX*3-400, 280, 30, 40, 251, 201, 31, 5);
    // orange fish
    fish(centerX*2.5-500, 30, 100, 30, 251, 141, 11, 10);
    // red fish
    fish(centerX*2.2-100, 220, 50, 30, 251, 91, 1, 9);
    // pink fish
    fish(centerX*2-200, 350, 60, 80, 251, 111, 151, 25);
    
    // animates fish swimming in right/east direction
    centerX++;
    // repeats animation after fish swim across screen
    if(centerX > 600){centerX = -200;}
    
    // ANIMATIONS: bubbles ___________

    //bubbles
    bubble(30, bubbleY*2, 20, 20);
    bubble(200, bubbleY*3+50, 10, 10);
    bubble(320, bubbleY*1.5+100, 15, 15);
    bubble(130, bubbleY*1.2, 15, 15);
    
    // animates bubbles moving upwards
    bubbleY--;
    // repeats animation after bubbles hit the top
    if(bubbleY < -200){bubbleY = 500;}
};


// result: https://youtu.be/d5GQafQV7Uo
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pp/project-fish-tank
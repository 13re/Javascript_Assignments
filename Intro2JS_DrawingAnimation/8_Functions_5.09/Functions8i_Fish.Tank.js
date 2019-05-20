// Fish Tank Project (draft)

var centerX = -100;

var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColorR, bodyColorG, bodyColorB, eyeSize){
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

var y0 = 400;
var grass = function(grassX1, grassY1, grassX2, y0, grassX3, y0){
    fill(20, 143, 51);
    // grass blade
    triangle(grassX1, grassY1, grassX2, y0, grassX3, y0);
    triangle(grassX1-5, grassY1+10, grassX2-5, y0, grassX3-5, y0);
    triangle(grassX1+5, grassY1+5, grassX2+5, y0, grassX3+5, y0);
};
    

draw = function() {
    background(89, 216, 255);
    grass(50, 200, 45, y0, 50, y0);
    grass(100, 100, 95, y0, 100, y0);
    grass(180, 150, 175, y0, 180, y0);
    grass(200, 250, 195, y0, 200, y0);
    grass(300, 100, 296, y0, 300, y0);
    grass(380, 50, 375, y0, 380, y0);
    
    // purple fish
    drawFish(centerX, 100, 120, 80, 162, 0, 255, 4);
    // green fish
    drawFish(centerX*4, 200, 30, 40, 80, 200, 30, 10);
    // blue fish
    drawFish(centerX*1.7, 150, 50, 50, 80, 100, 200, 15);
    // yellow fish
    drawFish(centerX*3-400, 280, 30, 40, 255, 200, 30, 5);
    // orange fish
    drawFish(centerX*2.5-500, 30, 100, 30, 255, 160, 90, 10);
    // red fish
    drawFish(centerX*2.2-100, 220, 50, 30, 255, 90, 5, 9);
    // pink fish
    drawFish(centerX*2-200, 350, 60, 80, 240, 120, 0, 25);
    centerX++;
    if(centerX > 600){centerX = -200;}
};

         
         

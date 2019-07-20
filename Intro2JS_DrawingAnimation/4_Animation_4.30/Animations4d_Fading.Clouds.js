// Fading Clouds
// Making a cloudy day become sunny via animation. 

noStroke();
var leftX = 150;
var rightX = 250;
var sunRadius = 100;

var colorDrop1 = 255;
var colorDrop2 = 255;

draw = function() {
    background(184, 236, 255); // COLOR: BLUE SKY
    
    fill(255, 170, 0); // COLOR: GOLDEN SUN
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds
    fill(colorDrop1, colorDrop2, 255); // COLOR: WHITE CLOUDS
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
    leftX++; // left-to-right cloud movement
    if(leftX > 350){leftX = 350;} // left-to-right cloud stop
    
    rightX--; // right-to-left cloud movement
    if(rightX < 50){
        rightX = 50; // right-to-left cloud stop
        colorDrop1--; // when clouds stop, they fade to blue sky
        colorDrop2--;
        if(colorDrop1 < 184){colorDrop1 = 184;}
        if(colorDrop2 < 236){colorDrop2 = 236;}
    }
    
};

// result: https://youtu.be/bFijWOTj4ZY
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pc/challenge-parting-clouds
// Shooting Star

noStroke();

var xPos = -100; // x-Position of shooting-star
var yPos = 100; // y-Position of shooting-star

var starScale = 10; // size of shooting-star

var headTilt1 = 171; // tilt of boy's head
var headTilt2 = 211; // tilt of girl's head


draw = function() {
    background(29, 40, 115); // COLOR: night sky
    
    // shooting star
    fill(49, 61, 143); // COLOR: background, slightly lightened
    ellipse(xPos -10, yPos, starScale, starScale); // far star trail
    fill(68, 74, 171); // COLOR: background, lightened more
    ellipse(xPos -5, yPos, starScale, starScale); // close star trail
    fill(255, 242, 0); // COLOR: yellow (star)
    ellipse(xPos, yPos, starScale, starScale); // shooting star
    
    // stars in background
    ellipse(10, 10, 2, 2);
    ellipse(20, 70, 1, 1);
    ellipse(300, 120, 2, 2);
    ellipse(110, 150, 1, 1);
    ellipse(190, 40, 2, 2);
    ellipse(185, 30, 1, 1);
    ellipse(350, 70, 2, 2);
    ellipse(250, 10, 1, 1);
    
    // bottom of hill
    fill(19, 38, 9); // COLOR: darkest green
    ellipse(200, 360, 500, 150); 
    
    // middle of hill
    fill(23, 51, 8); // COLOR: mid-green
    ellipse(200, 330, 400, 100); 

    // top of hill 
    fill(70, 97, 45); // COLOR: lightest green
    ellipse(200, 300, 300, 40);
    
    // girl
    fill(127, 64, 145); // COLOR: purple girl
    stroke(127, 64, 145); // COLOR: purple girl
    strokeWeight(10); // arm thickness
    line(210, 225, 165, 250); // arm
    noStroke();
    ellipse(214, 250, 36, 75); // body
    ellipse(headTilt2, 198, 30, 30); // head
    
    // boy
    fill(128, 190, 194); // COLOR: blue boy
    stroke(128, 190, 194);  // COLOR: blue boy
    strokeWeight(10); // arm thickness
    line(175, 220, 214, 235); // arm
    noStroke();
    ellipse(170, 250, 40, 80); // body
    ellipse(headTilt1, 195, 30, 30); // head

    // bench
    fill(69, 53, 13); // COLOR: brown bench
    rect(100, 250, 200, 45); // bench back
    ellipse(140, 295, 10, 30); // left benchleg
    ellipse(260, 295, 10, 30); // right benchleg
    
    xPos += 2; // shooting-star moves left-to-right
    yPos -= 0.15; // shooting-star decreases in size
    if(yPos < 80){
        yPos += 0.15; // shooting-star arcs around Earth
        
        // shooting-star arc cues head tilts
        headTilt2 -= 0.07; // girl's head tilting left
        if(headTilt2 < 208){headTilt2 = 208;}
        headTilt1 += 0.07; // boy's head tilting right
        if(headTilt1 > 175){headTilt1 = 175;}
    }
    
    starScale -= 0.04; // shooting-star decreases in size

};

// result: https://youtu.be/0vqXE1f94nw
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pp/project-shooting-star
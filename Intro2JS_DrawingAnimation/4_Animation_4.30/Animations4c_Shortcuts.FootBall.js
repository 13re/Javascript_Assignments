// Shortcuts 

/* Notes
Outside of our draw function, we declare whatever variables we want to use in an animation. 
Inside our function, we use those variables and change them in some way. 
When using a variable for every parameter, we can animate every aspect of a shape. 

* is multiply and / is divide in Javascript. 
ballWidth = ballWidth * 99/100; makes the width 99% in size each frame. 

Programmers don't like to do more work than necessary, so we create shortcuts. 
"x++;" is the same at "x += 1;" is the same as "x = x + 1;"
*/


// Football soaring over endless field

noStroke();

var y = 1; // y-axis used for lines on field
var rotate1 = 1; // spin of football

draw = function() {
    background(196, 253, 255); // COLOR: BLUE (sky)
    
    // Field
    fill(0, 199, 13); // COLOR: GREEN (field)
    rect(0, 200, 400, 200);
    
    // White lines on field
    fill(239, 247, 247); // COLOR: WHITE-ish
    rect(0, y + 200, 400, y * 1.2);
    
    y++; // same as "y += 1;" or "y = y + 1;"
    if(y > 200){y = 1;}
    
    // Brown outer-line of football
    stroke(179, 119, 45); // COLOR: WHITE
    strokeWeight(5); 
    
    // White mid-outer-circle of football
    fill(255, 255, 255); // COLOR: WHITE
    ellipse(200, 200, 130, 130); 
    
    // Brown inner-circle of football
    noStroke();
    fill(179, 119, 45); // COLOR: BROWN
    ellipse(200, 200, 100, 100);
    
    // Center dot in football
    fill(150, 98, 39); // COLOR: BROWN (slightly darker)
    ellipse(200, 200, 10, 10);
    

    // SPIN (football animation start) 
    pushMatrix();
    translate(200, 200);
    rotate(rotate1);
    
    // Stitches
    // Inner-stiching (inside circle)
    stroke(153, 105, 53); // COLOR: BROWN (slightly darker)
    strokeWeight(2);
    line(-45, 0, 0, 0); // stitch
    line(45, 0, 0, 0); // stitch
    // Outer-stitch (outside circle)
    stroke(255, 255, 255); // COLOR: WHITE
    strokeWeight(7);
    line(-69, -5, -70, 5); 
    
    noStroke();
    
    //SPIN (football animation stop)
    popMatrix();
    rotate1++; // same as "rotate1 += 1;"" or "rotate1 = rotate1 + 1;""
    
};

// result: https://youtu.be/J2GcOLjrO3E
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pt/incrementing-shortcuts

/* additional learning resources:
https://www.youtube.com/watch?v=o9sgjuh-CBM
https://www.khanacademy.org/computer-programming/rotate/6468986835435520
*/
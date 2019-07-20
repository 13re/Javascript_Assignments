// Color the Square

// Mouse Interaction
// mouseX and mouseY - follows mouse around. Must be used inside draw function. 

noStroke();

draw = function() {
    
    // paintbrush
    fill(255, 255, 255); // COLOR: yellow
    ellipse(mouseX, mouseY, 30, 30);
    
    // blue background outline
    fill(0, 247, 255); // COLOR: light blue
    rect(0, 0, 100, 400);
    rect(0, 0, 400, 100);
    rect(300, 0, 100, 400);
    rect(0, 300, 400, 100);
    
    // TEXT: "Color the square"
    fill(48, 76, 255); // COLOR: dark blue
    textSize(24);
    text("Color the square", 100, 50, 300, 50);
    
};

// result: https://youtu.be/2qUkUqxBlFs
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/interactive-programs/pt/mouse-interaction
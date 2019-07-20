// Color Change Button

draw = function() {
    fill(0, 255, 68); // start color
    if (mouseIsPressed && mouseY <= 200){
        fill(255, 0, 0);
        
    }
    rect(0, 0, 400, 200);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(25);
    text("Click to turn Red", 100, 115);
};

// result: https://youtu.be/pL_tPY5LN9c
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-your-first-button
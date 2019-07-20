// Color Change Button
// uses comparison operators (>, <) to make button turn dark green when pressed. 

draw = function() {
    fill(0, 255, 123); // START COLOR: green

    if (mouseIsPressed && mouseX > 50 && mouseX < 300 && mouseY > 100 && mouseY < 200) { 
        fill(11, 92, 23); // CLICK COLOR: dark green
    }
    rect(50, 100, 250, 100);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("Click Here!", 100, 150);
};

// result: https://youtu.be/zv81Fs3r754
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-smarter-button
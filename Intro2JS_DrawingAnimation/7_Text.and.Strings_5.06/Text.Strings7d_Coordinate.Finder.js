// Coordinate Finder

fill(30, 148, 67);

draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 12, 12); 
    var mouseLocation = (mouseX + "," + mouseY);
    text(mouseLocation, mouseX + 5, mouseY - 10);
    
};

// result: https://youtu.be/gqRsxL7P1jY
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pc/challenge-mouse-tracker
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/text-basics/a/review-text-and-strings
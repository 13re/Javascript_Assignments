// Magic 8 Ball 

// Ball
fill(0, 0, 0); // COLOR: black
ellipse(200, 200, 375, 375);

// Triangle viewer
fill(74, 9, 227); // COLOR: violet blue
triangle(200, 105, 280, 280, 120, 280); 

// Text styling
fill(255, 255, 255); // COLOR: white
textSize(16);

// Random Answers
var answer = floor(random(0, 5));
if (answer === 0) {
    text("YES", 184, 215);
} else if (answer === 1) {
    text("NO", 188, 215);
} else if (answer === 2) {
    text("NOT YET", 167, 215);
} else if (answer === 3) {
    text("ALMOST", 168, 215);
} else if (answer === 4) {
    text("DO IT", 180, 215);
}

// result: https://youtu.be/S02nQLx36_Q
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pp/project-magic-8-ball
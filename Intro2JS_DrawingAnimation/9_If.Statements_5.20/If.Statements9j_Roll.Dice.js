/* 
nested blocks are messy (many if statements inside elses. 
Instead just do more else if-blocks on the same line. Can make roll dice. 

*/

// dice roll 

// generates a random number between 1 and 6
var number = random(1, 6);
var integer = round(number);

// display the text
fill(0, 0, 0);
textSize(75);
text(integer, 175, 130);
fill(255, 0, 0);
textSize(50);
text("Roll the Dice!", 50, 350);


// draw the dice
fill(255, 0, 0);
rect(150, 150, 100, 100);

// set the coin color
if (integer === 1) {
    fill(0, 0, 0);
    ellipse(200, 200, 15, 15); // middle
} else if (integer === 2) {
    fill(0, 0, 0);
    ellipse(175, 175, 15, 15); // top left
    ellipse(225, 225, 15, 15); // bottom right
} else if (integer === 3) {
    fill(0, 0, 0);
    ellipse(175, 175, 15, 15); // top left
    ellipse(200, 200, 15, 15); // middle
    ellipse(225, 225, 15, 15); // bottom right
} else if (integer === 4) {
    fill(0, 0, 0);
    ellipse(175, 175, 15, 15); // top left
    ellipse(225, 175, 15, 15); // top right
    ellipse(175, 225, 15, 15); // bottom left
    ellipse(225, 225, 15, 15); // bottom right
} else if (integer === 5) {
    fill(0, 0, 0);
    ellipse(175, 175, 15, 15); // top left
    ellipse(225, 175, 15, 15); // top right
    ellipse(200, 200, 15, 15); // middle
    ellipse(175, 225, 15, 15); // bottom left
    ellipse(225, 225, 15, 15); // bottom right
} else {
    fill(0, 0, 0);
    ellipse(175, 175, 15, 15); // top left
    ellipse(225, 175, 15, 15); // top right
    ellipse(175, 200, 15, 15); // middle left
    ellipse(225, 200, 15, 15); // middle right
    ellipse(175, 225, 15, 15); // bottom left
    ellipse(225, 225, 15, 15); // bottom right
}

// result: https://youtu.be/--G6TODf1Jk
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pt/ifelse-part-2
// Bouncy Ball

/* NOTES
Ask self: What do I want my animation to do? 
If answer has the word "if" in it, then use an if statement. Ex:
I want this ball to bounce back if it hits the right wall...
This sentence contains the word "if", so use an if statement to make it happen.
*/

// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 4;

draw = function() {
    background(127, 255, 208); // COLOR: teal
    
    fill(77, 47, 77); // COLOR: midnight purple
    ellipse(200, y, 50, 50); 

    // move the ball
    y = y + speed;
    
    if(y > 375){speed = -4;} // bottom direction change
    if(y < 25){speed = 4;} // top direction change
};

// result: https://youtu.be/xzC92TypSvQ
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-bouncy-ball
noStroke();
background(82, 222, 240); // blue sky

var sunSize = 30; // sun starting-size

draw = function() {
     // Sun
    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);

    // Land
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    
    sunSize = sunSize + 1;
};

// result: https://www.youtube.com/watch?v=tMHwmNioAYw
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pc/challenge-exploding-sun
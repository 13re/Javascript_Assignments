// Basic Ruler 
// using a while loop

fill(17, 0, 255);

var x = 0; // initializes the variable
while (x < 400) { // how long to repeat
    text(x, x, 10); // what to repeat
    x += 50; // what to change each time
}

var y = 0;
while (y < 400) {
    text(y, 0, y);
    y += 50;
}

// reuslt: https://i.imgur.com/w35b49c.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/looping/pc/challenge-a-loopy-ruler
// For Loops

// Both loops below do the same exact thing: 

// while loop version
var y = 0;
while (y < 5) {
    text("Loops!"), 50, y);
    y += 1;
}

// for loop version
// for (start; how long; change)
for (var y = 0; y < 5; y += 1) {
    text("Loops!", 50, y);
}

// for loops can usually do the same thing as while loops, they are just more concise.

// lesson: https://www.khanacademy.org/computing/computer-programming/programming/looping/pt/for-loops-a-new-kind-of-loop
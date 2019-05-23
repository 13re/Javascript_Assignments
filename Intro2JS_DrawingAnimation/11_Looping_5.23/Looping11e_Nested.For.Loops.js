// Nested For Loops
// a loop within a loop

// we want x to be dependent on i

// outer-loop (pink balls)
for (var j = 0; j < 13; j++) { 
    noStroke();
    fill(255, 0, 255); // COLOR: pink 
    ellipse(20, j*30+20, 24, 24);
    fill(0, 0, 0); // COLOR: black
    text(j, 15, j*30+24); 
    
    // inner-loop (turqoise balls)
    for(var i = 0; i < 12; i++){ 
        fill(30, 161, 166); // COLOR: turquoise
        ellipse(i*30+50, j*30+20, 24, 24);
        fill(255, 255, 255); // COLOR: white
        text(i, i*30+45, j*30+24);
    
// i changes more frequently than j
    }
}

// result: https://i.imgur.com/etPJjyZ.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/looping/pt/nested-for-loops

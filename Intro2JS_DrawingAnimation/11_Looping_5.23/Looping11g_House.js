// House
// made using nested for loops

background(220, 255, 255); // COLOR: blue sky

// ground
noStroke();
fill(70, 117, 60); // COLOR: green (ground)
rect(0, 330, 400, 80);

// house
stroke(0, 0, 0); // COLOR: black (outlines)
fill(255, 255, 255); // COLOR: white (walls) 
rect(20, 150, 360, 200);

// door
strokeWeight(5);
stroke(63, 11, 69); // COLOR: midnight purple (door trim) 
fill(120, 80, 19); // COLOR: brown (door) 
rect(170, 240, 60, 110);

strokeWeight(1);
stroke(0, 0, 0); // COLOR: black (outlines) 

// doorknob
fill(251, 255, 0); // COLOR: yellow (doorknob)
ellipse(220, 297, 10, 10);

// raised-base below house
fill(16, 87, 16); // COLOR: dark green (base) 
rect(10, 350, 380, 10);

// windows
for (var y = 1; y < 5; y++) {
    stroke(82, 64, 47); // COLOR: brown (window trim)
    fill(215, 237, 247); // COLOR: light blue (window)
    rect(140, y*50+100, 20, 50); // left windows
    rect(240, y*50+100, 20, 50); // right windows
}
stroke(0, 0, 0); // COLOR: black (outlines)

//chimney
fill(255, 255, 255); // COLOR: white (chimney)
rect(40, 70, 20, 60);
fill(97, 25, 25); // COLOR: midnight red (chimney top)
rect(40, 70, 20, 10);

// roof
fill(133, 111, 87); // COLOR: brown (roof) 
stroke(79, 64, 47); // COLOR: darker brown (roof shingles)
strokeWeight(2);
triangle(200, 25, 395, 150, 5, 150); // roof triangle
// roof shingles (repeating lines) 
for (var x = 1; x < 19; x++) {
    line(200, 25, x*20+10, 150);
}

// grass rows
for (var rowX = 1; rowX < 11; rowX++) {
    for (var grassX = 1; grassX < 5; grassX++) {
        stroke(40, 181, 42); // COLOR: light green (grass)
        // left row
        line(rowX*15+5, 360, // bottom of grass
        grassX*4-4+(rowX*15), 335); // top of grass
        // right row
        line(rowX*15+230, 360, // bottom of grass
        grassX*4+220+(rowX*15), 335); // top of grass
    }
}

// result: https://i.imgur.com/1dnSmBc.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/looping/pp/project-build-a-house
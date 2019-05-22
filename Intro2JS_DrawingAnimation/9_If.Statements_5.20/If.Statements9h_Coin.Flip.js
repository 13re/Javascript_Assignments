// Coin Flip

// generates a random number between 0-1. 
var number = random(0, 1);
var integer = round(number);

// if(mouseClicked){number = random(0,1); // Why does this not flip the coin? 

// title text box
fill(0, 0, 0); // COLOR: black
rect(0, 0, 400, 60); // black text box at top
fill(38, 255, 226); // COLOR: turquoise 
textSize(50);
text("Heads or Tails?", 20, 50);

textSize(40); // lower text
strokeWeight(3); // edge of coin
stroke(102, 82, 69); // COLOR: dark brown
fill(156, 128, 98); // COLOR: light brown
ellipse(200, 200, 100, 100); // coin (circle in center)

// HEADS
if (integer === 0) { 
    text("heads", 145, 310);
    noStroke();
    fill(102, 82, 69); // COLOR: dark brown
    triangle(180, 225, 220, 225, 198, 200); // neck/shoulders
    rect(180, 225, 40, 20); // chest
    ellipse(200, 190, 40, 40); // head circle
    triangle(215, 195, 225, 195, 219, 185); // nose
    ellipse(195, 175, 40, 20); // top-of-head hair
    ellipse(180, 185, 15, 35); // back-of-head hair
// TAILS
} else { 
    text("tails", 165, 310);
    fill(102, 82, 69); // COLOR: dark brown
    rect(170, 195, 60, 20); // main building structure
    rect(180, 190, 40, 5); // top of building
    triangle(165, 220, 235, 220, 200, 195); // building base
    // columns on building
    fill(156, 128, 98); // COLOR: light brown
    rect(175, 200, 5, 15);
    rect(180, 200, 5, 15);
    rect(185, 200, 5, 15);
    rect(190, 200, 5, 15);
    rect(195, 200, 5, 15);
    rect(200, 200, 5, 15);
    rect(205, 200, 5, 15);
    rect(210, 200, 5, 15);
    rect(215, 200, 5, 15);
    rect(220, 200, 5, 15);
}

// result: https://youtu.be/pfye7rx53x0
// lesson: https://www.khanacademy.org/computer-programming/coin-flip/6223775340527616
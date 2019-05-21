// Varnamala Tracing App v1
// user may practice tracing their varnamala (Telugu Alphabet) 

background(230, 230, 220);

// lines of character
noFill();
stroke(255, 255, 255); // COLOR: white
strokeWeight(20); // thickness of lines

// outer circle of character
ellipse(200, 200, 200, 200);

// center dot of character
fill(255, 255, 255);
ellipse(200, 200, 15, 15);

// top swoop of character
fill(230, 230, 220);
arc(200, 40, 170, 100, 1, 130);

// drawing utensil may be used when mouse is pressed
draw = function(){
    if(mouseIsPressed){
        noStroke();
        fill(17, 7, 43);
        ellipse(mouseX, mouseY, 25, 25);
    }
};

// result: https://youtu.be/CdGu15cFJP0
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-your-first-painting-app
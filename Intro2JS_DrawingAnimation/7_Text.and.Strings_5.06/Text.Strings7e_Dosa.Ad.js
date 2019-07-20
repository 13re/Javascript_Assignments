// Dosa Ad w/ flashing border

background(255, 255, 255);
var adX = 40;
var adY = 80;

var adBorder = 1;

draw = function() {

adBorder = random(1, 255);

// ad background
stroke(adBorder, 174, 128); // COLOR: light green
strokeWeight(5);
fill(247, 255, 0); // COLOR: yellow
rect(adX - 20, adY - 40, 355, 80);

// ad text
fill(150, 74, 74); // COLOR: Dark red
textSize(34);
text("Yosa Mosa Dosa", adX, adY);
textSize(12);
text("with FREE Peanut Chutney... because it's oh sa yummy", adX + 25, adY + 25);

// plate
noStroke();
fill(235, 169, 89); // COLOR: dull orange
ellipse(200, 250, 250, 135);

// bowl bottom
noStroke();
fill(145, 106, 61); // COLOR: dark brown
ellipse(50, 325, 80, 60); 

// bowl top
stroke(201, 142, 74); // COLOR: dull orange
strokeWeight(4);
fill(237, 234, 197); // COLOR: off-white / cream
ellipse(50, 310, 80, 35);

// peanut chutney
noStroke();
fill(237, 175, 19); // COLOR: light orange
ellipse(50, 312, 76, 26);
fill(224, 159, 9); // COLOR: darker orange shadow
ellipse(50, 305, 55, 30);
fill(250, 189, 45); // COLOR: brighter orange
ellipse(50, 300, 55, 30);
stroke(240, 173, 39); // COLOR: light dull orange (swirl on top)
strokeWeight(6); 
ellipse(53, 295, 30, 20);

// dosa stack
stroke(224, 208, 188);
strokeWeight(4);
fill(237, 234, 197);
ellipse(200, 250, 200, 100); // bottom of stack
ellipse(200, 240, 200, 100); // 
ellipse(200, 230, 200, 100); // 
ellipse(200, 220, 200, 100); // 
ellipse(200, 210, 200, 100); // 
ellipse(200, 200, 200, 100); // top of stack

};

// result: https://youtu.be/8Xf8Tkzj0hY
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pp/project-ad-design
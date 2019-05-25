// Arrays - Top 3 Favorite Fruits

/* This program displays top 3 favorite fruits using an array */

var favFruits = ["apple", "banana", "strawberry"];

var textY = 100;
var textX = 10;

// header text
textSize(35);
fill(115, 24, 24);
text("Top " + favFruits.length + " Favorite Fruits", textX, textY);

// fruits text
textSize(40);
fill(255, 0, 0);
text("+ " + favFruits[0], textX + 20, textY + 50);
text("+ " + favFruits[1], textX + 20, textY + 100);
text("+ " + favFruits[2], textX + 20, textY + 150);

// result: https://i.imgur.com/hYwiKV0.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/arrays/pc/challenge-favorite-fruits
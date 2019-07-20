/* Review how program works:
Var x & y control the center of the main shape
    all other shapes positioned relative to the main shape. 

To control more things about the shapes, 
figure out what else can be stored as variables by looking for 
hardcoded numbers - numbers that are just numbers, not variables nor dependent on variables. 

Next, make all relative shapes resize with the main shape by making them fractions. Ex: 
    var noseSize = 1/6 * faceSize; 
    (varX - 1/4 faceSize, varY + 1/2 faceSize, eyeSize, eyeSize)

*/

// Growing Flower
// all shapes change proportionately

var flowerSize = 100;

var xPos = 200;
var yPos = 200;

var leafSize = 7/20 * flowerSize; // leafSize is dependent on flowerSize
var centerSize = 2/5 * flowerSize; // centerSize is dependent on flowerSize
var petalSize = 1/4 * flowerSize; // petalSize is dependent of flowerSize

//stems
stroke(47, 158, 69);
strokeWeight(10);
line(xPos, yPos, xPos - 1/5 * flowerSize, yPos - 1/5 * flowerSize); // top left stem
line(xPos, yPos, xPos + 1/5 * flowerSize, yPos - 1/5 * flowerSize); // top right stem
line(xPos, yPos - 3/5 * flowerSize, xPos, yPos + 2/5 * flowerSize); // middle stem = 200 - flowerSize * 1/2
// When flowerSize = 200
// y = 1/4 * flowerSize
// when flowerSize = 100
// y = 3/2 * flowerSize
noStroke();

// leaves
fill(47, 158, 69);
ellipse(xPos - 1/5 * flowerSize, yPos - 1/5 * flowerSize, leafSize, 4/7 * leafSize); // left leaf
ellipse(xPos + 1/5 * flowerSize, yPos - 1/5 * flowerSize, leafSize, 4/7 * leafSize); // right leaf

// flower centers
fill(171, 116, 21); // COLOR // dark brown
ellipse(xPos, yPos - 3/5 * flowerSize, centerSize, centerSize); // large center
fill(204, 158, 43); // COLOR: light brown
ellipse(xPos, yPos - 3/5 * flowerSize, 1/2 * centerSize, 1/2 * centerSize); // small center

// petals (positioned: north, east, south, west)
stroke(237, 226, 99); // COLOR: light tan
strokeWeight(4);
fill(247, 255, 0); // COLOR: yellow
ellipse(xPos - 1/4 * flowerSize, yPos - 3/5 * flowerSize, petalSize, petalSize); // W petal
ellipse(xPos + 1/4 * flowerSize, yPos - 3/5 * flowerSize, petalSize, petalSize); // E petal
ellipse(xPos, xPos - 7/20 * flowerSize, petalSize, petalSize); // S petal
ellipse(xPos, yPos - 17/20 * flowerSize, petalSize, petalSize); // N petal
ellipse(xPos + 7/40 * flowerSize, yPos - 17/40 * flowerSize, petalSize, petalSize); // SE petal
ellipse(xPos + 7/40 * flowerSize, yPos - 31/40 * flowerSize, petalSize, petalSize); // NE petal
ellipse(xPos - 7/40 * flowerSize, yPos - 31/40 * flowerSize, petalSize, petalSize); // NW petal
ellipse(xPos - 7/40 * flowerSize, yPos - 17/40 * flowerSize, petalSize, petalSize); // SW petal

// result: https://youtu.be/6vkeLPadYao
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/resizing-with-variables/pt/resizing-shapes-with-variable-expressions
// basic calculator that adds, subtracts, multiplies, & divides

/*
    +  add returns the sum between two arguments
    -  subtract returns the difference between two arguments
    *  multiply returns the product of two arguments
    /  divide returns the quotient between two arguments
*/

var add = function(num1, num2) {
    return num1 + num2;
};
var subtract = function(num1, num2) {
    return num1 - num2;
};
var multiply = function(num1, num2) {
    return num1 * num2;
};
var divide = function(num1, num2) {
    return num1 / num2;
};

textSize(20);
fill(40, 103, 133);
text("15 + 3 = " + add(15, 3), 10, 30);
text("15 - 3 = " + subtract(15, 3), 10, 60);
text("15 * 3 = " + multiply(15, 3), 10, 90);
text("15 / 3 = " + divide(15, 3), 10, 120);

text("8 + 4 = " + add(8, 4), 10, 180);
text("8 - 4 = " + subtract(8, 4), 10, 210);
text("8 * 4 = " + multiply(8, 4), 10, 240);
text("8 / 4 = " + divide(8, 4), 10, 270);

// result: https://i.imgur.com/dv34Mf4.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pc/challenge-calculator
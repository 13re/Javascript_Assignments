// Creative things we can do with text

/* Notes:
String = text. 
Variables can refers to numbers or strings. 

var myName = "Person"; 
var message = myName + "!!!!"; 

String variables only allow us to add, not subtract, multiple, nor divide. 

text(message, mouseX, mouseY); 
makes the text follow the mouse to draw, 
or add background before in a draw function loop to just follow & not draw. 
*/

fill(30, 204, 126);
    
var growText = 5;
var draw = function() {
    growText = growText + 0.03;
    textSize(growText);
    background(0, 238, 255);
    var sampleText = "Hello";
    var extraText = sampleText + " " + "World";
    text(extraText, mouseX + 5, mouseY -10);
};

// result: https://youtu.be/DS3T67TTjhY
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/text-basics/pt/terrific-text-part-two

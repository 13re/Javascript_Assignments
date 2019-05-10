// Functions

/* Notes:
Code is more re-usable by grouping into functions. 
Functions can accept parameters & return values. 

rect, text, fill are samples of functions being called. 
A function is a collection of code that we group together & 
give a name to be able to use that group of code many times. 
A rect is actually just 4 line functions in one. 

Turn all of code in a function 
var projectName = function() { }; 
add all code indented between { }. 
Now we have a variable storing a function. 

We've given a label to the block of code so our program can find it & 
reuse the block of code whenever we tell the program to run the code again by calling the new function. 

to call the new function:
projectName();

When a group of function is saved together for later use in other programs, it is called a library. 
Khan Academy does not support user-created libraries. 

Program.restart(); // restarts the program

*/

// Name Calling

var introMessage = function(){
    var textX = random(10, 210);
    var textY = random(50, 250);
    var yourName = "Human!";
    
    // Color Randomnizers
    var redChange = random(1, 255);
    var greenChange = random(100,200);
    var blueChange = random(1, 255);
    
    // Text
    fill(redChange, greenChange, blueChange); // COLOR: random
    textSize(40);
    text("Hi " + yourName, textX, textY);
};

introMessage();
introMessage();
introMessage();

// result: https://youtu.be/5JwnycV-SrU 
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pc/challenge-say-your-name
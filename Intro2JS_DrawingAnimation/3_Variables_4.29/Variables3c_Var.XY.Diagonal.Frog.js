// Diadonal Frog

/* It's best to leave x and y as separate variables in case we later want to move horizontally or vertically. 
We can assign x and y the same value temporarily using a third variable. 
For the size of our canvas (on Khan Academy) we can move diagonally in both directions like this:  

// Northwest to Southeast [ \ ]
var a = 200;
var x = a;
var y = a;
*/

// Northeast to Southwest [ / ]
var a = 200;
var x = a;
var y = -a+400;

noStroke();
fill(30, 204, 91); // green (for face)

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye skin
ellipse(x + 50, y - 50, 40, 40); // right eye skin

fill(255, 255, 255); // white (for eyes)
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

fill(0, 0, 0); // black (for pupils + mouth)
rect(x-55, y-50, 10, 10); // left eye pupil 
rect(x + 45, y - 50, 10, 10); // right eye pupil

ellipse(x, y, 150, 50); // mouth

/*  new things learned:
Variables store values. 
To use variables we must:
1. declare it (let the program know about the variable) 
2. assign it (let the program know what value is stored in the variable).

var a; // declares "a"
a = 10; // assigns "a" the value of 10. 

var a = 10; // declares + assigns "a" in one statement. 

a = 20 // assigns "a" the new value of 20. 

Variable Names in Javascript___
Variable names begin with letters, $ or _. 
Variable names only contain letters, numbers, $ and _. 
"coolDude", "step_1", and $dollaBills88" are all valid variable names. 
Variables are case sensitive. "Hello" is different from "hEllo". Consistency is key. 

Variable names must be unique. 
Many variable names already exist in the ProcessingJS library. 
If a "Read only!" error pops up, try changing the variable name. 
Variable names should give clarity & meaning to others when trying to read your code. 
"shoeSize" should be used instead of "ss". 
Camel case should be used for multiple words like "shoeSize".

Some of the reserved variable names are:
abstract, boolean, break, byte, case, catch, char, class, const, continue, 
debugger, default, delete, do, double, else, enum, export, extends, 
false, final, finally, float, for, function, goto, 
if, implements, import, in, instanceof, int, interface, 
let, long, native, new, null, package, private, protected, public, 
return, short, static, super, switch, synchronized, 
this, throw, throws, transient, true, try, typeof, 
var, void, volatile, while, with. 
List: http://www.javascripter.net/faq/reserved.htm
*/

// result: https://i.imgur.com/h8JoihH.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/variables/pc/challenge-funky-frog
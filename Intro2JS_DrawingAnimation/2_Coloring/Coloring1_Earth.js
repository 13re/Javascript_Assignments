// Coloring with Javascript

background(0, 0, 0); //outer space
noStroke(); // removes lines (shows only the fill color)

// stars
fill(255, 255, 255);
//top left
ellipse(10, 10, 5, 5);
ellipse(40, 30, 3, 3);
ellipse(30, 80, 4, 4);
ellipse(25, 100, 3, 3);
ellipse(35, 150, 3, 3);
ellipse(140, 40, 3, 3);
ellipse(135, 35, 3, 3);
ellipse(135, 42, 2, 2);
//top right
ellipse(310, 30, 3, 3);
ellipse(350, 10, 4, 4);
ellipse(380, 50, 2, 2);
ellipse (370, 120, 4, 4);
// bottom left
ellipse(50, 320, 3, 3);
ellipse(20, 370, 4, 4);
ellipse(80, 360, 2, 2);
ellipse(120, 380, 4, 4);
ellipse(6, 230, 4, 4);
// bottom right
ellipse(300, 360, 2, 2);
ellipse(360, 300, 4, 4);
ellipse(368, 307, 3, 3);
ellipse(370, 315, 2, 2);
ellipse(380, 300, 2, 2);

// shooting star
ellipse(100, 50, 4, 3); // shooting star head
strokeWeight(2);
stroke(221, 251, 252);
line(30, 40, 100, 50); // shooting star tail

noStroke();

// globe
fill(141, 205, 235);
ellipse(200, 200, 300, 300);

// continents
fill(0, 245, 106);
triangle(100, 140, 180, 140, 140, 240); // North America
rect(120, 220, 50, 50); // South America
triangle(180, 110, 320, 110, 250, 200); // Russia
triangle(190, 170, 250, 170, 220, 250); // Africa
rect(250, 260, 70, 30); // Austrailia

/* new things learned
Default line color is black. Default fill color is white. 

Background color must be above everything in the code, or it will cover whatever is above it.
background(255, 0, 0); // Fills background with red 
RGB = (red amount, green amount, blue amount)

fill(255, 0, 0); // fills the color for every shape after this function

strokeWeight(15); // changes the thickness of all lines below to 15
stroke(255, 0, 0); // changes the color of all lines below to red
line(start point x, y, end point x, y);
Lines do not have insides, so the fill function will not affect lines.
noStroke(); // removes outlines on all shapes below
stroke(255, 0, 0); // would turn off the noStroke function
Always set the color (using the fill function) before drawing the shape to fill with that color.

noFill(); // makes shapes clear
stroke(random(0,255), random(0,255), random(0,255)); // sets a random color each time
fill(100, 100, 100); = fill(100); 
You can imbed Javascript into an HTML file using the <script> tag. 
Javascript can also be saved in a separate .js file. Then it can be used with <script src="path/to/script.js"></script>
These lessons are using the ProcessingJS library. It adds functions to draw shapes and make animations. 
jQuery makes websites interactive using fewer lines of code. 
*/

// result: https://i.imgur.com/sa7t4XC.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/coloring/pt/coloring-with-code 
/* Turn a drawing into an animation. 
The position of the car moves when the value of x is changed. 
To make an animation, we need to get our programming environment to make 
new drawings many time a second with a different x value each time. 

draw = function() {   

};  

A function makes it easy for us to group a bunch of code together. 
The draw function makes all lines of code inside the function run repeatedly. 

To make the car be drawn in a new spot every time, 
we should initially declare & assign x outside of the draw function, 
then add "x = x +1;" at the end of the draw function. 
...This will create a smear of drawings - To fix this, 
we put our background function inside the draw function.  
*/


noStroke(); // no lines around shapes

// position of horizontal-moving land (road lines + field rows) 
var landX = 10; 

draw = function() {
    // all code inside here will run repeatedly

    background(151, 244, 247); // color: sky blue
    
    // road
    fill(105, 105, 105); // color: dark gray 
    rect(0, 150, 400, 100); // road shape

    // lines on road
    fill(255, 247, 0); // color: yellow
    rect(landX, 190, 30, 5);
    rect(landX + 50, 190, 30, 5);
    rect(landX + 100, 190, 30, 5);
    rect(landX + 150, 190, 30, 5);
    rect(landX + 200, 190, 30, 5);
    rect(landX + 250, 190, 30, 5);
    rect(landX + 300, 190, 30, 5);
    rect(landX + 350, 190, 30, 5);
    rect(landX + 400, 190, 30, 5);
    rect(landX + 450, 190, 30, 5);
    rect(landX + 500, 190, 30, 5);
    rect(landX + 550, 190, 30, 5);

    // light green field rows
    fill(5, 173, 45);
    rect(landX - 10, 250, 100, 200);
    rect(landX + 190, 250, 100, 200);
    rect(landX + 390, 250, 100, 200);
    rect(landX + 590, 250, 100, 200);
    // dark green field rows
    fill(12, 145, 0);
    rect(landX + 90, 250, 100, 200);
    rect(landX + 290, 250, 100, 200);
    rect(landX + 490, 250, 100, 200);
    
       // car body
    fill(255, 0, 115); // color: red
    rect(10, 200, 100, 20);
    rect(25, 178, 70, 40);
    
    // wheels
    fill(0, 0, 0); // color: black
    ellipse(35, 221, 24, 24);
    ellipse(85, 221, 24, 24);

    landX = landX - 1;
    if(landX < -190){landX = 10;}

};

// result: https://youtu.be/i2JYELCghFc
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pt/making-animations
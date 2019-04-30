// Sunny Day Snowman

background(204, 255, 255);
noStroke();

// ground
fill(28, 186, 13);
rect(0, 300, 400, 100);  
// blades of grass
stroke(25, 166, 10);
strokeWeight(2);
line(10, 340, 10, 360);
line(14, 340, 10, 360);
line(50, 320, 48, 340);
line(45, 320, 48, 340);
line(110, 370, 110, 390);
line(116, 368, 110, 390);
line(350, 310, 350, 330);
line(340, 310, 350, 330);
line(300, 360, 300, 380);
line(306, 360, 300, 380);




// sun rays
stroke(255, 242, 0);
strokeWeight(2);
line(10, 10, 150, 120);
line(10, 120, 150, 10);
line(80, 0, 80, 150);
line(5, 65, 160, 65);
// sun
fill(255, 242, 0);
ellipse(80, 64, 95, 95); 

// snowman
fill(255, 255, 255);
stroke(230);
strokeWeight(3);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);

// sunglasses
noStroke();
fill(0, 0, 0);
ellipse(187, 115, 20, 16);
ellipse(213, 115, 20, 16);
stroke(0, 0, 0);
line(213, 115, 187, 115);
line(180, 115, 165, 107);
line(220, 115, 235, 107);

// mouth
line(190, 140, 210, 139);

/* new things learned:
Computers remember things better than we do. 
We can use Documentations like a dictionary to look up what we don't remember. 
Great programmers don't try to memorize everything. 
Great programmers are the best at using documentation. 


*/

// result: https://i.imgur.com/IPQpIyD.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/coloring/pc/challenge-sunny-snowy-day
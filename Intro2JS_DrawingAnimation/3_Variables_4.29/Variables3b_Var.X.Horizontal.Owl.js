// Owl moves horizontally by changing the value of x. 
noStroke();
var x = 200; // change this number to move the owl horizontally
// saves a lot of typing when we want to shift the position of everything. 
// With math expressions, we can use variables to replace mismatching parameter numbers.

// body
fill(255, 132, 0);
beginShape();
vertex(x + 20, 300);
vertex(x - 20, 300);
vertex(x - 50, 250);
vertex(x - 80, 250);
vertex(x - 100, 220);
vertex(x - 100, 180);
vertex(x - 50, 200);
vertex(x - 60, 120);
vertex(x - 20, 100);
vertex(x + 20, 100);
vertex(x + 60, 120);
vertex(x + 50, 200);
vertex(x + 100, 180);
vertex(x + 100, 220);
vertex(x + 80, 250);
vertex(x + 50, 252);
endShape(CLOSE); 

// eye circles
fill(255, 153, 0);
ellipse(x - 30, 165, 40, 60);
ellipse(x + 30, 165, 40, 60);

// eye whites
fill(255, 255, 255);
ellipse(x - 30, 165, 30, 40);
ellipse(x + 30, 165, 30, 40);

//pupils
fill(0, 0, 0);
ellipse(x - 30, 165, 20, 40);
ellipse(x + 30, 165, 20, 40);

//stomach
fill(255, 218, 173);
ellipse(x, 250, 60, 85);

//beak
fill(255, 0, 0);
triangle(x-10, 180, x+10, 180, x, 215);

result: https://i.imgur.com/BxaV5jE.png
lesson: https://www.khanacademy.org/computing/computer-programming/programming/variables/pt/more-on-variables

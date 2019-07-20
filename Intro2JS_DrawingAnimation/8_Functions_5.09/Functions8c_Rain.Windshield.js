// Rain on windshield

background(107, 111, 179);
noStroke();
// clouds

// top darkest cloud
fill(134, 143, 156);
ellipse(200, 25, 500, 100); 
// mid grey clouds
fill(176, 182, 191);
ellipse(250, 100, 250, 75); 
ellipse(260, 75, 200, 75);
ellipse(75, 50, 200, 75);
// light grey clouds
fill(208, 212, 219);
ellipse(125, 75, 200, 50);
ellipse(100, 50, 100, 50);
ellipse(325, 50, 200, 75); 


var rainDrop = function(){
    var rainY = random(1, 400);
    var rainX = random(1, 400);
    fill(211, 234, 235);
    ellipse(rainX, rainY, 5, 10);
};

draw = function() {
    rainDrop();
};
    
// result: https://youtu.be/yUnTd7ENMXc
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/function-parameters
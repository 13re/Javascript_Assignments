// Constellation Maker

var xPositions = [100, 200];
var yPositions = [200, 300];

var skyBackground = function(){
    background(9, 5, 59);
    fill(255, 255, 0);
    textSize(30);
    text("Click to add stars!", 20, 40);  
};

skyBackground();

var drawStars = function() {
    skyBackground();
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
    }
};

drawStars();

mouseClicked = function() {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
        drawStars();
};

// result: https://www.youtube.com/watch?v=aaQPi4tKS1g
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/arrays/pc/challenge-constellation-maker
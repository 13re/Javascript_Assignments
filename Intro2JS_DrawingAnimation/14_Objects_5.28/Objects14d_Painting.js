// Painting

// Practice

var paintBrush = {
    x: 100,
    y: 100,
    img: getImage("cute/Rock")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function() {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
};

// result: https://youtu.be/t3DKsIT4EBk
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/programming/objects/pc/challenge-picture-painter
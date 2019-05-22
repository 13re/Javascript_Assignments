// Flash Card Flip

draw = function() {
    background(130, 115, 95);
    fill(250, 250, 220);
    rect(20, 100, 364, 200);

    fill(0, 0, 0);
    textSize(100);
    
    if(mouseIsPressed){
        fill(10, 90, 10);
        text("pilli", 115, 220);
    } else{
        fill(190, 30, 30);
        text("cat", 125, 220);
    }
};

// result: https://youtu.be/gjQxvo8zmpc
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-flashy-flash-card
// Rainbow Paintbrush
// mouseX & mouseY can also be used to change colors

draw = function() {
    stroke(30, mouseY, mouseX);
    fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 20, 20);
};

// result: https://youtu.be/pwC1OUzoXMc
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/interactive-programs/pc/challenge-mouse-movement-mania
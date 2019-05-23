// Graph Paper
// graph paper made using for loops

background(255, 255, 230);
stroke(175, 235, 245);

for (var i = 0; i < 20; i++){
    var lineY = 20 + (i*20);
    line(0, lineY, 400, lineY);
}

for (var j = 0; j <20; j++){
    var lineX = 20 + (j*20);
    line(lineX, 0, lineX, 400);
}

// result: https://i.imgur.com/25UHLHs.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/looping/pc/challenge-lined-paper
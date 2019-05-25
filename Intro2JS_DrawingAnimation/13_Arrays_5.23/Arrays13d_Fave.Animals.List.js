// Top 3 Fave Animals

/* This programs displays top 3 fave animals using an array + loops */

var favAnimals = ["snake", "cow", "cat"];

textSize(40);
fill(92, 17, 73);
text("Top " + favAnimals.length + " Fave Animals", 20, 50);


// for loop version (purple)
for(var numAnimals = 0; numAnimals < favAnimals.length; numAnimals++){
    textSize(30);
    fill(171, 51, 141); // COLOR: purple
    text((numAnimals + 1) + ". " + favAnimals[numAnimals], 20, 100+numAnimals*50);
}

// while loop version (green)
var numAnimal = 0;
while(numAnimal < favAnimals.length){
    fill(8, 92, 0); // COLOR: green
    text((numAnimal + 1) + ". " + favAnimals[numAnimal], 200, 100+numAnimal*50);
    numAnimal++;
}

// result: https://i.imgur.com/8N7dFAV.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/arrays/pc/challenge-favorite-animals
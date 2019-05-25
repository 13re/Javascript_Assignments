// Modyfying Arrays (notes)

// can add numbers to arrays

/*
give user w/ no coding experience the ability to add new array element (balloon)

// move a single balloon
var draw = function() {
    if(mouseIsPressed) {
      xPositions[2] = mouseX;  // turns the 3rd item into mouseX
    }
}


// Constantly incrementing the [2] array element. 


// creates tons of balloons // working (not optimal)
var newInd = 2; 
var draw = function() {
    if (mouseIsPressed) {
        xPositions[newInd] = mouseX;
        newInd++;
    }
}

// creates tons of balloons // more optimal than above
var draw = function() {
    if (mouseIsPressed) {
        xPositions.push(mouseX) 
        // pushes mouseX onto the end of the array
    }
}
*/
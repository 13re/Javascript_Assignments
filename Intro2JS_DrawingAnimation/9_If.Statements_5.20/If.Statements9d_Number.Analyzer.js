// Number Analyzer (assignment) 
/*
Write a number analyzer program that:
    displays the number assigned to theNumber &
    outlines whether theNumber = positive, negative, or zero
    
Reminders:
    Positive numbers are larger than 0
    Negative numbers are smaller than zero
    Zero isn't a positive or negative. It's the only 0. 
*/

var theNumber = 100; // the number being analyzed

// text w/ number to be evaluated
fill(0, 0, 0); // COLOR: black
textSize(30);
text("Analysis of: " + theNumber, 10, 36);

// text analysis of number
fill(17, 68, 120); // COLOR: dark blue
text("It's positive", 10, 90);
text("It's negative", 10, 140);
text("It's zero", 10, 190);

noFill();

// outlines positive numbers
if (theNumber > 0){rect(5, 60, 200, 40);} 
// outlines negative numbers
if (theNumber < 0){rect(5, 110, 200, 40);}
// outlines zero
if (theNumber === 0){rect(5, 160, 200, 40);}


// result: https://youtu.be/SLVAktAoDY8
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-number-analyzer
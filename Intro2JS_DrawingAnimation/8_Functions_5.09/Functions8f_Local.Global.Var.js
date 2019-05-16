// Local and Global Variables 

/* Notes: (in own words)
    a function called within a function is a local variable. 
    To make it global, it must not be a function child when declared. 

    The "global scope" is the far left tab that is 
    outside of all functions (not a child of any function). 
    
    We can declare a global function then call it within another function 
    rather than declaring the function within another function (local). 

    A local function can only be used within the parent function,
    a glocal function can be used by all other functions within the program. 
*/

// Hours of monthly ramp time

var totalRampHours = 0; // both months in total

var calcHours = function(hoursPerDay) {
    var totalMonthlyHours = hoursPerDay * 7 * 4; // * 7 days * 4 weeks
    totalRampHours += totalMonthlyHours; 
    return totalMonthlyHours;
};

fill(55, 76, 158); // COLOR: dark blue
textSize(16);

text(("1st Month @ 1hr/day = ")+calcHours(1)+(" hrs total"), 10, 30);
text(("2nd Month @ 2hrs/day = ")+calcHours(2)+(" hrs total"), 10, 60);

text(("Total 2-month ramp = ")+totalRampHours+(" hrs"), 10, 100);

// result: https://i.imgur.com/20ulZ8q.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/local-and-global-variables
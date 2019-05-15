// Local and Global Variables 

var totalRampHours = 0; // both months in total

var calcHours = function(hoursPerDay) {
    var totalMonthlyHours = hoursPerDay * 7 * 4; // * 7 days * 4 weeks
    totalRampHours += totalMonthlyHours; 
    return totalMonthlyHours;
};

fill(55, 76, 158);
textSize(16);
text("Month 1 = one hour per day", 10, 30);
text("1hr/day month = ", 10, 50);
text(calcHours(1), 10, 70);

text("Month 2 = two hours per day", 10, 110);
text("2hrs/day month = ", 10, 130);
text(calcHours(2), 10, 150);

text("Total 2-month ramp hours:", 10, 200);
text(totalRampHours, 10, 220);

// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/local-and-global-variables
/* Notes:
Project info about our lives using code. 

Ex: If we spend 10 minutes a day doing something, 
how many hours is that per year? When we repeat calculations or repeat any code, 
we can turn that into a code. Ex: 
    var calcTotalHours = function(numYears) { 
        var totalHours = 1/6 * 365 * numYears; }; 
*/

// Minutes/Day = Awake Days/Year

var clockFrame = function(clockX, clockY) {
    stroke(128, 111, 69); // COLOR: dark brown
    strokeWeight(3);
    fill(191, 173, 128); // COLOR: light brown
    ellipse(clockX, clockY, 120, 120); // clock circles
};

var calcTotalAwakeDays = function(minutes) {
    return round(10*(365 * minutes)/60/16)/10; 
    // round(10*(365 day*min)/60min/16hrs)/10tenths
};

// TEXT: min/day
fill(74, 52, 12); // COLOR: dark brown
textSize(15);
text("15 min/day", 10, 20);
text("30 min/day", 200, 20);
text("45 min/day", 10, 220);
text("1 hr/day", 200, 220);

// TEXT: awake days/year 
fill(153, 36, 28); // COLOR: dark red
textSize(18);
text(calcTotalAwakeDays(15)+" awake days/yr", 10, 40);
text(calcTotalAwakeDays(30)+" awake days/yr", 200, 40);
text(calcTotalAwakeDays(45)+" awake days/yr", 10, 240);
text(calcTotalAwakeDays(60)+" awake days/yr", 200, 240);

// clock center coordinates
clockFrame(100, 120);
clockFrame(300, 120);
clockFrame(100, 320);
clockFrame(300, 320);

// time pie
var timePie = 105;
stroke(128, 111, 69);
strokeWeight(1);
fill(128, 111, 69); // COLOR: dark brown
arc(100, 120, timePie, timePie, -90, 0);
arc(300, 120, timePie, timePie, -90, 90);
arc(100, 320, timePie, timePie, -90, 180);
ellipse(300, 320, timePie, timePie);


// result: https://i.imgur.com/GtrQFve.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/function-return-values
// resources: http://www.javascripter.net/faq/rounding.htm

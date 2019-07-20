// Make It Rain (assignment)

/* An animation of rain falling on a window.
To make the rain look more realistic, we can see:
    COLOR: a variety of blue-tints/colors
    IMPACT: rain hitting the glass at the top then slowly crawling down
    SIZE: different size droplets
    SPEED: droplets crawl at slightly different speeds, some passing others
*/

// position variables for water droplets
var xPositions = []; 
var yPositions = []; 

// RGB variables
var colorR = []; 
var colorG = [];
var colorB = [];

draw = function() {
    
    // grey glass background
    background(134, 144, 163);
    
    noStroke(); // no lines around droplets/drawings

    // pushes new blue-tinted RBG value to array each iteration
    colorR.push(random(0, 50));
    colorG.push(random(0,50));
    colorB.push(random(200, 255));
    
    /* pushes new values to position arrays each iteration */
    // starts drops anywhere along x-axis
    xPositions.push(random(0, 400)); 
    // starts drops above y-axis (before our view)
    yPositions.push(random(0, 200)); 
    
    // iterates through the array elements
    for (var i = 0; i < xPositions.length; i++) {
        
        // starts droplets back at the top 
        if (yPositions[i] > 600){yPositions[i]= -100;}
        
        // smaller drops that appear to stick to the glass a bit
        ellipse(xPositions[i], yPositions[i], random(3,5), random(3,5));
        // larger drops
        ellipse(xPositions[i], yPositions[i+1], 10, 10);
        
        // randomnizes the speed of droplets crawling down glass
        yPositions[i] += 1.2*random(1,3);
        
        // fills random blue-tint for each drop
        fill(colorR[i], colorG[i], colorB[i]);
    }
};

// result: https://youtu.be/_9H24NPTOJU 
// lesson: https://www.khanacademy.org/computer-programming/spin-off-of-project-make-it-rain/4545077734375424
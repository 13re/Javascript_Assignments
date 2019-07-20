
// Special ProcessingJS Functions

/* Notes:
    In the ProcessingJS library, the draw function = pre-defined as an empty definition.
    The draw function gets called repeatedly by ProcessingJS. 
    The draw function can only be called once, otherwise only the most recent will work.

    To have multiple drawn functions, define each like this
        draw = function(){
            drawCar();
            drawBicycle();
            drawCat();
            drawPeople();
        }
    Then just have all reapeat info within the functions when defined. Ex:
    var drawCar = function();{
        // all the code that draws the car & makes it move
    }
*/

// Drawing w/ mouseDragged Function 

background(255, 0, 0);
noStroke(); 
mouseDragged = function() {
    fill(100, mouseY, mouseY);
    ellipse(mouseX, mouseY, 15, 15);
};

// More pre-defined functions can be found in the documentation. 

// result: https://youtu.be/gS2NMuWSSvw
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/functions/pt/special-processingjs-functions
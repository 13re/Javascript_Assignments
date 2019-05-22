/* Random Numbers - NOTES

Randomness
    makes program act differently each time it runs
    unpredictability
    created using random numbers & if/else conditions to change program's behavior based on random values
random numbers
    * when goal is to generate fair/even integer values, best to use floor() with random() (ex: if simulating coin flip, expect equal chance of "heads" or "tails")
        var randFlip = floor(random(0, 2));
            the variable randFlip will always be either 0 or 1, since it calls floor() on the return values of random(0, 2).
foating Point Numbers
    decimals
whole numbers
    integers
    (no decimals)
round()
    Rounds number down if < .5 & rounds up if > .5.
ceil()
    always rounds number up to next integer
floor()
    always rounds number down to an integer
    
*/
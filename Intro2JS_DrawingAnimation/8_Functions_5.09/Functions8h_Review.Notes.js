/* NOTES
Review: Functions

Function 
    // a way to re-execute blocks of code when writing programs, 
    without having to re-write the block of code entirely. 
    // Group code together, give it a name to call later.
    // Functions must first be declared + given a name (same way any variable is created),
    then follow it w/ a function definition.
        var sayHi = function(){
            anyCode
        };
    Any code could go inside that statement - one statement, multiple statements...
    
    If a function is only declared, nothing will happen. We must "call" the function
    in order for the program to execute the code inside the function. 
    To call a function, write: functionName();

    We can call functions whenever we want + however many times we want. 

    Functions should be customizable. We want code that is both reusable and flexible. 
    Ability to tell program " Do all this code, but change a few things about how you do it."
    We can achieve flexibility & reusability by specifying "arguments" for a function, 
    using those arguments to change how the function works, 
    and passing them in when we call the function. 

    To tell a program where we want it displayed, we need a function with 2 coordinate arguments inside:

    var sayHi = function(xPos, yPos){
        text("Hi!!, xPos, yPos");
    };

    The arguments that get passed in become like variables inside the function definition,
    and the names depend on what they are called in the parentheses. 
    We could easily rename the variables to something shorter:

    var sayHi = function(x, y){
        text("Hi!!, x, y");
    };

    Functions can accept any number of arguments - zero, one, two, more.
    We could also have our function accept a name to say hi to:

    var sayHi = function(name){
        text*"Hi, " + name, rancom(200), random(200));
    };

    sayHi("Brandon"); // calling the function
    sayHi("Brittney"); // calling the function

    Specifying 3 arguments for the name & position of the function:

    var sayHi = function(name, x, y){
        text("Hi " + name, x, y);
    };

    sayHi("Brandon", 20, 100); // calling the function

    Starting with no arguments, we can always add more as we realize their need. 

    Rect, ellipse, & triangle are existing function defined w/in the ProcessingJS library,
    but we can make our own custom functions as well,
    for example, could create a cat function. 

    Fuctions can also take in some values, compute them, and return a new value:
    add values, subtract, calculate the square root, multiply, etc.
    Functions take in the input as arguments and output the result using a return statement. 
    
    A function that adds 2 numbers & returns the result: 

    var addNumbers = function(num1, num2){
        var result = num 1 + num2; 
        return result;
    };

    var sum = addNumbers(5, 2);
    text(sum, 200, 200); // displays "7"

    The return statement gives a value back when called & it immediately exits the function. 
    It would be silly to have something like this, because the last line would never get executed: 

    var addNumbers = function(num1, num2){
        var result = num1 + num2;
        return result;
        result = result * 2; // this line would never get executed. 
    };

    Functions with return values are very useful for manipulating data in programs,
    and they can be combined together in expressions, too:

    var biggerSum = addNumbers(2, 5) + addNumbers(3, 2);

    Functions can even be called inside function calls, but it's harder to read sometimes:

    var hugeSum = addNumbers(addNumbers(5, 2), addNumbers(3, 7));

    When a new variable is declared inside a function, the variable is local to that function. 
    Only the function can see that variable - the rest of the program outside of it cannot see it. 
    Once we're outside the function, the variable no longer exists. 
    In this function, localResult is a local variable:

    var addNumbers = function(num1, num2){
        var localResult = num1 + num2;
        println("The local result is: " + localResult);
        return localResult;
    };

    addNumbers(5, 7);
    println(localResult); // this line will get an error "localResult is not defined."

    The variable is only defined inside the function, because that's where we declared it with the var localResult = line, 
    and is not defined outside of the function.
    
    When declaring a variable outisde functions, it is called a "global variable".
    All functions can now access the variable and do whatefer they want with it. 

    var globalResult; // declaring variable outside function

    var addNumbers = function(num1, num2){
        globalResult = num1 + num2; // global variable is called within the function.
        println("The global result is: " globalResult);
    };
    addNumbers(5, 7);
    println(globalResult);

    When running the code above, no error will occur, 
    because globalResult was declared outside of the function, 
    so we can access it wherever we want. 

    Each programming language is different, but Javascript variables have "function scope".
    "Function scope" = a function can see local variables declared inside of it &
    a function can see the global variables that were declared outside of it, 
    but a function cannot see the local variables inside other functions. 
    








*/
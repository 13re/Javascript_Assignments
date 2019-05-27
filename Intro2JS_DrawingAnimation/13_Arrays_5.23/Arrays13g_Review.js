// Arrays - Review

/*  NOTES

Array
    stores lists of values 
    declare a variable, but surround our list of values w/ square brackets & seperate each value with a comma.
    var xPositions = [22, 75, 40];
    var myFriends = ["Billy", "Bob", "Joe", "Junior"];
    array sample: [element, element, element, element];
    *can use a for loop to iterate through each element in an array & do something to each element inside the loop. Start from index 0, go until the end of the array is reached by adding 1 to the index each time. 
        for (var i = 0; i < myFriends.length; i++) {
            text(myFriends[i], 200, (i+1)*100);
        }
    *change the value in an array like this:
        myFriends[1] = "TheErrorBuddy";
    *add new values to an array using the push() method:
        myFriends.push("Hopper");
arrayName.length
    the length property will tell us the current length of the array.
    text(myFriends.length, 200, 200); // Displays "4"
index
    the position to reference/acceess a particular value in an array which
    text(myFriends[0], 200, 0); // Displays "Billy"
zero-based indexing
    *index numbers start at 0: [0, 1, 2, 3]

*/


// lesson: https://www.khanacademy.org/computing/computer-programming/programming/arrays/a/review-arrays
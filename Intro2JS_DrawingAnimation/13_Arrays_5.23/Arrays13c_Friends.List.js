// Friends List

/* This program uses loops + an array to create friend lists */

var myFriends = ["Gowtham", "Teri", "Adam", "Shakthi", "Satish"];

fill(15, 66, 107);
textSize(20);
text(myFriends.length + " Friendly Friends", 20, 30);

// While loop version (blue) 
fill(48, 115, 173);
textSize(16);
var numFriends = 0;
while (numFriends < myFriends.length) {
    text((numFriends + 1) + ". " + myFriends[numFriends], 20, 70+numFriends*30);
    numFriends++;
}

// For loop version (red)
fill(255, 0, 0);
for(var numFriend = 0; numFriend < myFriends.length; numFriend++){
    text((numFriend + 1) + ". " + myFriends[numFriend], 200, 70+numFriend*30);
}

// result: https://i.imgur.com/N5R2cbx.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/arrays/pt/looping-through-arrays
// Modyfying Objects

// PRACTICE: 

var friend = {
    age: 21,
    eyes: "brown",
    likes: ["school", "cooking"],
    isCool: true,
    birthplace: {
        city: "Sacramento",
        state: "California",
    }
};

fill(0, 0, 0);
textSize(24);

// This works, but takes to much to type
friend.age = 22; // changes the value stored in the age property
text("Friend is " + friend.age + " years old", 20, 50);
friend.age = 23;
text("Friend is " + friend.age + " years old", 20, 100);
friend.age = friend.age + 1;
text("Friend is " + friend.age + " years old", 20, 150);
friend.age++;
text("Friend is " + friend.age + " years old", 20, 200);

// This is more efficient
while (friend.age <= 40) {
    text("Friend is " + friend.age + " years old", 20, friend.age*50 - 1000);
    friend.age++; 
    if (friend.age === 28) {
        friend.wife = "Superwoman";
    }
    if (friend.age === 30) {
        friend.twins = ["Frienda", "Friendi"];
    }
}

// lesson: https://www.khanacademy.org/computing/computer-programming/programming/programming/objects/pt/modifying-objects
// Recipe Card

// basic recipe card for "Gluten Free Bread" using objects. 

var glutenFreeBread = {
    title: "Gluten Free Bread",
    servings: 6,
    ingredients: ["Chickpea Flour", "Water"],
};

fill(60, 60, 40);
textSize(20);
text(glutenFreeBread.title, 10, 40);
text("Serves: " + glutenFreeBread.servings, 10, 80);
text("Ingredients: " + glutenFreeBread.ingredients, 10, 120);

// result: https://i.imgur.com/intN4dU.png
// lesson: https://www.khanacademy.org/computing/computer-programming/programming/programming/objects/pc/challenge-recipe-card
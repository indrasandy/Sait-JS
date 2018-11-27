// Day 2 starts on Slide 78

// Slide 81: while Loop
// Write a while loop that gives you the 9 times table, from 9 x 1 = 9 to 9 x 12 = 108.
// Bonus: Try using a loop inside a loop to write all the times tables, from 1 to 12.

var number = 1;

while (number < 13) {
    console.log("9 x " + number + " = " + 9*number);
    number++;
}

// Bonus
var number = 1;

while (number < 13) {
    var counter = 1;
    while (counter < 13) {
        console.log(counter + " x " + number + " = " + counter*number);
        counter++;
    }
    number++;
}


// Slide 83: for Loop
// Write a for loop that gives you the 9 times table, from 9 x 1 = 9 to 9 x 12 = 108.
// Bonus: Try using a loop inside a loop to write all the times tables, from 1 to 12.

for (var i = 1; i <= 12; i++) {
    console.log("9 x " + i + " = " + 9*i);
}

// Bonus
for (var i = 1; i <= 12; i++) {
    for (var n = 1; n <= 12; n++) {
        console.log(n + " x " + i + " = " + n*i);
    }
}


// Slide 85: Logic in Loops
// Write a for loop that will iterate from 0 to 20.
// For each iteration, check if the current number is even or odd, and report that to the screen (e.g. "2 is even", "3 is odd")

for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is odd.");
    }
}

// Slide 87
// Go back to your times table loop. For some reason, you really hate the number 6.
// Break the loop before you print out the number 6.
// Bonus: console.log the phrase "I hate the number 6" before breaking the loop.

for (var i = 1; i <= 12; i++) {
    if (i === 6) {
        console.log("I hate the number 6");
        break;
    }
    console.log("9 x " + i + " = " + 9*i);
}


// Create a movies array with 2 objects that each have 2 properties:
// movie name
// movie rating
// Write a for loop that logs out "I give [MOVIE NAME] [MOVIE RATING] stars" for each movie object in the array.
// "I give Black Panther 5 stars."
// "I give Snowpiercer -16 stars."


var movies = [
    {title: "Black Panther",
    rating: 5 }, 
    {title: "Snowpiercer", 
    rating: -16}
];

for (var i = 0; i < movies.length; i++ ) {
    console.log("I give " + movies[i].title + " " + movies[i].rating + " stars.");
}


// Slide 106
// Go back to your recipe object.
// Create a function that logs out the recipe title and servings.
// Call your new function and pass in your recipe object as an argument.

var recipe = {
    title: "Awesome Cookies",
    servings: 4
}

function describeRecipe(recipe) {
    console.log(recipe.title, recipe.servings);
}

describeRecipe(recipe);


// Slide 108
// Go back to your recipe object.
// Add a function called letsCook that says "I'm hungry! Let's cook..." with the name of your recipe title.
// Call your new method.

var recipe = {
    title: "Awesome Cookies",
    servings: 4,
    letsCook: function() {
        console.log("I'm hungry! Let's cook " + this.title);
    }
}

recipe.letsCook();
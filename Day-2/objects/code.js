// **** Objects*******


var recipe=
{
    recipeTitle: "'My recipe'",
    recipeDescription: 'This is very good recipe and you will like it.',
    ingredients:['oil','salt','flour','tic-gum'],
    direction:'mix all this well and bake in a oven',
    rating: 4,
    cookTime:20,
    letsCook:function(){ console.log('I am hungry! Lets cook ', recipe.recipeTitle)},
    addIngredient: function(newin){ recipe.ingredients.push(newin)},

    displayIngredients: function(){for(var i=0; i<recipe.ingredients.length; i++){
        console.log(recipe.ingredients[i]);
    }

    }

};
//********** Add , change and delete properties************

recipe.serving=02;
recipe.rating=5;
delete recipe.cookTime;


console.log('Your recipe is      ');
console.log('Recipe name :'+ recipe.recipeTitle);
console.log('Recipe description: '+ recipe.recipeDescription);
console.log('cook Time is in mins:'+ recipe['cookTime']);
console.log('Way to cook:   '+recipe['direction']);
console.log('New property- no of serving :    '+ recipe.serving);
console.log('Rating is :  '+ recipe.rating);
console.log('Ingredients are:    ');
for(var i=0; i<recipe.ingredients.length; i++){
    console.log(recipe.ingredients[i]);
}


// **************Passing objects as argument **********

function describerecipe(arecipe){

    console.log('Recipe serving(in function) :', arecipe.serving);
    console.log('Recipe rating(in function) :', arecipe.rating);

}
describerecipe(recipe);

console.log('Calling method   ')
recipe.letsCook();
console.log('Add new ingredient(through methods..)..........')
recipe.addIngredient('Baking soda')
recipe.displayIngredients();
                                                                                                                                                                                                                                                                                                                                         
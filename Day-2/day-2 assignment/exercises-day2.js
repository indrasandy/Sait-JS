'use strict';


// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Problem Set 2");

// Open up index.html in the browser. If you see "Successfully Linked Problem Set 2" on your page, you may continue.

//1. Create an array `numbers` that contains the first 10 decimals of Pi
//(e.g., 1415926535).
var numbers=[1,4,1,5,9,2,6,5,3,5];


   console.log(numbers);



//2. Use bracket notation to change the `4` in the array to a `4.2`.
//console.log the updated array

    numbers[1]=4.2;
    console.log(numbers);

//3. Add the number 3 to the end of the array.
//console.log the updated array
    numbers.push(3);
    console.log(numbers);

//4. Create a function named `sumOfArray` that loops through an array, and returns the sum of all the numbers that are less than or equal to 5
    function sumOfArray(newarr)    
    {
        var sum=0;
        for(var i=0;i<newarr.length;i++){
            if (newarr[i]<=5)
            {
                sum+=newarr[i];
            }
        
        
        }
        return sum;

    }
var result;
result=sumOfArray([1, 4, 1, 5, 5, 5]); 
console.log('Sum of array is  ', result);
console.log('Sum of array is  ', sumOfArray([3, 1, 2, 5, 9.9, 5, 11, 2, 7, 3, 0, 9, 3, 4, 8, 5]));
console.log('Sum of array is  ', sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



/* You can use these to test your function:

sumOfArray([1, 4, 1, 5, 5, 5]); // 21
sumOfArray([3, 1, 2, 5, 9.9, 5, 11, 2, 7, 3, 0, 9, 3, 4, 8, 5]); // 33
sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 15

*/

//5. Create a variable `rect` that represents a rectangle. This should be an Object with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50

var rect={
    x: 30,
    y:50,
    width:100,
    height:50

};
//console.log the rectangle object
    console.log('X cordinate is  ', rect.x);
    console.log('Y cordinate is  ', rect.y);
    console.log('Width  is  ', rect['width']);
    console.log('Height is  ', rect['height']);

//6. console.log the x- and y- coordinates of the rectangle (its location). Your output should have the format `"X, Y"`.

    console.log('"X, Y"', rect.x, rect.y);
   
//7. Set the rectangle's height to be the square root of its width. Use Math.sqrt()
//Use *dot notation* to access the properties!

 rect.height=Math.sqrt(rect.width);

 console.log('Changed height is  ', rect.height);
//8. console.log the rectangle's area (width * height). Use *dot notation* to access the properties!
    console.log('Area of rectangle is ', rect.height*rect.width);

//9. Create a variable `circle` that represents a circle. This should be an object
//with properties
//  `cx` (center-x-coordinate) of 34, 
//  `cy` of 43, and
//  `radius` equal to the LAST value in the (sorted) `numbers` array.





var circle={
    cx: 34,
    cy:43,
    radius: numbers[numbers.sort().length-1]
};
console.log('Sorted array is  ',numbers);
console.log('Radius is  ', circle.radius);

//console.log the circle
console.log('center-x-coordinate ', circle.cx);
console.log('center-y-coordinate ', circle.cy);




//10. Create an array `shapes` that represents a list of shapes. The array should contain the rectangle and the circle objects defined above.

// var shapes= [
//     {cx: 34, cy:43, radius: numbers[numbers.sort().length-1] },
//     {x: 30, y:50, width:100, height:50 }
// ]
var shapes= [rect,circle];

//console.log the variable. Be sure to inspect it in the developer console!
console.log(shapes);

//11. Add a new object to the `shapes` array representing a right triangle.
//The triangle should have a `base` of 33 and a `height` of 44.
shapes.push({tbase: 33,theight:44});

//console.log the updated shapes array
console.log(shapes);


//12. Calculate the hypotenuse of the triangle and assign the value to a 'hypotenuse' property inside the triangle object

shapes[2].hypotenuse=Math.sqrt(Math.pow(shapes[2].tbase,2)+Math.pow(shapes[2].theight,2));



//console.log the `shapes` array again.
console.log(shapes);


// hypotenuse = the square root of (a^2 + b^2)
// use the Math.sqrt() function and the .pow() function
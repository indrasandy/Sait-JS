'use strict';


// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Exercises Day 1");

// Open up index.html in the browser. If you see "Successfully Linked Exercises Day 1" on your page, you may continue.



//1. Define a new variable `quote` for the value "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things."
    var quote ='A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.';

//Log out the quote
    console.log(quote);

//Log out the type of the variable. Is it a string? A number? Something else?

    console.log('Type of quote is ', typeof quote);
//2. Define a variable `quoteLength` that stores the length of the quote.
    var quoteLength= quote.length;

//Log out the length
    console.log(' length of this string is ', quoteLength);


//3. Create a new variable `attributedQuote`. Add the string "- Rear Admiral Grace Hopper" to the end of the `quote` variable with an appropriate space in between.
//This new value should not _replace_ the `quote` variable's value
//Log out the new quote

    var attributedQuote= quote + ' - Rear Admiral Grace Hopper';
    console.log('The new string is ', attributedQuote);

//4. Create a function `attribute` that takes a quote and author and returns the attributed quote.
//Example: Takes "The key to being a successful programmer is to learn how to learn." and "- Shannon Burns" and returns "The key to being a successful programmer is to learn how to learn. - Shannon Burns"
    function attribute(quote, author)
    {
            return quote+author;
    }

    console.log('funtion calling\n', attribute( quote,'- Rear Admiral Grace Hopper'));

//5. Create a function `sumOfNumbers` that takes 2 numbers and returns the sum of those numbers.
         function sumOfNumbers(num1, num2)
         {
             return num1+num2;
         }

         var n1=90;
         var n2=30;
         console.log('The sum of two numbers is', sumOfNumbers(n1,n2));

//6. Create a function `sumOfLowNumbers` that takes 5 numbers and returns the sum of all numbers that are less than or equal to 6.
        function sumOfLowNumbers( n1,n2,n3,n4,n5)
         {
                   var sum=0;
                if(n1<=6)
                {
                                
                        sum+=n1;       
                }
                 if(n2<=6)
                {
                        sum+=n2;
                }
                 if(n3<=6)
                {
                        sum+=n3;
                }
                if(n4<=6)
                {
                        sum+=n4;
                }
                if(n5<=6)
                {
                        sum+=n5;
                }
               
                return sum;
        }

         console.log ("The sum of low numbers ", sumOfLowNumbers(1,7,2,6,8));

//7. Go to https://pages.github.com/ and read through the tutorial to create a Github page.
// Choose Project site, Start from scratch. When you're finished, link your new project page here.



//8. Commit and push this file to your repository. Submit the URL for Assignment 1 on Brightspace.
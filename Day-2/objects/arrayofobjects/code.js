

// *****Array of Objects***********


var movies=[

            {movieName : 'Hero', movieRating: 4},// 1st object
            {movieName: 'American' ,movieRating:3},// 2nd object
            {movieName:'Movie-3', movieRating: 5}// 3rd object

]

for( var i=0; i<movies.length;i++)
{
    console.log('I give', movies[i].movieName ,movies[i].movieRating , 'stars.');

    
}


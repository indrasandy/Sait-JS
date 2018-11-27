
// *********Fetch API *************

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     console.log('Response  is ',response);
//     return response.json();

// })

// .then(function(data){
//     for(var i=0;i<data.length;i++){
//         console.log('Data is ' ,data[i].username);
//     }


// })

// ******using fetch to send data***********

// 1. creat content want to send

var user={
    username: 'Jasdeep',
    id: 678
}

// fetch the URL

fetch('https://jsonplaceholder.typicode.com/users',
{
    method:'POST' ,
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(user)

})
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log('Sent data is' ,data);
    })


    fetch('https://jsonplaceholder.typicode.com/users')// This will run first.
    .then(function(response){
        // console.log('Response  is ',response);
        return response.json();
    
    })
    
    .then(function(data){
        for(var i=0;i<data.length;i++){
            console.log('Data is ' ,data[i].username);
        }
    
    
    })
// **********same thing using function**********


//     fetch('https://jsonplaceholder.typicode.com/users',
// {
//     method:'POST' ,
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify(user)

// })
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log('Sent data is' ,data);
//     })



// ******handle  the error*******

fetch('https://jsonplaceholder.typicode.com/404')

.then (function(response){
    console.log('Response is  ',response);

    if(!response.ok){
        throw Error(response.statusText);
    }
    return response.json();

})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('Error is   ', error);
})






// *********Github API************

fetch('https://api.github.com/users/jasdeepsidhu2')// This will run first.
    .then(function(response){
        console.log('Response  is ',response);
        return response.json();
    
    })
    
    .then(function(data){
        // for(var i=0;i<data.length;i++){
        //     console.log('Data is ' ,data[i].username);
        // }
    
        console.log('Data 1 is ' ,data);
    })



    fetch(' https://api.github.com/users/jasdeepsidhu2/repos')
    .then(function(response){
        // console.log('Response  is ',response);
        return response.json();
    
    })
    
    .then(function(data){
        for(var i=0;i<data.length;i++){
            console.log('Repos  Data is ' ,data[i].name);
        }
    
        // console.log('Data is ' ,data);
    })

   
// **********Web Storage*******

// ****set data*****
localStorage.setItem("username",'Jasdeeeeep'); //key /value pair and one method for store with spaces.
localStorage.firstName='Jasdeep New';//Second method

console.log(localStorage.username);
console.log(localStorage.firstName);

// ****get data**********

var name=localStorage.getItem('username');
var newName=localStorage.firstName;

console.log(name , 'and' , newName);

// *********remove data*****

localStorage.removeItem('username');
localStorage.username=null;



// localStorage.clear();  //clear all data 

// var name=localStorage.getItem('username');

// console.log(name , 'and' , newName);


// ***********usage of local storage**********

var button=document.getElementById('submit');
button.addEventListener('click' , function (e){
    e.preventDefault();

    var name=document.getElementById('name').value;
    // console.log('name is   ', name);
    localStorage.username=name;
    console.log('local is  ',localStorage.username);


})




// ************Events***********

// ******function call from html**********

function sayHi(){


    alert('Hellooooooooooooooooooooo');
}

// ******function call from javascript **********


var myButton=document.getElementById('mybutton');
var sayHi=function (){
    alert('Hello');
}
myButton.addEventListener('click',sayHi);


// ********Another Event*********


var sayHiMouse=function (){
    document.write('Hello mouseover');
}
 function sayMouseOut(){
     document.write('Mouse Out');
 }

 var link=document.getElementById('mylink');
 
// myButton.addEventListener('mouseover',sayHiMouse);

// link.addEventListener('mouseout',sayHiMouse());


// *******Prevent default behaviour*********


// var link=document.getElementById('mylink');
// link.addEventListener('click', function(event){
//     event.preventDefault();  //link is  stopped now
// })



// ******Current Target**********


myButton.addEventListener('click', function(event){

    var btn=event.currentTarget;
    btn.style.backgroundColor='red';

})

link.addEventListener('click', function(event){

    var newLink=event.currentTarget;
    newLink.href='https://www.google.ca';

})
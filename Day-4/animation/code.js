
// **** make a square********


var mydiv=document.getElementsByClassName('mydiv')[0];
mydiv.style.height='300px';
mydiv.style.width='500px';
mydiv.style.backgroundColor='lightblue';

mydiv.style.position='absolute';
mydiv.style.left='100px';
mydiv.style.top='100px';

mydiv.style.border='5px solid blue';
var text=document.createTextNode('Start');
// text.style.color='red';
// text.style.fontSize='4em';
// mydiv.appendChild(text);


// *****Settime out , cleartime out and setinterval***********

function doThisLater(){
    alert("Time's up");

}

var button=document.createElement('button')
button.appendChild(text);
mydiv.appendChild(button);

var timerId=setTimeout(doThisLater,3000);

button.addEventListener("click", timerId)
// setTimeout(doThisLater,3000);


clearTimeout(timerId);  //stops the settimeout


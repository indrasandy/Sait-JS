// Code submitted by : Indrajeet Sandhu
// Course : CPNT-262-WBD - Web Client & Server Prog.
// Date : 19-October-2018
// Assignment : JavaScript Website



// Plane animation

$(document).ready(function() {
  var plane = $('#plane');
  var screenWidth = $(document).width();
  var startPos = screenWidth;
  
    function flyPlane() {
      plane.css('left', startPos);
      plane.animate({left: -200}, 9000, 'linear',flyPlane);
    };
  
    flyPlane();

   });

// Footer Date function

    function getMonthName(monthnumber) {
        var monthname = ["January", "February", "March", "April", 
                        "May", "June", "July", "August", "September", 
                        "October", "November", "December"];
        return monthname[monthnumber];
    }

    function currentdate() {
      var mydate = new Date();
      var month = getMonthName(mydate.getMonth());
      var date = mydate.getDate();
      var year = mydate.getFullYear(); 
      return (month+' ' + date+'  ' +  year)  ;
     
    }
          
var data=currentdate();
var p=document.getElementById("printdate");
p.innerHTML = data;


// Contact Page

(function contactList(){
  var agentNames =['xyz','abc ', 'def','xxx','xlm','azq'];
  var agentTelNum=['123-456-7890','123-456-7890','123-456-7890','123-456-7890','123-456-7890','123-456-7890'];
   for( let i=0; i<agentNames.length;i++) {
      var nameList=document.getElementById('agentList');
      var listItem=document.createElement('li');
      listItem.className='listItem';
      listItem.innerHTML='Agent Name :  '+ agentNames[i] + "  "   +  'Tel '+ agentTelNum[i];
      nameList.appendChild(listItem);
  }
})(); 


// Mobile menu

var menu = document.getElementById('mobile-container');
var open = document.getElementById('open-mobile');
var close = document.getElementById('close-mobile');

function openMenu() {
    menu.className = 'mobile-container open';
}

function closeMenu() {
    menu.className = 'mobile-container';
}


open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);


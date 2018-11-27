

// *****Detect the geolocation feature and add elemnets*********
var pageBody=document.getElementsByTagName('body')[0];


var image=document.createElement('img');

if(Modernizr.geolocation) {  
    //  if (typeof Modernizr.geolocation!='undefined') {
    image.src='http://www.placepuppy.net/400/250';
    console.log('Very good');
 } 
 
 else {

       
        image.src='http://www.placepuppy.net/400/250';
      
     alert("The geolocation is not supported by your browser");
  }

  pageBody.appendChild(image);



  console.log('History length  ',history.length);

    if (history.length===1)
    {
            pageBody.style.backgroundColor='lightblue';
    }
    else{
            pageBody.style.backgroundColor='coral';
    }

// *******Style heading*******
  var heading=document.getElementById('heading');
  heading.style.color='red';
  heading.style.marginTop='100px';

//********* */ More Styles/    style the list in nav***********


var lists=document.querySelectorAll('li');
var links=document.getElementsByClassName('links')[0];

for(var i=0;i<lists.length;i++)
{

    lists[i].style.listStyleType='none';
    if(i%2===0){
        lists[i].style.backgroundColor='yellow';

    }
    else{
        lists[i].style.backgroundColor='lime';
    }
}
links.style.display='flex';
links.style.justifyContent='space-around';
links.style.marginTop='50px';


pageBody.style.textAlign='center';

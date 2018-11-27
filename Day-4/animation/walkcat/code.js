

// *********walking Cat*************

/*var walkForward=true;

function catWalk()

{
    var img =document.getElementById('cat');
    var currentLeft=parseInt(img.style.left);
 

    if(walkForward && (currentLeft > (window.innerWidth - img.width)))
    {

        walkForward=false;
    }
    if(!walkForward && currentLeft<=0)
    {

        walkForward=true;
    }
    if (walkForward)
    {
        img.style.left=(currentLeft + 10) + 'px';

    }
    else
    {
        img.style.left=(currentLeft - 10) + 'px';
    }



}

setInterval(catWalk,50);  */



// **********Modified code  and local storage   **************

var direction='forward';
console.log('local  ', localStorage.catLocation);

    // var img =document.getElementById('cat');
    //    img.style.left=currentLeft;
     var currentLeft=parseInt(localStorage.catLocation);

function catWalk()

{
    var img =document.getElementById('cat');
    //  var currentLeft=parseInt(img.style.left);

    

     console.log('storage is   ', currentLeft);
    

    if((direction==='forward')&&(currentLeft < (window.innerWidth - img.width)))
    {
        
        direction='forward';
    }
    if(currentLeft > (window.innerWidth - img.width))
    {
        direction='backward';
    }
    if(direction==='backward' && currentLeft<=0)
    {
        // document.write('second');
        direction='forward';
    }
    if (direction==='forward')
    {
        img.style.left=(currentLeft + 10) + 'px';

    }
    else
    {
        img.style.left=(currentLeft - 10) + 'px';
    }
    currentLeft=parseInt(img.style.left);
    localStorage.catLocation=currentLeft;


}
// catWalk();

setInterval(catWalk,150);  
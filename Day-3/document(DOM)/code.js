

//**********DOM************ */

// ****by ID*********

var header=document.getElementById('header');
console.log('Header element in document  is   ',header);

// ****by tag name********


var listitems =document.getElementsByTagName('li');

for(var i=0;i<listitems.length;i++)
{

console.log('list item is   ', listitems[i]);
}

// *****by classname*************

var list =document.getElementsByClassName('nav-item');
for(var i=0;i<list.length;i++)
{

console.log('list item is(by class name)   ', list[i]);
}

// ****by query selectors***********

var firstItem=document.querySelector('li');
console.log('First item by query selector is   ', firstItem);
var lists=document.querySelectorAll('li');

for(var i=0;i<lists.length;i++)
{

console.log('list item is(by query selector)   ', lists[i]);
}
 


var exampleId= document.querySelector('#header');
var exampleClass=document.querySelectorAll('.nav-item');

console.log('Example of another way  ', exampleId);
console.log('Example of another way  ', exampleClass);//use for loop.


// ***** manipulating the classes*******


// console.log('list list / class list', list[0].classlist);

// *********getelement and getelements************

var item=document.getElementsByTagName('p')[1];//getelements retuns a array.
console.log('Paragraph tag on second position  ',item);


var image=document.getElementById('image');

// *********one method*********

// image.src='./../images/img2.jpg';



// ******second method***********

image.setAttribute('src','./../images/img2.jpg');



// *********use of styles *********

var pageBody=document.getElementsByClassName('body')[0];
pageBody.style.backgroundColor='pink';
pageBody.style.color='red';
pageBody.style.textAlign='right';
 

lists[0].style.listStyleType='none';
lists[1].style.listStyleType='none';
lists[2].style.listStyleType='none';
lists[3].style.listStyleType='none';


// **********Change and add innerHTML property********


lists[0].innerHTML+='<li> new list item</li>';


var item= document.getElementById('header');
// item.innerHTML='<h2> oh no</<h2>';
 
item.innerHTML+='<p> Wow you add one more thing.....';


// ***********Creating elements************


var myDiv=document.getElementById('main');
var newPara=document.createElement('p')
var newText=document.createTextNode('This is new paragraph');
newPara.appendChild(newText);

myDiv.appendChild(newPara);
// pageBody.appendChild(document.createTextNode('New thing'));
// **merge all together****
pageBody.appendChild(document.createElement('p').appendChild(document.createTextNode('New new thing')));
   


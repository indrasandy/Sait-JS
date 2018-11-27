// *********Forms Elements***********

var myFormNew=document.getElementById('userform');//example of get a form in variable


var formList=document.forms;
var firstForm=document.forms[0];

//var myForm=document.myForm  //Get form by name
console.log('form is   ', firstForm);


var pwd=document.myform['password'];   //myForm from document 

console.log('password is    '+ pwd);

var radio= document.myform.married.value;
 console.log('Radio is   ' ,radio);

console.log(' Type is   ' ,document.myform.password.type);


// document.myform.username.focus();  // direct from the document

firstForm.username.focus(); //use variable

// firstForm.username.blur(); //remove the focus.


// *******check boxs***********

var checkBoxList =document.myform.interest;

console.log('Check lists   ', checkBoxList);


for(var i=0;i<checkBoxList.length; i++)
{
    if(checkBoxList[i].checked)
    {

        console.log('Values are  ', checkBoxList[i].value);
    }
}
// ******submit button**********

var submitButton=document.myform.submit;
// submitButton.addEventListener('click' ,function (event){
//     event.preventDefault();
//     var marriedValue=document.myform.married.value;
//     alert('You are married  '+ marriedValue);
//     alert('Other is  '+document.myform.username.value);
    
// })


// ******custom validation********

var submitButton=document.getElementById('submit');
var errorName=document.getElementById('errorname');
var errorAge=document.getElementById('errorage');
var errorAgeYoung=document.getElementById('errorageyoung');

submitButton.addEventListener('click' , function(event){
   
    errorName.style.display='none';
    errorAge.style.display='none';
    errorAgeYoung.style.display='none';

    var name=document.form1.username.value;
    var age=parseInt(document.form1.txtage.value);

    if(!name){
        
        errorName.style.display='block';
        
    }
    if((!age)||(age<18)){
        event.preventDefault();
        if(!age){
                    errorAge.style.display='block';
                }

        else
        {
            errorAgeYoung.style.display='block';

        }
    }
})

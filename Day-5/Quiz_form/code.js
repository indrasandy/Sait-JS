// *********quiz***********


var answer1= 'b';
var answer2='b';
var answer3= 'b';
var answer4=['Printers','CopyMachines'];
var answer5=2;
var submit=document.getElementById('submit');
var checkBoxList=document.myForm.question4;

var score=0;
var checkAnswers=function(event){
event.preventDefault();

if( document.myForm.question1.value===answer1)
{  
    score++;
    console.log('Right 1  ' + score);
}
if(document.myForm.question2.value===answer2)
{
    score++;
    console.log('Right 2  ' + score);
}
if(document.myForm.question3.value===answer3)
{
    score++;
    console.log('Right3  ' + score);
}

for(var i=0;i< checkBoxList.length;i++)
{
    
    

    if(checkBoxList[i].checked)
    {
      if(checkBoxList[i].value===answer4[0] || checkBoxList[i].value===answer4[1])  
    {
        score++;
        
    }

}
}

if(document.myForm.question5.value==answer5)
{
    score++;
    
}
alert('You get  ' + score + '  score out of 7'  );


}


submit.addEventListener('click', checkAnswers)


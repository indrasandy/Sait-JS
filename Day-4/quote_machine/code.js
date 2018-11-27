
// ********* Quote Machine*************

var quote1={
    description:'Very little is needed to make a happy life it is all within yourself, in your way of thinking.',
    author:'--Marcus Aurelius'
};

var quote2={
    description:'Believe that life is worth living and your belief will help create the fact.',
    author:'--William James'
};
var quote3={
    description:"Share your smile with the world. It's a symbol of friendship and peace.",
     author:'--Christie Brinkley'

};
var quote4={
    description: 'For every minute you are angry you lose sixty seconds of happiness.' ,
    author:' ― Ralph Waldo Emerson'
    
}
var quote5={
    description:'Life is a series of natural and spontaneous changes. Don’t resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.',
    author:'―  Lao Tzu'
}

var quotes=[quote1,quote2,quote3,quote4,quote5];

// **********Just display all quotes on console for reference*****************
for(var i=0; i<quotes.length;i++)
{
    console.log( quotes[i]);

}

var mainDiv= document.getElementsByClassName('main')[0];
var q1=document.getElementById('paragraph');
var a=document.getElementById('author');

q1.innerHTML=quotes[0].description;
a.innerHTML=quotes[0].author;

var i=0;

function change(event){
    
    q1.innerHTML=quotes[i].description;
    a.innerHTML=quotes[i].author;
    i++;

    if(i===quotes.length){
       i=0;
    }
      
     console.log("a is ", a.textContent);

}

change();
setInterval(change,3000);



// ***********Next and previous buttons**********************

var index=quotes.findIndex(function(element){return element.author===a.textContent});

var back=document.getElementById('backbutton');
var next=document.getElementById('nextbutton');
var nextQuote=function (event){
    if(index===quotes.length-1)
    {
        index=0;
    }
    else{
        index++;
    }
        q1.innerHTML=quotes[index].description;
        a.innerHTML=quotes[index].author;
    

}
var lastQuote= function(event){
    if(index==0)
    {
        index=quotes.length-1;
    }
    else
    {
        index--;
    }
    q1.innerHTML=quotes[index].description;
    a.innerHTML=quotes[index].author;
    


}
back.addEventListener('click',lastQuote);
next.addEventListener('click',nextQuote);

// ************Tweet the quote***********8

// console.log(' quote is '+ q1.innerHTML);

var index=quotes.findIndex(function(element){return element.author===a.textContent});



var link=document.getElementById('tweet');
 var href="https://twitter.com/intent/tweet?text= " +  quotes[index].description + quotes[index].author;
 link.href=href;

console.log(href);

 
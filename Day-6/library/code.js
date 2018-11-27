// **********library**********
// ************Math libary***********
console.log(Math.sqrt(16)); //use javascript math method
console.log(math.bignumber(0.1));// use external math library
console.log(math.number(true));

// ************jquery************

// ************getting elements************

console.log(' tags are   '  ,  $('#main'));
console.log(' next tags are   '  ,  $('a'));

// *********getting and changing elements*********

$('#a1').html('Yahoo');
$('a').attr('href','#');
$('#a1').css({'color':'red'});

// **********looping**********
// ******document ready*********

$(document).ready(function(){
 
var links= $('a');
 
links.each(function(){
    var link=$(this);
    link.text(link.text()+ '!');

})
});
  function loopPara()
  {
    var para=$('p');
    para.each(function(){
        var paraNew=$(this);
        paraNew.css({'font-size':'30px'});

    })
  }

var d=$('div');
d.each(function(){
    var d=$(this);
    d.addClass('good');
})

$(function(){
    loopPara();  // second method for ready function 

})
// ***********button click***********

$('button').on('click', function(){

    alert('Button Clicked     ');
})

// *******Event Object**********


$('a').on('keypress', function(event){

        console.log('Event is        '    , event);
        console.log('Event which is  ', event.which);
        console.log('Event target is ', event.target);
    
});

// *******prevent submitting**********
$('form').on('submit', function(){
    event.preventDefault();
    alert('no submitted ');
})


// ************effects and animation***********

// $('#error').toggle(3000);
// $('#error').hide();
// $('#error').fadeIn(1000);
// $('#error').show(4000, function(){
//     $(this).addClass('alert');

// });


$('#square').animate({
        opacity:0.25,
        left:'+50' }, 2000 ,function(){
            console.log('Good ');
        }
)
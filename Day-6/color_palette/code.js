
// ******color palette**********



$('#myButton').on('click',function(event){
    event.preventDefault();
    $('.paletteDiv').html(''); //to clear last pallete

var numberOfcolor=$('form #number').val();
var hue=$('form #hue').val();
var lum=$('form #luminousity').val();
var color=randomColor({count:numberOfcolor , hue:hue, luminosity:lum});
console.log('Color is   ', color);
// alert('Button Clicked     ');

    $.each(color,function(index, value)
    {
        // var color=$(this);
        var palette=$('<div class=colorBox></div>')
        
        palette.css({'background-color':value });
        $('.paletteDiv').append(palette);
        // $('.paletteDiv').show();

        
    
    })



})

// console.log('Number of colors   ', numberOfcolor);
// $('.palette').
// $('.colorBox').each(function(){
//     var box=$(this);
//     var color=randomColor();
//     box.css({'background-color':color});

// })
    
    
// var newImg=$('<img src=' + thumbnail + ' alt="image">');
// link.append(newImg);
    
    




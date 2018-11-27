
// ***** youtube exercise**************

// var videoLinks=document.querySelectorAll('a');
// console.log('links are   ' + videoLinks[0]);

// for(var i=0;i<videoLinks.length;i++)
// {
//     var href=videoLinks[i].getAttribute('href');
//     var thumbnail=youtube.generateThumbnailUrl(href);
//     var img=document.createElement('img');
//     img.setAttribute('src' , thumbnail);
//     videoLinks[i].appendChild(img);
// }


// ***********jquery example************

var videoLinks=$('a');

videoLinks.each(function()
{

    var link=$(this);
    var href= link.attr('href');
    var thumbnail=youtube.generateThumbnailUrl(href);
    // var thumbnail='https://www.google.ca';
    // link.attr('href', thumbnail);
    var newImg=$('<img src=' + thumbnail + ' alt="image">');
    link.append(newImg);

    







});
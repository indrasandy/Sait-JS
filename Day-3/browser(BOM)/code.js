// **********Browser  information**********
console.log('Your browser information...........');
console.log(navigator.userAgent);
console.log(navigator.vendor);
console.log(navigator.platform);


// *********Geolocation*************
function success(position)
{
    var lati=position.coords.latitude;
    var longi=position.coords.longitude;
    var alti=position.coords.altitute;
    var speed=position.coords.speed;
    document.write('longitute is  ', longi);
    document.write('latiitute is  ',lati);
    document.write('speed  is  ',speed);
    console.log('longitute is  ', longi);

}
function geoError(errobj){
    alert("something wrong");
}


if (navigator.geolocation){    // if (typeof navigator.geolocation!="undefined")
     
        navigator.geolocation.getCurrentPosition(success, geoError);

}

else
{
     alert("Geolocation features doesn't exit" );
}

// navigator.geolocation.getCurrentPosition(success);

// navigator.geolocation.getCurrentPosition(success, geoError);


// **********screen object**********

console.log('Your screen  information...........');
console.log('Screen height is  ' ,screen.height);
console.log('Screen width is    ', screen.width);
console.log('Screen colordepth is    ', screen.colorDepth);
console.log('Screen orientation is    ', screen.orientation);

//********document object********** */


// document.bgColor='red';

document.bgColor= ' #ff6f';


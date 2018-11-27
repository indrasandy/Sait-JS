
// ****display date and time in seconds**********


function myDateTime(){

    // var date=new Date();

    document.getElementById('output').innerHTML=new Date;
    
    // document.write(new Date()); 
}

// setInterval(new Date,1000);

setInterval(myDateTime,1000);

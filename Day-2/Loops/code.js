var i=1;
var product;
var num=1;


//************ table of num************

/*while(i<=12)
{
    product=i*num;
   
    console.log(num + ' * ' + i+  ' ='+ product +  '\n');
    i++;
}*/



// ************tables of first 12 numbers**********

/*while(num<=12)

{
        var i=1;
        while(i<=10)
        {
            product=i*num;
            console.log(num + ' * ' + i +  ' ='+ product +  '\n');
            i++;
        }
    num++;
}*/



// **********for loops********************


num=7;
for( var i=1;i<=10;i++)
{
    product=i*num;
    console.log(num + ' * ' + i +  ' = '+ product +  '\n');
}


console.log("\nNesting for loops\n\n");


for(var num=1;num<=10;num++)
{
    
    for(var i=1;i<=10;i++)
    {        
           product=i*num;
           console.log(num + ' * ' + i +  ' = '+ product +  '\n');
    }
}

//  *****Break the loop at 6*************

console.log("******* Break Statement****");


for(var num=1;num<=10;num++)
{
    if(num ===6)
    {
        console.log(" I hate number 6");
        break;
    }
    
    for(var i=1;i<=10;i++)
    {        
           product=i*num;
           console.log(num + ' * ' + i +  ' = '+ product +  '\n');
    }
    
}



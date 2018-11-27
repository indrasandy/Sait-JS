


var temperature =prompt('What is temperature(in degree)');
var hasAHoliday= prompt('Is today holiday 0/1');
// var hasAHoliday= 1;

if(temperature<=-20 && hasAHoliday)
{
    console.log("1.  So cold!!!!! stay inside");
}
else if(temperature<=0 || hasAHoliday)
{
    console.log('2. Please wear a coat and a hat and go out......');

}
else if(temperature<=10 && hasAHoliday)
{
    console.log('3. Please wear a coat and go out');

}
else if(!hasAHoliday)
{
    console.log('Go for work');
}
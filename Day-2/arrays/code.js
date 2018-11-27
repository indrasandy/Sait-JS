// *******Array***********



var myFoods=['vegetables','salad','chat','sandwitch'];
var l=myFoods.length;


console.log('Array was \n\n')

for(i=0;i<myFoods.length;i++)
{
    console.log( myFoods[i]);
}


console.log('\nlength of arrray is', l);
console.log('3rd item is',myFoods[2]);
console.log('**change it...');


console.log('\nNew Array is \n');
myFoods[2]='Apples';

for(i=0;i<myFoods.length;i++)
{
    console.log( myFoods[i]);
}


myFoods.push('Oranges');
console.log('\nNew Array is(after one more item) \n');
for(i=0;i<myFoods.length;i++)
{
    console.log( myFoods[i]);
}

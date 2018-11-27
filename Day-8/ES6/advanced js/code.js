

// ************ES6 and advanced JS************

for(var i=0;i<=2;i++)
{
    console.log("scope of i :", i);

}
console.log("scope of i  out:", i);
for(let j=0;j<=2;j++)
{
    console.log("scope of j  :", j);
    
}
// console.log("scope of j is not out  :", j);

var condition=true;
if(condition){
    let a='jasdeep';
    console.log(a);

}
// console.log(a);//undefined

const ARR=[1,2,3];
const OBJ={id:1,name:'Jasdeep'};
ARR.push(4);
console.log('Array is  ',ARR);
OBJ.id=2;
OBJ.name='jas';
console.log('Object Array is  ',OBJ);



// ************scopes of variables************

const funcs=[];
 for(let i=0;i<3;i++){

    funcs.push(function(){
        console.log(i);

    })


    for (let  j=0;j<funcs.length;j++)
    funcs[j]();


 }
 console.log(funcs);

//  *******arrow functions  *******


const getMassage=name=>'hello' + name +'!'; // short method for small functions and one parameter

// const sum =function (n1,n2)
// {
//     return n1+n2;

// }

const sum = (n1,n2)=>n1+n2;
    
    console.log('sum is   ',sum(2,5));

const fib=n=>{
    if(n<3)
        { return 1;}
    
    return fib(n-1)+fib(n-2);
}
console.log(" fibinacci is   ",fib(9)); 


// **********default parameters*********]

let multiply= (a,b=1)=>{
    if(!a){
        throw Error('Whoops!! need at least one parameter ');
    }
    return a*b;
}
console.log('Multiplication is   ', multiply(10),  multiply(10,30));
// console.log( multiply();


// *******short method to access the array********

let arr=[8,6,7,9];
let arrString=['b','h','l'];

for(let val of arr)
{
    console.log('Array is  ',val);
}

for(let val of arrString)
{
    console.log('Array is  ',val);
}

// **************rest and spread oprator*********

let creatArray=(n1,...arr)=>{
    console.log('Rest  is  ',arr);

}
creatArray(10,20,30,40,50);

let creatList=(n1,...list)=>{
    console.log('Spread  is  ',list);

}
creatList(100,[10,20,30,40,50]);

// **********example of ...  oprator*********

let product=(...arr)=>{

    {
        return (arr.reduce((currentProduct,num)=> currentProduct*num,1));//how reduce works
    }

}
console.log("Product is  ", product(1,3,3));
console.log("Product is  ", product(1,3,3,6));
console.log("Product is  ", product(1,3,5,1,2));

// *********template lterals***********


const user ={
    name:'copy',
    loginCount:1,
    goldStatus:true
};

const className='container';
// const html= '<div class="' + className +'">' + '<h2>welcome' + (user.goldStatus?'to our gold member,':',')  + user.name + '!' + '</h2'
// + '<p> you have logged in' + ++user.loginCount +'times. </p>' + '</div>';

// document.getElementById('target').innerHTML=html;

// **********use template literals  for above***************
// No working for now--------


// const html= `<div class= ${className} > <h2>welcome ` ${user.goldStatus}? 'to our gold member':,) ${user.name} ! </h2 <p> you have logged in  ++${user.loginCount} times. </p> </div>`;

// document.getElementById('target').innerHTML=html;

// ************descructuring an array***********

const points =[10,20,30];

const [x,y,z]=points;
console.log("x,y,z values are  ", x,y,z);


// ************descructuring an object***********

const car ={
    type:'toyota',
    model: 2005

};
const {type,model}=car // variables names should same
console.log('type is  ', type);

// **** Example************

const myEmployee={
    active:true,
    depart:'engin'
};

function isActive(employee){
const {active, depart}=myEmployee;
return depart==='engin'&& active ;

}

console.log(`is employee    ${isActive(myEmployee)}`);    //literals

// ********more methods on array*********

// *******for each**********
const trips=
[   {mph:30,hours:3},
    {mph:20,hours:2},
    {mph:50,hours:4}
];

trips.forEach((name,index,array)=>{  //extra parameters .....use if you need no need to pass every time...
    console.log("elements are   ", name.mph* name.hours);
    console.log("index is   ", index);
})

// ***Every/Each  ******************

const availLaptop=[

    {name:'mac', RAM: 8},
    {name:'asus', RAM: 32},
    {name:'lenovo', RAM: 16},
    {name:'hp', RAM: 4}

];

const all16gb=availLaptop.every(laptop => laptop.RAM>=16);
console.log('Every ooutput ',all16gb);

const some16gb=availLaptop.some(laptop=>laptop.RAM>=16);
console.log('some is', some16gb);
    
// *************filter **********

const groceries=[
    {name:'bananas', price:9},
    {name:'apples', price:5},
    {name:'oranges', price:4},
    {name:'pears', price:10},
    {name:'cherries', price:2}
];

const lessThan5=groceries.filter(item=>item.price<=5);

console.log('filtered array is    ', lessThan5);

// *************map ****************

const tripsNew=
[   {miles:30,hours:3},
    {miles:20,hours:2},
    {miles:50,hours:4}
];

const speeds= tripsNew.map(item=>item.miles/item.hours);

console.log('New mapped array is   ',speeds);

// ************find ******
const posts = [
    { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sit amet...'}
  ];


const currentId = 29;
const currentPost = posts.find(item=>item.id=29);
console.log('find item is '  ,currentPost);
console.log('find item is '  ,currentPost.title);
console.log('find item is ',currentPost.body);

// ***********reduce *************

const transactions=[4,5,7,8];

const sumNew=transactions.reduce((currentSum,item)=> {console.log(currentSum+item);
    return currentSum+item},0);//print each sum value
console.log('value is   ', sumNew);

// reduce((currentProduct,num)=> currentProduct*num,1));
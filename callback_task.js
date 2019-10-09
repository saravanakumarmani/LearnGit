// 1. This block performs calls the callback function after the n seconds
var 
add
=
5;
console.log(add);

function statement1(callback){
    console.log("first statement");
    setTimeout(statement2,5*1000); //5 seconds waits to execute the function 2
}

function statement2(){
    console.log("Second statement");
}

let callbackAfterCoupleOfSeconds=function(){
    console.log("inside functions");
    statement1(statement2);
}

// callbackAfterCoupleOfSeconds();

/*  2.  Operations 
        1.segregate odd and even
        2.Merge Array
        3.calculate Mean
*/

function segregateOddEven(arr,callback){
    let odd=[]
    let even=[]    
    arr.map(function(x){
        (x%2==0?odd.push(x):even.push(x));
        })
        console.log("segregated array: "+odd+" "+even);
    callback(odd,even,meanCalculator);
}

function mergeArray(x,y,callback){
    console.log("x array :"+x)
    console.log("y array :"+y)
    x.push(y);
    console.dir(x);
    try{
        x=x.flat();
    }
    catch(error){
        console.log("call back error: "+error);
    }
     // converted to linear array
    console.log("converted array:"+x);
    callback(x);
}

function meanCalculator(x){
    x.reduce(function(total,value){return total+value},0)
    console.log("Mean Value is : "+x.reduce((total,value)=>total+value)/x.length);
}

let arr=[1,2,3,4,5,6,7,8,9,10]
// segregateOddEven(arr,mergeArray);


// Example for Promise 

user=["user1","user2"]
let add = (name)=> {
    return new Promise((resolve,reject)=>
        {
            setTimeout(function(){
            user.push(name);
            resolve(console.log(`user ${name} added`));
            },3000);
        }
        )
    }

let get = () => {
    return new Promise((resolve,reject)=>
        console.log(`users: ${user}`)
        // resolve(console.log(`users: ${user}`));
        );
    }
    
add("saravana").then(()=>{console.log(); get()}).catch();


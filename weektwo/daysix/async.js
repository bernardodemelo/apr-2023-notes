/* // Synchronous and Asynchronous Behaviours

// JavaScript is a synchronous 
// Programming Language with asynchronous behaviours. 

// Sync and Async

// Sync Behaviours - Real Life

// 1) Turn On My Computer; 
// 2) Open the Terminal; 
// 3) Go to Notes Directory; 
// 4) Create a JS file;
// 5) Write our favourite Programming Ice-Breaker: 
// console.log('Hello World!');

// Synchronous behaviour means that I do this tasks step-by-step.


// Async Behaviours - Real Life:

// Uber Eats Dinner

// 1) Ask Food; 
// 2) Organize Room. 
// 3) Dress; 
// 4) Put a fancy, sweet perfume;

// Asynchronous behaviour means that I don't need to do this tasks step-by-step.
// in this example, while I'm waiting to get my food from UberEats, I can organize 
// my room, dress and put a fancy perfume. 


// TODO: let's recreate Hell's Kitchen. 

// Our today's tasks are:
// 1) Grill salmon - takes 5 seconds to do it; 
// 2) Cook rice - takes 10 seconds to do it;
// 3) Wash the dishes;

// STEP 1: Accomplish Tasks

let counterSalmon = 0;
function grillSalmon(){
    // setInterval calls an anonymous function
    // repeteadly with a fixed delay between
    // each call
    const grilling = setInterval(function(){
        counterSalmon ++; 
        console.log(`Salmon grilling time: ${counter}`);
        if(counterSalmon === 5){
            clearInterval(grilling);
        }
    }, 1000); // 1000 ms = 1s;
}; 

function cookRice(callback){
    // Variable Declaration
    let counter = 0;
    if(counterSalmon === 5){
    const cooking = setInterval(()=>{
        counter ++;
        console.log(`Rice cooking time:${counter}`);
        if(counter === 10){
            clearInterval(cooking);
            callback();
        }
    }, 1000) // We write the delay of each call here. 
    // In this case is 1000 ms = 1 second. 
    // It will happen 1 second at a time.
}
};

function washDishes(){
    return console.log('Washing the dishes');
}

grillSalmon();
cookRice(washDishes); // Callback


// STEP 2: Punishment ROOM
const waitInDarkRoom = (func1) =>{
    // setTimeOut() executes a function once 
    // after a fixed delay of time.

    const punishment = setTimeout(()=>{ 
       func1();
       clearTimeout(punishment);
    },1000);
}

function cookPasta(){
    return console.log('Cooking Pasta');
}

waitInDarkRoom(cookPasta);


// TODO: create a function secondsCounter
// that returns a console.log() of seconds
// already passed since the call of the
// function;

// If it passsed a minute, the seconds' 
// console.log()should come back to 0
// and iterate again to 60.

// However, you should stop console.log()
// after 1 minute and 5 seconds (65s).

// We should return the seconds' value as 
// a string and not as a number

// Modulo Operator Recap
//console.log(1%60); // 1
//console.log(2%60); // 2
//console.log(60%60); // 0
//console.log(61%60); // 1

function minutesAndSeconds(){
    // Variable Declaration
    let seconds = 0;

    // setInterval to count seconds
    const startWatch = setInterval(function(){
        // Increment Counter
        seconds++;
        if(seconds === 65){
            clearInterval(startWatch);
        }
        return console.log((seconds%60).toString());
    }, 1000)
}

minutesAndSeconds();
*/


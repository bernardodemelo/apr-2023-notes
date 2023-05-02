// "If you wait ten seconds, I'll teach you ReactJS"

// Creating a Promise 

// 1) Resolve
/*
let counter = 0;
const reactSuccessPromise = 
new Promise(function (resolve, reject){
    const countToTen = setInterval(()=>{
        if(counter < 10){
            counter ++; 
            console.log(counter);
        } else if(counter === 10){
            resolve("It's time for React!");
            clearInterval(countToTen);
        }
    }, 1000)
})

// Giving Feedback about Promise - consuming the Promise
reactSuccessPromise.then((val)=> console.log("fulfilled:", val),
(err)=> console.log("rejected:", err));
*/


/*
// 2) Reject

// Creating the Promise
let counter = 0;
const reactSuccessPromise = 
new Promise(function (resolve, reject){
    const countToTen = setInterval(()=>{
        if(counter < 10){
            reject('Ooops!');
        }
    }, 1000)
})

// Consuming the Promise
reactSuccessPromise.then((val)=> console.log("Fulfilled", val), 
(err)=> console.log("Rejected", err));
*/


// 2) ERROR AND .CATCH() - If it's Wednesday, I teach you ReactJS

/*
const date = new Date();
let dayOfWeek = date.getDay();

const reactDatePromise = new Promise(function(resolve, reject){
    if(dayOfWeek === 3){
        resolve("It's time for React!")
    } else {
        throw new Error("Sorry, my laptop's calnedar is messed up.")
    }
});

reactDatePromise.then((val)=> console.log(val));
reactDatePromise.catch((err)=> console.log('error:', err.message));
*/

// 3) PROMISE.ALL - "I promise to show you the pokemons I catched"
/*
    const catchAGengar = new Promise(function(resolve, reject){
        resolve("A Gengar!");
    })

    const catchALombre = new Promise(function (resolve, reject){
        resolve("Oooray, a Lombre!");
    })

    Promise.all([catchAGengar, catchALombre]).then((values)=>{
        console.log(values);
    })
*/



// Promises RECAP

// With .then() and .catch()
/*
const myPromise = new Promise(function(resolve, reject){
    resolve("cool!");
})
}
myPromise.then((value)=> console.log(value), (error)=> console.log(error));
*/

// With Async Await 
/*

function myPromise(){
return myPromise = new Promise(function(resolve, reject){
    resolve("cool!");
})
}

async function consumePromise(){
try{
  let something =  await myPromise();
  console.log(something);
} catch {
}
}

consumePromise();
*/

// Promise.all()
// "The mighty fisherman promises you to show you the sardines and codfishes
// he fished."
/*
const sardine = new Promise(function(resolve,reject){
    resolve("Sardines!");
})

const codfish = new Promise(function(resolve,reject){
    resolve("Codfishes!");
})

Promise.all([sardine, codfish]).then((values)=>{
    console.log(values);
})
*/
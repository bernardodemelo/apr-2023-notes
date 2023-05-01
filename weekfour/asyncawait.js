// async - reserved for asynchronous functions

/*
// Function Declaration
async function someFunction(){
    return console.log(true);
}

someFunction();
*/

/*
// Arrow Function 

const myFunc = async () =>{
    return console.log(true);
}

myFunc();
*/

/*
// Promises Context

const directions = ["Starting point: Rossio", 
"<- Head to Rua Augusta", 
"<- Turn left onto Terreiro do Paço", 
"* Rua do Instituto Virgílio Machado, 14"];

function obtainDirections(step){
    return new Promise((resolve, reject)=>{
        if(directions[step]){
            reject("Instructions not found");
        } else{
            resolve(console.log(directions[step]));
        }
    })
}

async function goToIronhack(){
    try{
    await obtainDirections(0);
    await obtainDirections(1);
    await obtainDirections(2);
    await obtainDirections(3);
    console.log("You arrived at your destination!");
    } catch(err){
        console.log(err);
    }
}

goToIronhack();
*/
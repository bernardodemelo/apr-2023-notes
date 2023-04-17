/*
// TODO: Create a function cutString that accept one parameter 
// which is an Array of Strings.

// The function must find the shortest string inside the Array.

// Found the shortest string, the function must cut (slice)
// the rest of the strings in order to all of them have the 
// same length as the shortest string.

// It should return a new Array of Strings and not update
// the original one. 
/*

let testArray = ['java', 'scriptword', 'MichaelScott'];

function cutString (arrayOfWords){
    //Variable Declaration
    let shortestString = ""
    let newArray = [];

    // Conditional if we have no elements array
    if(arrayOfWords.length === 0){
        return 0;
    }

    // 2nd Iteration = find the shortest string
    for (let i = 0; i<arrayOfWords.length; i++){
        if(i === 0){
            shortestString = arrayOfStrings[i];
        } 
        if(arrayOfWords[i].length<shortestString.length){
            shortestString = arrayOfWords[i];
        }
    }

    console.log(shortestString);

    //3rd Iteration = cut elements and return a New Array
    //with the same length as the shortest string

    newArray = arrayOfWords.map((word)=>{
        return word.slice(0,shortestString.length);
    })

    return console.log(newArray);
}

cutString(testArray); 

// Returns a Value, because it's a Global Scope Variable
console.log(testArray);

// Doesn't return a value, because it's Function Scope Variable
console.log(shortestString);

// Doesn't return a value, because it's a Block Scope Variable
console.log(word);

// Scope 

// Three Kinds of Scopes: Global, Functional, Block 

// Global Scope
/*
let counter = 0; // Global Scope Variable

const countANumber = function(){
    console.log(`Global Scope Variable: ${counter}`);
    for(let i = 0; i<=5; i++){
        counter = i;
        console.log(`Global Scope Variable: ${counter}`);
    }
    return counter;
}

countANumber();

// Function Scope
const countANumber = function(){
    let counter = 0; // Function Scope Variable
    console.log(`Functional Scope Variable: ${counter}`);
    for(let i = 0; i<=5; i++){
        counter = i;
        console.log(`Function Scope Variable inside the For Loop: ${counter}`);
    }
    return counter;
}

countANumber();
console.log(counter);


// Block Scope
const countANumber = function(){
    for(let i = 0; i<=5; i++){
        let counter = 0 // Block Scope Variable
        counter = i;
        console.log(`Block Scope Variable inside For Loop: ${counter}`);
    }
    console.log(`Block Scope Variable outside For Loop: ${counter}`);
    return counter;
}

countANumber();
console.log(`Block Scope Variable: ${counter}`);


// Hoisting 
// is a JS mechanism where variables and 
// function declarations are moved to the top of 
// their scope before JS code execution. 

sayHello('Hello, guys.')

function sayHello(message){
    return console.log(message);
} // => a function declaration will be 
// moved to the top of the code


tomato = 'tomato';
let tomato; // a variable declaration will be moved
// to the top of the code.
console.log(tomato); 

// Shadowing

// Variable Declaration
var number1 = 3; // Global Scope Variable
let number2 = 5;

// Declared a function
function shadowing(){
    // Updating number1
    number1 = 4;  // Function Scope Variable

    // Create a number2  Function Scope variable called number2;
    const number2 = 3; // Function Scope Variable
    for(let i = 0; i<2; i++){
        console.log(i);
    }
    //console.log(number1, number2); // 4, 3
}

shadowing();

console.log(i);
//console.log(number1, number2); // 3,5
*/



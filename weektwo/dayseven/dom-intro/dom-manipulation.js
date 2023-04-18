console.log('JS is connected!');

// .getElementById() - gets an element via the id we wrote.
let catDiv = document.getElementById('cat');

//.innerHTML - updates the HTML content that is inside the element
catDiv.innerHTML = "I'm a fashion cat";

// How to change the style
catDiv.style.backgroundColor = "red";

// Access the class
let miceDivs = document.getElementsByClassName('mouse'); // returns an Array-like OBJECT

// Iterate over each HTML element and change inner HTML


//Creates a REAL array
let arrayOfMice = [...miceDivs];
arrayOfMice.forEach((element)=>{
    element.innerHTML = "I'm a mouse!";
})

arrayOfMice[1].innerHTML= "I'm the second mouse!";


// Access all the divs (via Tag Name)
let divsOfDivs = document.getElementsByTagName('div');


// Access the first element found by Dom  - .querySelector()
let firstMouse = document.querySelector('.mouse'); //goes like CSS
// .className to class e.g.: .class-name
// #id to id e.g.: #id-name
// tagName to tags e.g.: div


// Changing the Inner Conent
firstMouse.innerHTML = "I'm the first mouse";


// Access an input that is a child element of the class 'random-div'
let myInput = document.querySelector('.random-div input');


// Access all Elements - .querySelectorAll();
let allDivs = document.querySelectorAll('div');


// Access Class Name and Change it
let el = document.getElementById('dog');
el.className = 'jogging-active-dog';


// TODO: create a JS function called ChangeColor 
// that changes randomly firstMouse background Colour 
// every two seconds.

// You must change the color via DOM.

let colors = ['red', 'blue', 'yellow', 'orange'];

function changeColor(){
    const randomizeColor = setInterval(function(){
        let randomNumber = Math.round(Math.random()*(colors.length));
        firstMouse.style.backgroundColor = colors[randomNumber];
    }, 2000)
}

changeColor(); 
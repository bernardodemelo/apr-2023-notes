console.log('JS is logged!');


// Want to Access an HTML Attribute
let paragraph = document.getElementById('paragraph');
let paragraphId = paragraph.getAttribute('id');


//set an Attribute
paragraph.setAttribute('id', 'fashion-dog');


//Remove an Attribute
paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'nicolas-cage');


// Create HTML Elements
let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Elephant';
let parent = document.getElementsByTagName('body')[0];

parent.appendChild(h2Tag); // Inserting a h2 Child Element to the
// Parent Tag (which is the body tag). 


// Create HTML Element and insert before another
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before heading 2';
parent.insertBefore(h1Tag, h2Tag);


// Events - Things that Happen to HTML Elements 
// In this Example, a Button Can be CLICKED
let button = document.getElementById('add-item-button');
button.onclick = function(){
    window.alert('Hi!');
}


// Event listener - JS waits until an Event occurs
// In this Example, JS waits until the document is loaded
window.addEventListener('load', function(){
    console.log('Good morning!');
})


// Accessing Input's Value and Change It. 
let input = document.getElementsByTagName('input')[0];
input.value = "Michael Scott";



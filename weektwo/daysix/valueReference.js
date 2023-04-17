/*
// Primitive Data Types

// They are stored and copied by value.
// Two variables are equal if they have the same value.

let price1 = 20.99;
let price2 = 20.99;

console.log(price1 === price2) // true

price2 = 40;

//console.log(price1 === price2) // false - different values

let name1 = 'Erik';
let name2 = 'Francisco';

//console.log(name1 === name2);

name1 = 'Francisco';

//console.log(name1 === name2);

let name3 = name1;

//console.log(name1 === name3);

name3 = 'João';

//console.log(name1 === name3);

let name4; // creating a reference
name4 = 'Victoria'; // passing a value to a variable.

// Non-Primitives
// They are copied not by value, but by reference

const pokemon1 = {
    name: 'Crobat'
};

const pokemon2 = pokemon1;

//console.log(pokemon1 === pokemon2);

pokemon1.name = 'Gourgeist'; // we change pokemon1 and pokemon2'names
// because they're copied by reference
// they have the same address in memory

//console.log(pokemon1); //name of the pokemon is Gourgeist
//console.log(pokemon2); //name of the pokemon is Gourgeist

pokemon2.name = 'Crobat';

//console.log(pokemon1); //name of the pokemon is Crobat
//console.log(pokemon2); //name of the pokemon is Crobat

const pokemon3 = {
    name: 'Crobat'
}

const pokemon4 = {
    name: 'Crobat'
}

//console.log(pokemon3 === pokemon4); //false (they have different
references)

// Duplicating an Object By Value - JSON.parse(JSON.stringify())

const rayquaza = {
    name: 'rayquaza'
}

const newPokemon = JSON.parse(JSON.stringify(rayquaza));

//console.log(rayquaza === newPokemon); // false

rayquaza.category = 'legendary';

//console.log(rayquaza); // category: legendary
//console.log(newPokemon);// without above property

newPokemon.name = 'Pikachu';

//console.log(rayquaza);
//console.log(newPokemon);


// Arrays

let webDevTeam = ['Bernardo', 'Bruno', 'João'];

// Duplicating an Array by reference
ironhackers = webDevTeam;

//console.log(ironhackers === webDevTeam); // true

ironhackers.push('Nicolas Cage');

//console.log(ironhackers); // same value
//console.log(webDevTeam); // same value

// Duplicating an Array by value and not by reference
let ironhackDevTeam = [...webDevTeam]; // spread Operator

// console.log(webDevTeam === ironhackDevTeam); // false

//console.log(webDevTeam); // same value
//console.log(ironhackDevTeam); // same value

ironhackDevTeam.push('Bruce Willis');
//console.log(webDevTeam); // without Bruce Willis
//console.log(ironhackDevTeam); // with Bruce Willis

// Multidimensional Array

const team = [['Bernardo', 'Miguel'], ['Bruno', 'João']];
let spreadTeam = [...team];

// Pushing to the first Array ['Bernardo', 'Miguel'] of the Greater Array

spreadTeam[0].push('Tom Cruise');

const webTeam = [['Bernardo', 'Miguel'], ['Bruno', 'João']];
const jsonTeam = JSON.parse(JSON.stringify(webTeam));

// Pushing to the first Array ['Bernardo', 'Miguel'] of the Greater Array
jsonTeam[0].push('Tom Cruise');

// 1st Try: Spread Operator

// Original Array
console.log(team);

// Copied via Spread Operator
console.log(spreadTeam);

console.log('------');

//2nd Try: JSON.parse(JSON.stringify())

//Original Array
console.log(webTeam);

// Copied with JSON.parse(JSON.stringify())
console.log(jsonTeam);


// OVERALL: Spread Operator is a good 
// solution to single-element arrays

// to multidimensional arrays, use
// JSON.parse(JSON.stringify())
*/



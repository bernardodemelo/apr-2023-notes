// Primitive Data Types

let city1 = "Berlin";
let city2 = city1;

city2 = 'Porto';

// console.log(city1 === city2);

// Non-Primitive Data Types

let digimon1 = {
    name: 'Agumon'
};

// Duplicate by value - Object

let digimon2 = JSON.parse(JSON.stringify(digimon1));

digimon2.name = "Angemon"; 

// console.log(digimon1.name, digimon2.name);

// Duplicate by Value - Array 

let array1 = ['Agumon', 'Angemon'];

let array2 = [...array1];

// ... => Spread Operator - 
// grabs the content of the array and creates a new one

// console.log(digimon1 === digimon2);

// Destructuring

let person = {
    name: 'Ironhacker', 
    age: 23, 
    favoriteMusic: 'Metal', 
    favoriteBand: 'Slayer'
}; 

// Grandpa Way
let bandOfIronhacker = person.favoriteBand;
let nameOfIronhacker = person.name;

// ES6 Way - Object Destructuring
/*let {name, age, favoriteMusic, favoriteBand} = person;
console.log(name);*/

// Object Destructuring - Create a New Value
/*let {name, age, favoriteMusic, favoriteBand, secondFavBand = "Tokyo Hotel"} = person;
console.log(secondFavBand);*/

// Object Destructuring - Create a New Property Name
/*let {name: fullName, age, favoriteMusic, favoriteBand, secondFavBand = "Tokyo Hotel"} = person;
console.log(fullName);*/

// Nested Objects Destructuring 
let ironhacker = {
    name: 'Ironhacker', 
    age: 530, 
    favoriteMusic: 'Classic', 
    favoriteArtist: {
        firstOne: 'Bach',
        secondOne: 'Vivaldi',
        thirdOne: '4Taste'
    }
}

/*
let {name, age, favoriteMusic, favoriteArtist: {firstOne, secondOne, thirdOne}} = ironhacker;

console.log(thirdOne); */

// Exercise 1

const data = {
    name: {
      firstName: 'ana',
      lastName: 'marino',
    },
    isStudent: true,
    favoriteFootballTeam: 'fc barcelona',
    hometown: {
      city: 'buenos aires',
      country: 'argentina',
    },
};

// Destructure this nested Object
// let {name: {firstName, lastName}, isStudent, favoriteFootballTeam, hometown:{city, country}} = data;
// console.log(data.hometown.city) and console.log(data.isStudent);
//console.log(city, isStudent);

/* Array Destructuring */

const campuses = ['madrid', 'barcelona', 'miami'];
const [firstCampus, secondCampus, thirdCampus] = campuses;

//console.log(firstCampus);

/* Array Destructuring - First */

const [ , , , marcelo = "Algueirão"] = campuses;

//console.log(marcelo);

/* Spread Operator - Concat Two Arrays */

const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['dog', 'cat', 'dolphin'];

const animals = [...reptiles, ...mammals];

//console.log(animals);

/* Mixed Objects */

const customer = {
    name: {
        firstName: 'Ivan', 
        lastName: 'the Terrible'
    },
    age: 12465, 
    preferences: [{
        music: ['4taste', 'dzrt', 'just girls', 'Stravinsky'], 
        books: ['drama', 'action', 'game of thrones']
    }]
}

let {
    name: {firstName, lastName},
    age,
    preferences: [{music, books}]
} = customer; 

console.log(music[0]);





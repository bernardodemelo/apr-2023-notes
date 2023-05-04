// Requiring Mongoose
const mongoose = require('mongoose');

// Require Cat Model 
// Model called Cat --> if we add a Cat object to Db --> cats
const Cat = require('./models/Cat.js');

//Mongoose Configuration

mongoose.connect('mongodb://127.0.0.1/exampleApp')
.then(info => console.log(`Connected to Mongo! Database name: ${info.connections[0].name}`))
.catch(err => console.error('Error connecting to mongo', err));


/* 
Example with outside index.js Model (Cat) 
async function manageCatDb(){
    try{
        let pantufa = {name: 'Pantufa', age: 53, color: 'tan'};
        await Cat.create(pantufa);

        let foundPantufa = await Cat.find({name: 'Pantufa'});
        console.log(foundPantufa);

        // Find a Cat which has the age > 50 
        let oldCat = await Cat.find({age: {$gte: 50}});
        console.log(oldCat);
    }
    catch(error){
        console.log(error);
    }
}

manageCatDb()
*/

/* Example with inside index.js Model (Pokemon)) 
const Pokemon = mongoose.model('Pokemon', {name: String});

const mewTwo = new Pokemon({name: 'Mewtwo'});
const rayquaza = new Pokemon({name: 'Rayquaza'});

async function manageDb(){
    try{
        // Saving Rayquaza to the DB. 
        let savedRayquaza = await rayquaza.save();
        let savedMewTwo = await mewTwo.save();

        // Find all elements inside pokemons collection 
        //let allPokemons = await Pokemon.find();
        //console.log(allPokemons);

        /* Create */
        //let crobat = {name: 'Crobat'};
        //await Pokemon.create(crobat);

        /* Read */
        //let someCrobat = await Pokemon.find({name: 'Crobat'});
        //console.log(someCrobat);

        /* Update */
        // Find All Pokemons with name 'Crobat' and replace name to 'Tom'
        //let allCrobats = await Pokemon.updateMany({name: 'Crobat'}, {name: 'Tom'});
        //let tomCrobats = await Pokemon.find({name: 'Tom'});
        //console.log(tomCrobats);

        // Find the first 'TomCrobat' Pokemon and replace name to 'Jerry'
        //let firstTomCrobat = await Pokemon.updateOne({name: 'Tom'}, {name: 'Jerry'});
        //let jerryCrobat = await Pokemon.find({name: 'Jerry'});
        //console.log(jerryCrobat);

        // Find by Id and update name to 'John Cena'
        //let idTomCrobat = await Pokemon.findByIdAndUpdate('6453a43a900d7faec190fc8e', {name: 'John Cena'});
        //let johnCenaCrobat = await Pokemon.find({name: 'John Cena'});
        //console.log(johnCenaCrobat)

        /* Delete */
        // Find all the Pokemons that have the name 'Tom' and delete them; 
        //let deletedTom = await Pokemon.deleteMany({name: 'Tom'});
        //let tomCrobats = await Pokemon.find({name: 'Tom'});
        //console.log(tomCrobats);

        // Find the first John Cena and delete
        //let deleteFirstCena = await Pokemon.deleteOne({name: 'John Cena'});
        // let johnCena = await Pokemon.find({name: 'John Cena'});
        // console.log(johnCena);

        // Find by Id and delete 
        //let idPokemon = await Pokemon.findByIdAndDelete('6453a2f7e06cd5589b6ffbb2');
        //let idRayquaza = await Pokemon.findById('6453a2f7e06cd5589b6ffbb2');
        //console.log(idRayquaza);


        // C - Create
        // R - Read
        // U - Update
        // D - Delete
    /*
    }
    catch(error){

    }
}

manageDb();

*/
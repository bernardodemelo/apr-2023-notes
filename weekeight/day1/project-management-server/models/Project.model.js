// Mongoose is a technology that handles Data Models;

// A Model stands for Data Bodies of future Documents;

// A Schema is the skeleton of the future Document;

// A group of Documents of the same kind is called
// a Collection. 

// Model called 'Pokemon' --> Collection: 'pokemons'.

const {Schema, model} = require('mongoose');

const projectSchema = new Schema({
    title: String, 
    description: String, 
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}]
})

// Export the Model
module.exports = model('Project', projectSchema);